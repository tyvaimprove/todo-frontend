import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" end>Todo</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}