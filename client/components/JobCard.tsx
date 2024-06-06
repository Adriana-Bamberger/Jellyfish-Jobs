import { Link } from 'react-router-dom'
// Import a function that gets all our jobs usually from somting like: '../hooks/api.ts'
import { Job } from '../../models/job'

export default function JobCard(job: Job) {
  return (
    <>
      <div className="bg-white shadow-md rounded-md border border-gray-200 overflow-hidden p-4">
        <img src={job.logo} alt={job.company} />
        <span className="text-gray-700">
          {job.postedAt} - {job.contract}
        </span>
        <Link to={`/${job.id}`}>
          <h3 className="font-bold text-xl">{job.position}</h3>
        </Link>
        <p className="text-gray-700">{job.company}</p>
        <p className="text-purple-700">{job.location}</p>{' '}
      </div>
    </>
  )
}
