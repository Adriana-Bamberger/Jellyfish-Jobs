import { Outlet } from 'react-router-dom'
import { useJobs } from '../hooks/useJobs.ts'

function App() {
  const { data, isLoading, isError } = useJobs()

  if (isLoading) {
    return <p>Loading data...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <>
      <div className="app">
        <ul>
          {data && data.map((job) => <li key={job.id}>{job.company}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
