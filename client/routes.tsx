import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import Layout from './components/Layout'
import App from './components/App'
import JobPage from './components/JobPage'
import CreateJobForm from './components/CreateJobForm'
import EditJob from './components/EditJob'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/:id" element={<JobPage />} />
    <Route path="/:id/edit" element={<EditJob />} />
    <Route path="/add" element={<CreateJobForm />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
