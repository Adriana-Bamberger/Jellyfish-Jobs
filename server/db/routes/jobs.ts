import db from '../connection.ts'
import { dbJob, JobData } from '../../../models/job.ts'

const columns = [
  'id',
  'company',
  'logo',
  'logo_background as logoBackground',
  'position',
  'posted_at as postedAt',
  'contract',
  'location',
  'website',
  'apply',
  'description',
  'requirements',
  'role',
]

export async function getAllJobs(): Promise<dbJob[]> {
  return db('jobs').select(...columns)
}
