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
          <div className="min-w-0 flex-1">
            <div className="bg-red-50 h-16 w-16">
              <img src={data.logo} alt={data.company} className="h-16" />
            </div>
            {/* {data.logoBackground}
            {data.logo} */}
          </div>
          <div className="lg:flex lg:items-center">
            <div className="min-w-0 flex-1">
              {/* ^ this one is what moves the button */}
              <h2 className="font-lg text-xl text-purple-900">
                {data.company}
              </h2>
              <p className="mt-2 text-sm text-gray-500">{data.website}</p>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"></div>
            </div>

            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <p>Company Site</p>
                </button>
              </span>
            </div>
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
            <div className="min-w-0 flex-1">
              <button className="items-center rounded-md bg-indigo-600 px-1 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <p>Apply</p>
              </button>
            </div>
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
            <h3 className="font-medium text-gray-900">What You Will Do</h3>
            <p className="mt-2 text-sm text-gray-500">{data.role.content}</p>
            <p className="mt-2 text-sm text-gray-500">{data.role.items}</p>
          </div>
          <div>
            <p className="mt-2 text-sm text-gray-500">{data.company}</p>
            <h3>{data.position}</h3>
            <button className="inline-flex items-center rounded-md bg-indigo-600 px-1 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <p>Apply</p>
            </button>
          </div>
          {/* </div>
          </div> */}
        </main>
      </>
    )
  }
}
