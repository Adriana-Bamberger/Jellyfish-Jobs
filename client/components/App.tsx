import { useJobs } from '../hooks/useJobs.ts'
import JobCard from './JobCard.tsx'

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
        <div className="header">This is the header</div>
        <div className="mt-6 grid grid-cols-1 gap-x-6">
          {data && data.map((job) => <JobCard key={job.id} {...job} />)}
        </div>
        <div className="footer">This is the footer</div>
      </div>
    </>
  )
}

export default App
