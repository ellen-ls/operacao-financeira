import React, { useState } from 'react'

import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [activePanel, setActivePanel] = useState('signin');
    const navigate = useNavigate()
    
  return (
    <div className="bg-gradient-to-t from-[#0056FE] to-[#2E3CBD] text-white flex justify-center items-center min-h-screen p-4">
      <main className="grid w-full max-w-sm backdrop-blur-sm">
        <div className="grid grid-cols-2 cursor-pointer text-base text-center relative isolate">
          <label
            id="tab-1"
            className={`cursor-pointer ${activePanel === 'signin' ? 'bg-white border-x border-teal-200/50  py-4 px-6 text-center text-gray-800 transition-all duration-300 font-bold' : ''}`}
            onClick={() => setActivePanel('signin')}
           >
            Sign in
          </label>
          <label
            id="tab-2"
            className={`cursor-pointer ${activePanel === 'signup' ? 'bg-white border-x border-teal-200/50 py-4 px-6 text-center text-gray-800 transition-all duration-300 font-bold' : ''}`}
            onClick={() => setActivePanel('signup')}
          >
            Sign up
          </label>
        </div>

        <section className="bg-white overflow-hidden border-x border-b border-teal-200/50 transition-all duration-300 p-8 sm:p-16 grid">
        
          {activePanel === 'signin' && (
            <div id="panel-1"  className="space-y-8">
              <h1 className='text-black text-2xl font-bold'>Operação Financeira</h1>
              <form className='space-y-4'>
                <div className="field flex items-center justify-between border-b border-[#2E3CBD] relative px-2 text-black">
                  <input type="text" id="name-1" placeholder="&nbsp;" className="peer bg-transparent text-sm py-3 w-full outline-none ring-0" required />
                  <label htmlFor="name-1" className="absolute font-thin transition-all duration-300 -translate-y-6 text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Name</label>
                  <span className="material-symbols-outlined"><FaUser /></span>
                </div>
                <div className="field flex items-center justify-between border-b border-[#2E3CBD] relative px-2 text-black">
                  <input type="password" id="pass-1" placeholder="&nbsp;" className="peer bg-transparent text-sm py-3 w-full outline-none ring-0" required />
                  <label htmlFor="pass-1" className="absolute font-thin transition-all duration-300 -translate-y-6 text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Password</label>
                  <span className="material-symbols-outlined"><FaLock /></span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="tick">
                    <input type="checkbox" id="remember-1" className="peer sr-only" />
                    <label htmlFor="remember-1" className="flex items-center gap-2 cursor-pointer transition-all duration-300">
                      <div>
                        <span className="material-symbols-outlined"></span>
                        <span className="material-symbols-outlined"></span>
                      </div>
                      <p className='text-black'>Remember Me</p>
                    </label>
                  </div>
                  <a href="javascript:void(0)" className="text-xs text-black">Forgot Password</a>
                </div>
                <button type="button" className="uppercase text-lg py-3 px-4 bg-[#523AE1] text-white relative isolate w-full flex items-center justify-center gap-2 overflow-hidden ring-0 outline-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-all before:duration-300 before:ease-out before:bg-[#2f285a] hover:before:opacity-100 focus-visible:before:opacity-100"
                onClick={()=>navigate('/usuario')}
                >
                  Log in
                </button>
              </form>
              <p className="spacer-or mx-auto w-2/4 flex items-center justify-center gap-2 text-sm whitespace-nowrap before:block before:bg-gradient-to-r before:to-[#0056FE] before:w-2/4 before:h-px after:block after:bg-gradient-to-l after:to-[#2E3CBD] after:w-2/4 after:h-px text-black">or</p>
              <button type="button" className="!bg-[#4267B2] py-3 px-4 bg-[#523AE1] text-white relative isolate w-full flex items-center justify-center gap-2 overflow-hidden ring-0 outline-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-all before:duration-300 before:ease-out before:bg-[#2f285a] hover:before:opacity-100 focus-visible:before:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8">
                  <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                </svg>
                Log in with Facebook
              </button>
            </div>
          )}
          {activePanel === 'signup' && (
            <div id="panel-2" className="space-y-8">
              <form className="space-y-4">
              <h1 className='text-black text-2xl font-bold'>Operação Financeira</h1>
                <div className="field flex items-center justify-between border-b border-[#2E3CBD] relative px-2 text-black">
                  <input type="text" id="name-2" placeholder="&nbsp;" className="peer bg-transparent text-sm py-3 w-full outline-none ring-0" required />
                  <label htmlFor="name-2" className="absolute font-thin transition-all duration-300 -translate-y-6 text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Name</label>
                  <span className="material-symbols-outlined"><FaUser /></span>
                </div>
                <div className="field flex items-center justify-between border-b border-[#2E3CBD] relative px-2 text-black">
                  <input type="email" id="email-2" placeholder="&nbsp;" className="peer bg-transparent text-sm py-3 w-full outline-none ring-0" required  />
                  <label htmlFor="email-2" className="absolute font-thin transition-all duration-300 -translate-y-6 text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Email</label>
                  <span className="material-symbols-outlined"><MdEmail /></span>
                </div>
                <div className="field flex items-center justify-between border-b border-[#2E3CBD] relative px-2 text-black">
                  <input type="password" id="pass-2" placeholder="&nbsp;" className="peer bg-transparent text-sm py-3 w-full outline-none ring-0" required />
                  <label htmlFor="pass-2" className="absolute font-thin transition-all duration-300 -translate-y-6 text-sm peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">Password</label>
                  <span className="material-symbols-outlined"><FaLock /></span>
                </div>
                <button type="button" className="uppercase text-lg py-3 px-4 bg-[#523AE1] text-white relative isolate w-full flex items-center justify-center gap-2 overflow-hidden ring-0 outline-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-all before:duration-300 before:ease-out before:bg-[#2f285a] hover:before:opacity-100 focus-visible:before:opacity-100">
                  Sign up
                </button>
              </form>
              <p className="spacer-or mx-auto w-2/4 flex items-center justify-center gap-2 text-sm whitespace-nowrap before:block before:bg-gradient-to-r before:to-[#0056FE] before:w-2/4 before:h-px after:block after:bg-gradient-to-l after:to-[#2E3CBD] after:w-2/4 after:h-px text-black">or</p>
              <button type="button" className="!bg-[#4267B2] py-3 px-4 bg-[#523AE1] text-white relative isolate w-full flex items-center justify-center gap-2 overflow-hidden ring-0 outline-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-all before:duration-300 before:ease-out before:bg-[#2f285a] hover:before:opacity-100 focus-visible:before:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8">
                  <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                </svg>
                Sign up with Facebook
              </button>
            </div>
          )}
        </section>
      </main>
    </div>

  );
};
