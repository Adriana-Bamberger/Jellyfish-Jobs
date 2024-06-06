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

  console.log(data)

  return (
    <>
      <div className="app">
        <h1>Dev Job Board</h1>
        {data && data.map((job) => <JobCard key={job.id} {...job} />)}
      </div>
    </>
  )
}

export default App
