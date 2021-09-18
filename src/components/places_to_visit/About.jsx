import React from 'react'

const About = ({location}) => {

  const {name,about} = location;
  return (
    <div className="col-6">
      <h3 className="text-bold">About <span className="text-success">{name}</span></h3>
      <p>{about}</p>     
    </div>
  )
}

export default About;
