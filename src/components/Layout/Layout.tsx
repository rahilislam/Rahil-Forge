import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div id="top" className="site-layout">
      <Navbar />
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  )
}
