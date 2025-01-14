"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 100);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          Shitanshu Bhushan
        </a>
        <div className="flex gap-6">
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </a>
          <a
            href="https://drive.google.com/file/d/1VT-Qpz63EXlxe3ObXlMmDxUCjD07rdO4/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/shitanshu-bhushan-ba897b171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shitanshubhushan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
} 