import { useJobById } from '../hooks/useJobs'
import { useParams } from 'react-router-dom'

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
    console.log('JobPage data: ', data)
    return (
      <>
        <main>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              {data.logo}
              {data.logoBackground}
              <h2>{data.company}</h2>
              <p>{data.website}</p>
              <button className="inline-flex items-center rounded-md bg-indigo-600 px-1 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {data.apply}
              </button>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <p className="mt-2 text-sm text-gray-500">
                {data.postedAt} * {data.contract}
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.position}
              </h1>
              <p className="mt-2 text-m text-purple-700 font-semibold">
                {data.location}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-1 sm:gap-y-4">
              <p className="mt-2 text-sm text-gray-500">{data.description}</p>
              <h3 className="font-medium text-gray-900">Requirements</h3>
              <p className="mt-2 text-sm text-gray-500">
                {data.requirements.content}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {data.requirements.items}
              </p>
              <h3>What You Will Do</h3>
              <p className="mt-2 text-sm text-gray-500">{data.role.content}</p>
              <p className="mt-2 text-sm text-gray-500">{data.role.items}</p>
            </div>
            <div>
              <p className="mt-2 text-sm text-gray-500">{data.company}</p>
              <h3>{data.position}</h3>
              <button>{data.apply}</button>
            </div>
          </div>
        </main>
      </>
    )
  }
}
