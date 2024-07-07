import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getJobById, getJobs } from '../apis/jobs.ts'
import { Job, JobData } from '../../models/job.ts'
import request from 'superagent'

export function useJobs() {
  const query = useQuery({ queryKey: ['jobs'], queryFn: getJobs })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useJobsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
export function useJobById(id: number) {
  const query = useQuery({
    queryKey: ['job', id],
    queryFn: () => getJobById(id),
  })
  return {
    ...query,
  }
}

export function useCreateJob() {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (job: JobData) => {
      // console.log(job)
      const res = await request.post('/api/v1/jobs').send(job)
      return res.body
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}

export function useUpdateJob(id: number) {
  const client = useQueryClient()

  return useMutation({
    mutationFn: async (job: Job) => {
      //   console.log(job)
      const res = await request.patch(`/api/v1/jobs/${id}`).send(job)
      return res.body
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['job', id] })
    },
  })
}
