"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { NavBarDemo } from "./tubelight-navbar.demo";

interface AuroraBackgroundDemoProps {
  children?: React.ReactNode;
}

export function AuroraBackgroundDemo({ children }: AuroraBackgroundDemoProps) {
  return (
    <AuroraBackground>
      <div className="min-h-screen flex">
        {/* Left Sidebar - Profile */}
        <div className="w-80 border-r border-white/10 p-8 flex flex-col items-center gap-6 fixed h-screen bg-black/20 backdrop-blur-sm">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/10">
            <Image
              src="/assests/images/bio-photo.jpg"
              alt="Shitanshu Bhushan"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white text-center">
            Shitanshu Bhushan
          </h1>
          <p className="text-lg text-white/70 text-center">
            Graduate student at University of Michigan, Ann Arbor
          </p>
          <div className="flex flex-col gap-3 w-full">
            <a
              href="https://drive.google.com/file/d/1VT-Qpz63EXlxe3ObXlMmDxUCjD07rdO4/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-center"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com/in/shitanshu-bhushan-ba897b171"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shitanshubhushan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-center"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="ml-80 flex-1">
          <NavBarDemo />
          {/* Content Grid */}
          <div className="p-8 mt-24">
            {children}
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 