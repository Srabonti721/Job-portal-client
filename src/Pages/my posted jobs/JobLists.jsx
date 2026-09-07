import React, { use } from 'react'

const JobLists = ({myPostedJobsPromice}) => {
    const jobs = use(myPostedJobsPromice);
    console.log(jobs);
    

  return (
    <div>
      <h2 className='text-3xl'>Jobs Created for you :{jobs.length}</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Deadline</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job, index)=><tr key={job._id}>
        <th>{index + 1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>Blue</td>
      </tr>)
      }
 
    </tbody>
  </table>
</div>
    </div>
  )
}

export default JobLists
