import { NavLink, Outlet } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    isActive
      ? 'text-white bg-white/15'
      : 'text-white/60 hover:text-white hover:bg-white/10',
  ].join(' ')

export default function Layout() {
  return (
    <div className="min-h-screen font-sans text-neutral-100
                    bg-[radial-gradient(circle_at_50%_45%,_#374151,_#0a0a0a_70%)]">
      <nav className="sticky top-0 z-10 flex items-center gap-6
                      px-6 py-3.5
                      bg-black/50 backdrop-blur-md
                      border-b border-white/10
                      shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
        <span className="text-[15px] font-semibold tracking-tight text-white">
          Todo
        </span>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
        </div>
      </nav>

      <main className="mx-auto max-w-xl px-5 py-12">
        <Outlet />
      </main>
    </div>
  )
}