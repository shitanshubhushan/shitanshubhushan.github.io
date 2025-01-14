import { Home, User, Briefcase, FileText, BookOpen } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home, isExternal: false },
    { name: 'About', url: '/about', icon: User, isExternal: false },
    { name: 'Projects', url: 'https://github.com/shitanshubhushan', icon: Briefcase, isExternal: true },
    { name: 'Blog', url: 'https://medium.com/@shitanshu273', icon: BookOpen, isExternal: true },
    { name: 'Resume', url: 'https://drive.google.com/file/d/1VT-Qpz63EXlxe3ObXlMmDxUCjD07rdO4/preview', icon: FileText, isExternal: true }
  ]

  return <NavBar items={navItems} className="w-full" />
} 