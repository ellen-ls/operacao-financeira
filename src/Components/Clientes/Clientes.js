import React, { useState } from 'react'
import Sidebar from '../shared/Sidebar'
import Header from '../shared/Header'
import ListaPessoas from './ListaPessoas';
import PessoasDebito from '../Pagamentos/PessoasDebito';


function Clientes() {
  const [pessoas, setPessoas] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [pessoaSelecionada, setPessoaSelecionada] = useState(null);

  const adicionarPessoa = () => {
    setPessoas([...pessoas, { nome, cpf, debitos: [] }]);
    setNome("");
    setCpf("");
  };

  // Função para selecionar uma pessoa e gerenciar seus débitos
  const selecionarPessoa = (pessoa) => {
    setPessoaSelecionada(pessoa);
  };
  return (
   
        <div className="flex flex-row h-screen w-screen overflow-hidden">
          <Sidebar/>
          <div className="flex-1">
            <Header/>
            <div>
      <h1>Cadastro de Pessoas e Débitos</h1>

      {/* Dashboard para mostrar o total de débitos pagos */}
      {/* <Dashboard pessoas={pessoas} /> */}

      {/* Formulário para cadastrar pessoas */}
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <button onClick={adicionarPessoa}>Cadastrar Pessoa</button>
      </div>

      {/* Listagem de Pessoas */}
      <ListaPessoas pessoas={pessoas} selecionarPessoa={selecionarPessoa} />

      {/* Se uma pessoa estiver selecionada, mostrar seus débitos */}
      {pessoaSelecionada && (
        <PessoasDebito
          pessoa={pessoaSelecionada}
          setPessoas={setPessoas}
          pessoas={pessoas}
          setPessoaSelecionada={setPessoaSelecionada}
        />
      )}
    </div>
    </div>
  </div>
    

  )
}

export default Clientes
