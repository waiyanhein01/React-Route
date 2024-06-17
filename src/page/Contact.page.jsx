import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const nav = useNavigate();
  const {state:{text},pathname,search} = useLocation()
  const handleToBack = () => {
    nav(-1)
  };
  console.log(pathname,search) 
  return (
    <div className=' flex flex-col justify-center items-center w-auto h-screen'>
      <p className='pt-3'>ContactPage</p>
    My Contact is {text}.

      <button onClick={handleToBack} className=' bg-gray-900 text-slate-50 rounded-lg hover:ring-2 ring-fuchsia-400 px-2 py-2 mt-3'>Back</button>
    </div>
  )
}

export default ContactPage
