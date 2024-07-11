import React from 'react'
import logo from './Img/logo-financeiro.png'
import {DASHBOARD_SIDEBAR_LINKS} from '../../lib/consts/navigations'
import { Link } from 'react-router-dom'


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-sky-950 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
        <div className='flex'>
            <img className='size-8 rounded-xl' src={logo} alt=''></img>
            <span className='text-neutral-100 text-lg p-2'>Operação Financeira</span>
        </div>
        <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
        <div>Bottom part</div>
      
    </div>
  )
}

function SidebarLink({item}){
return(
    <Link to={item.path} className={linkClasses}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
)
}

export default Sidebar
