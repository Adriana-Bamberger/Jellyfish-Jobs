import { JobData } from '../../models/job'
import { useJobById } from '../hooks/useJobs'
import { useParams } from 'react-router-dom'

// interface Props {
//   job: Job
// }
// { id }: Props

export default function JobPage() {
  const params = useParams()
  const id = Number(params.id)
  const { data, isLoading, isError } = useJobById(id)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error!</p>
  }

  if (data) {
    return (
      <>
        <main>
          <div>
            {data.logo}
            {data.logoBackground}
            <h2>{data.company}</h2>
            <p>{data.website}</p>
            <button>{data.apply}</button>
          </div>
          <div>
            <p>{data.postedAt}</p>
            <p>{data.contract}</p>
          </div>
          <div>
            <h1>{data.position}</h1>
            <p>{data.location}</p>
          </div>
          <div>
            <p>{data.description}</p>
            <h3>Requirements</h3>
            <p>{data.requirements.content}</p>
            <p>{data.requirements.items}</p>
            <h3>What You Will Do</h3>
            <p>{data.role.content}</p>
            <p>{data.role.items}</p>
          </div>
          <div>
            <p>{data.company}</p>
            <h3>{data.position}</h3>
            <button>{data.apply}</button>
          </div>
        </main>
      </>
    )
  }
}
