import React from 'react'
import Sidebar from '../shared/Sidebar'
import Header from '../shared/Header'

function Fornecedores() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
    <Sidebar/>
    <div className="flex-1">
      <Header/>
      <div>Aqui é a pagina de fornecedores</div>
    </div>
  </div>
  )
}

export default Fornecedores
