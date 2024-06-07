import { Outlet } from 'react-router-dom'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

export default function Layout() {
  return (
    <>
      <div id="page-container" className="mx-auto max-w-7xl px-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
