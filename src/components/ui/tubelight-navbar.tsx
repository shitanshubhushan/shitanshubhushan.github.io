"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  isExternal: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Find the matching item based on the current pathname
    const currentItem = items.find(item => {
      if (pathname === "/") {
        return item.url === "/"
      }
      return item.url === pathname
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderLink = (item: NavItem) => {
    const Icon = item.icon
    const isActive = activeTab === item.name
    const commonClasses = cn(
      "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
      "text-foreground/80 hover:text-primary",
      isActive && "bg-muted text-primary"
    )

    if (item.isExternal) {
      return (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setActiveTab(item.name)}
          className={commonClasses}
        >
          <span className="hidden md:inline">{item.name}</span>
          <span className="md:hidden">
            <Icon size={18} strokeWidth={2.5} />
          </span>
          {isActive && (
            <motion.div
              layoutId="lamp"
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
              </div>
            </motion.div>
          )}
        </a>
      )
    }

    return (
      <Link
        key={item.name}
        href={item.url}
        className={commonClasses}
      >
        <span className="hidden md:inline">{item.name}</span>
        <span className="md:hidden">
          <Icon size={18} strokeWidth={2.5} />
        </span>
        {isActive && (
          <motion.div
            layoutId="lamp"
            className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
              <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
            </div>
          </motion.div>
        )}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex justify-center py-6",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map(renderLink)}
      </div>
    </div>
  )
}