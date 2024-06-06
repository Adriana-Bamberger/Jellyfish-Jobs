import { useJobs } from '../hooks/useJobs.ts'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

function App() {
  const { data } = useJobs()

  return (
    <>
      <div className="app">
        <Header />

        <ul>
          {data && data.map((job) => <li key={job.id}>{job.company}</li>)}
        </ul>

        <Footer />
      </div>
    </>
  )
}

export default App
