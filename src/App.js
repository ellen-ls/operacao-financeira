
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Usuario from './Components/Usuario/Usuario';
import Clientes from './Components/Clientes/Clientes';
import Fornecedores from './Components/Fornecedores/Fornecedores';
import Pagamentos from './Components/Pagamentos/Pagamentos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/fornecedores' element={<Fornecedores/>}/>
        <Route path='/pagamentos' element={<Pagamentos/>}/>

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
