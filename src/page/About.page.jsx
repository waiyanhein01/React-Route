import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
  const {state:{Name}} = useLocation()
  return (
    <div className=' flex flex-col justify-center items-center w-auto h-screen'>
      AboutPage
      <p>Hello! My name is {Name}</p>
    </div>
  )
}

export default AboutPage
