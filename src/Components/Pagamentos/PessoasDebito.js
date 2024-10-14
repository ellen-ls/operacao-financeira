import React, { useState } from 'react'
import Sidebar from '../shared/Sidebar'
import Header from '../shared/Header'

function PessoasDebito({ pessoa, setPessoas, pessoas, setPessoaSelecionada }) {
  const [novoDebito, setNovoDebito] = useState("");
  const [valorEdicao, setValorEdicao] = useState(null);
  const [debitoEditando, setDebitoEditando] = useState(null);

  // Função para adicionar um débito
  const adicionarDebito = () => {
    const pessoasAtualizadas = pessoas.map((p) => {
      if (p.cpf === pessoa.cpf) {
        p.debitos.push({ id: Date.now(), valor: parseFloat(novoDebito) });
      }
      return p;
    });
    setPessoas(pessoasAtualizadas);
    setNovoDebito("");
  };

  // Função para editar um débito
  const salvarEdicao = (idDebito) => {
    const pessoasAtualizadas = pessoas.map((p) => {
      if (p.cpf === pessoa.cpf) {
        p.debitos = p.debitos.map((debito) =>
          debito.id === idDebito ? { ...debito, valor: parseFloat(valorEdicao) } : debito
        );
      }
      return p;
    });
    setPessoas(pessoasAtualizadas);
    setDebitoEditando(null);
  };

  // Função para deletar um débito
  const deletarDebito = (idDebito) => {
    const pessoasAtualizadas = pessoas.map((p) => {
      if (p.cpf === pessoa.cpf) {
        p.debitos = p.debitos.filter((debito) => debito.id !== idDebito);
      }
      return p;
    });
    setPessoas(pessoasAtualizadas);
  }
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
 
    <div className="flex-1">
     
      <h2>Débitos de {pessoa.nome}</h2>
      <button onClick={() => setPessoaSelecionada(null)}>Voltar</button>

      {/* Listagem de débitos */}
      <ul>
        {pessoa.debitos.map((debito) => (
          <li key={debito.id}>
            {debitoEditando === debito.id ? (
              <>
                <input
                  type="number"
                  value={valorEdicao}
                  onChange={(e) => setValorEdicao(e.target.value)}
                />
                <button onClick={() => salvarEdicao(debito.id)}>Salvar</button>
                <button onClick={() => setDebitoEditando(null)}>Cancelar</button>
              </>
            ) : (
              <>
                R$ {debito.valor.toFixed(2)}{" "}
                <button onClick={() => setDebitoEditando(debito.id) || setValorEdicao(debito.valor)}>
                  Editar
                </button>
                <button onClick={() => deletarDebito(debito.id)}>Deletar</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Adicionar novo débito */}
      <div>
        <input
          type="number"
          placeholder="Novo débito"
          value={novoDebito}
          onChange={(e) => setNovoDebito(e.target.value)}
        />
        <button onClick={adicionarDebito}>Adicionar Débito</button>
      </div>
    </div>
    </div>
)
}

export default PessoasDebito
