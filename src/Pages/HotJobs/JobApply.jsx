import React from 'react'
import { Link, useParams } from 'react-router'
import useAuth from '../../Hooks/useAuth';

const JobApply = () => {
  const {id:jobID} = useParams();
  const {user} = useAuth()
  console.log(jobID, user);

  const handleApplyFormSubmit = e =>{
    e.preventDefault();
    const form  = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const application ={
      jobID,
      applicant:user.email,
      linkedIn,
      github, 
      resume
    }
    
  }
  
  return (
    <div>
      <h2>Apply job for :<Link to={`/jobs/${jobID}`}>Details</Link> </h2>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <label className="label">LinkedIn Link</label>
  <input name='linkedIn' type="url" className="input" placeholder="LinkedIn Link" />
  <label className="label">GitHub Link</label>
  <input name='github' type="url" className="input" placeholder="GitHub Link" />
  <label className="label">Resume Link</label>
  <input name='resume' type="url" className="input" placeholder="resume Link" />
<input type="submit" className='btn' value="Apply" />

</fieldset>
      </form>
    </div>
  )
}

export default JobApply
