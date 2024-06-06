import { Router } from 'express'

import * as db from '../db/routes/jobs.ts'

import { Job } from '../../models/job.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getAllJobs()

    const parsedJobs = jobs.map((job) => {
      const { requirements, role, ...rest } = job
      return {
        ...rest,
        requirements: JSON.parse(requirements),
        role: JSON.parse(role),
      }
    }) as Job[]

    res.json(parsedJobs)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
