import request from 'superagent'
import { Job } from '../../models/job'

const rootUrl = '/api/v1'

export function getJobs(): Promise<Job[]> {
  return request.get(rootUrl + '/jobs').then((res) => {
    return res.body
  })
}

export function getJobById(id: number): Promise<Job> {
  return request.get(rootUrl + `/jobs/${id}`).then((res) => {
    return res.body
  })
}
