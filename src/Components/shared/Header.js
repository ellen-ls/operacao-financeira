import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input 
            type='text' 
            placeholder='Pesquisar...' 
            className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md pl-11 pr-4'/>
        </div>
        <div className=' relative'>
            <div>
                <div className='ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400'>
                   <div className=' h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                    style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}}
                    >
                     <span className='sr-only'>Maria</span>
                    </div>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Header
