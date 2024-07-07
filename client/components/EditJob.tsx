import { useParams } from 'react-router-dom'
import EditJobForm from './EditJobForm'
import { useJobById } from '../hooks/useJobs'

export default function EditJob() {
  const params = useParams()
  const id = Number(params.id)
  if (isNaN(id)) {
    throw new Error(`Route param "id" is missing or invalid`)
  }

  const job = useJobById(id)

  if (job.isPending) {
    return <span>Loading...</span>
  }

  if (job.isError || !job.data) {
    return <span>Error....</span>
  }

  return <EditJobForm {...job.data} />
}
