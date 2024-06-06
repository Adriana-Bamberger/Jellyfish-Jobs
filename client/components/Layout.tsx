import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div id="page-container">
        <Outlet />
      </div>
    </>
  )
}
