
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Usuario from './Components/Usuario/Usuario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/usuario' element={<Usuario/>}/>

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
