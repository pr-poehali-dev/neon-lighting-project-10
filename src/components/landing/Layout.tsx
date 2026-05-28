import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={60}
          borderColor="#2a1f0e"
          hoverFillColor="#3d2e14"
        />
      </div>
      <div className="relative z-20 h-full">
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 py-4">
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg md:text-xl tracking-wide leading-tight">Федив Иван</span>
            <span className="text-amber-300 text-xs md:text-sm tracking-widest uppercase">Скульптор-художник</span>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}