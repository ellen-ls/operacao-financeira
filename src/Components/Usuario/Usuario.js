import React from 'react'
import { useNavigate } from 'react-router-dom'

function Usuario() {

    const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-t from-[#0056FE] to-[#2E3CBD] text-white flex justify-center items-center min-h-screen p-4'>
      usuario
      
      <button className='text-black bg-slate-600' onClick={()=> navigate('/')}>botao</button>
      
    </div>
  )
}

export default Usuario
