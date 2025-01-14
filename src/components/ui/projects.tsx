"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "LMAOCaT: Low-rank Mamba and gated Attention Optimization",
    description: "Recreated LoLCATs and developed a hybrid attention framework integrating Gated Linear Attention and Mamba blocks into Llama 3.2 1B, achieving O(n) inference scaling while maintaining 34.5% accuracy on HellaSwag",
    link: "#",
    tags: ["Machine Learning", "Python", "PyTorch"],
    date: "Oct. 2024 – Dec 2024"
  },
  {
    title: "DSA Cognitive Tutor for Binary Trees",
    description: "Engineered a Flask-based intelligent tutoring system for data structures, implementing cognitive models derived from CTA to deliver adaptive learning paths and personalized feedback using GPT",
    link: "#",
    tags: ["Python", "Flask", "GPT", "Machine Learning"],
    date: "Sep. 2024 – Dec 2024"
  }
];

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export function Projects() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shitanshu273`
        );
        const data = await response.json();
        setPosts((data.items || []).slice(0, 3)); // Only take the first 3 posts
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="space-y-20">
      <section id="projects">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 h-full"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="text-sm text-white/60 whitespace-nowrap ml-4">{project.date}</span>
              </div>
              <p className="text-white/70 mb-4 text-sm">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="blog">
        <h2 className="text-3xl font-bold text-white mb-8">Latest Blog Posts</h2>
        {loading ? (
          <div className="text-white/70">Loading posts...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-white/60 mt-1">
                      {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div
                    className="text-white/70 text-sm prose prose-invert line-clamp-3 mt-auto"
                    dangerouslySetInnerHTML={{
                      __html: post.description.split("<p>")[0] + "</p>",
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
} 