import { Link } from 'react-router-dom'
// Import a function that gets all our jobs usually from somting like: '../hooks/api.ts'
import { Job } from '../../models/job'

export default function JobCard(job: Job) {
  return (
    <>
      <div className="job">
        <Link to={`/${job.id}`}>
          {/*  Add Image here, svg file howww */}
          {/* <img className="job-icon" src={job.logo} alt={job.name} />*/}
          <span>
            {job.postedAt}
            {job.contract}
          </span>
          <h3>{job.position}</h3>
        </Link>
        <p>{job.company}</p>
        <p>{job.location}</p>{' '}
        {/* Need some extra styling here this bottom text is in the purple colour */}
      </div>
    </>
  )
}
