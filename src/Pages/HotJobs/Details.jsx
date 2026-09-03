import React from 'react'
import { useLoaderData } from 'react-router'

const Details = () => {
    const {title,company }= useLoaderData(); 
  return (
    <div>
      <h2>Details for : {title}</h2>
<p>{company}</p>
<button className='btn btn-primary'>Apply Now</button>
    </div>
  )
}

export default Details
