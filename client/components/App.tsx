import { useState } from 'react'
import { useJobs } from '../hooks/useJobs.ts'
import JobCard from './JobCard.tsx'
import { SearchBar } from './SearchBar.tsx'

function App() {
  const [searchItem, setSearchItem] = useState('')
  // const [filteredJobs, setFilteredJobs] = useState<Job[]>()
  const { data, isLoading, isError } = useJobs()

  if (isLoading) {
    return <p>Loading data...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  if (data) {
    const filteredData = data.filter((job) => {
      return Object.values(job)
        .join(' ')
        .toLowerCase()
        .includes(searchItem.toLowerCase())
    })
    console.log(searchItem)
    return (
      <>
        <SearchBar setSearchItem={setSearchItem} />
        <div className="app">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredData &&
              filteredData.map((job) => <JobCard key={job.id} {...job} />)}
          </div>
        </div>
      </>
    )
  }
}

export default App
