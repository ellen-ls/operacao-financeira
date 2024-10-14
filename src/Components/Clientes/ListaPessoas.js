function ListaPessoas({ pessoas, selecionarPessoa }) {
    return (
      <div>
        <h2>Pessoas Cadastradas</h2>
        <ul>
          {pessoas.map((pessoa) => (
            <li key={pessoa.cpf} onClick={() => selecionarPessoa(pessoa)}>
              {pessoa.nome} (CPF: {pessoa.cpf})
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default ListaPessoas;