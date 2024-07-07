import db from '../connection.ts'
import { dbJob, dbJobData, Job, JobData } from '../../../models/job.ts'

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

const mainJobsColumns = [
  'id',
  'company',
  'logo',
  'logo_background as logoBackground',
  'position',
  'posted_at as postedAt',
  'contract',
  'location',
]

export async function getAllJobs(): Promise<dbJob[]> {
  return db('jobs').select(...mainJobsColumns)
}

export async function getJobById(id: number): Promise<dbJob> {
  return db('jobs')
    .select(...columns)
    .where({ id })
    .first()
}

export async function addNewJob(newJobData: dbJobData): Promise<number> {
  return db('jobs').insert({ ...newJobData }, ['id'])
}

export async function updateJob(JobData: dbJob): Promise<number> {
  const { id, ...newJobData } = JobData
  //   console.log(`updateJob: ${id}`, newJobData)
  return db('jobs')
    .where({ id })
    .update({ ...newJobData })
}
