import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import Layout from './components/Layout'
import App from './components/App'
import JobPage from './components/JobPage'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/:id" element={<JobPage />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
