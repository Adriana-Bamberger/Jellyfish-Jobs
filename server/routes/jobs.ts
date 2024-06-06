import { Router } from 'express'

import * as db from '../db/routes/jobs.ts'

import { Job, JobData, dbJobData } from '../../models/job.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getAllJobs()

    // const parsedJobs = jobs.map((job) => {
    //   const { requirements, role, ...rest } = job
    //   return {
    //     ...rest,
    //     requirements: JSON.parse(requirements),
    //     role: JSON.parse(role),
    //   }
    // }) as Job[]

    res.json(jobs)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const job = await db.getJobById(id)
    const { requirements, role, ...rest } = job
    const parsedJob = {
      ...rest,
      requirements: JSON.parse(requirements),
      role: JSON.parse(role),
    }
    res.json(parsedJob)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { requirements, role, logoBackground, postedAt, ...rest } = req.body
    const newJobRecord: dbJobData = {
      ...rest,
      logo_background: logoBackground,
      posted_at: postedAt,
      requirements: JSON.stringify(requirements),
      role: JSON.stringify(role),
    }
    const newJobId = await db.addNewJob(newJobRecord)
    res.json(newJobId)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
