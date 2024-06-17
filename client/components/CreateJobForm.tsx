import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateJob } from '../hooks/useJobs'

export default function CreateJobForm() {
  const create = useCreateJob()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    company: 'Scoot',
    logo: './images/logos/scoot.svg',
    logoBackground: '#ea9310',
    position: 'Senior Vice President',
    postedAt: 'Just now',
    contract: 'Freelance',
    location: 'Vatican',
    website: 'https://example.com/scoot',
    apply: 'https://example.com/scoot/apply',
    description: 'Be the awesomest VP in Vatican',
    requirements: {
      content: 'The ideal candidate is 100 years old to ensure fast succesion',
      items: ['Age: 100+', '99 years of experience in development'],
    },
    role: {
      content: 'We are looking for the next Vatican VP of Scoot',
      items: ['Be old and grumpy'],
    },
  })

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    if (create.isPending) {
      return
    }
    console.log(formState)
    await create.mutateAsync({ ...formState })
    navigate('/')
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item">
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formState.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="logo">Logo: </label>
          <input
            type="text"
            name="logo"
            id="logo"
            value={formState.logo}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="logoBackground">Logo Background: </label>
          <input
            type="text"
            name="logoBackground"
            id="logoBackground"
            value={formState.logoBackground}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            value={formState.position}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="contract">Contract: </label>
          <input
            type="text"
            name="contract"
            id="contract"
            value={formState.contract}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formState.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            id="website"
            value={formState.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="apply">Apply: </label>
          <input
            type="text"
            name="apply"
            id="apply"
            value={formState.apply}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            id="description"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            value={formState.position}
            onChange={handleChange}
          />
        </div>
        <button
          data-pending={create.isPending}
          className="w-[128px] p-[2px] *:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          Submit
        </button>
      </form>
    </>
  )
}
