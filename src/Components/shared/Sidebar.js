import React from 'react'
import logo from './Img/logo-financeiro.png'
import {DASHBOARD_SIDEBAR_LINKS} from '../../lib/consts/navigations'
import { Link, useLocation } from 'react-router-dom'
import { LuLogOut } from "react-icons/lu";
import classname from 'classname';


const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-sky-950 hover:no-underline active:bg-sky-950 rounded-sm text-base'

function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
        <div className='flex'>
            <img className='size-8 rounded-xl' src={logo} alt=''></img>
            <span className='text-neutral-100 text-lg p-2'>Operação Financeira</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            <div className='text-xl'>
                <Link to={'/'} className={linkClasses}>
                
                <span className='text-xl text-red-800 font-bold'>Sair</span>
                <LuLogOut className='text-xl text-red-800' />
                </Link>
            </div>
            
        </div>
      
    </div>
  )
}

function SidebarLink({item}){
    const {pathname} = useLocation()
return(
    <Link to={item.path} className={classname(pathname === item.path ? 'bg-sky-950 text-white': 'text-neutral-400', linkClasses)}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
)
}

export default Sidebar
