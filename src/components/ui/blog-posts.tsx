"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export function BlogPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shitanshu273`
        );
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog">
      {loading ? (
        <div className="text-white/70">Loading posts...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <span className="text-sm text-white/60">
                  {new Date(post.pubDate).toLocaleDateString()}
                </span>
              </div>
              <div
                className="text-white/70 text-sm prose prose-invert"
                dangerouslySetInnerHTML={{
                  __html: post.description.split("<p>")[0] + "</p>",
                }}
              />
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
} 