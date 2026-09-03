import React, { use } from 'react'
import JobsCard from '../Shared/jobCard/JobsCard'

const HotJobs = ({jobsPromice}) => {
    const jobs = use(jobsPromice)
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-4'>Hot jobs of the day</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {
          jobs.map(job=><JobsCard key={job.job_id} job={job}></JobsCard>)
        }
      </div>
    </div>
  )
}

export default HotJobs
