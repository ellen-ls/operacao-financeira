import React from 'react'
import Sidebar from '../shared/Sidebar'

function Clientes() {
  return (
   
        <div className="flex flex-row h-screen w-screen overflow-hidden">
          <Sidebar/>
          <div className="p-4">
            <div className="bg-slate-500">header</div>
            <div>Aqui é a pagina de clientes</div>
          </div>
        </div>
    

  )
}

export default Clientes
