import { useJobs } from '../hooks/useJobs.ts'

function App() {
  const { data } = useJobs()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {data && data.map((job) => <li key={job.id}>{job.company}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
