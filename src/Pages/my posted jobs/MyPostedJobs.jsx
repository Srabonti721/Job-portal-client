import React, { Suspense } from 'react'
import JobLists from './JobLists'
import useAuth from '../../Hooks/useAuth'
import { myPostedJobsPromice } from '../../api/JobsApi';

const MyPostedJobs = () => {
  const {user} = useAuth();
  return (
    <div>
      <h2>My posted jobs</h2>
      <Suspense fallback={"loading..."}>
        <JobLists myPostedJobsPromice={myPostedJobsPromice(user.email)}/>
      </Suspense>
    </div>
  )
}

export default MyPostedJobs
