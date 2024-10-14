import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";



function Usuario({pessoas}) {
  // const navigate = useNavigate();
// Componente para mostrar o total de débitos pagos

const [totalPago, setTotalPago] = useState(0);

  // Efeito para calcular o total pago sempre que as pessoas mudarem
  useEffect(() => {
    if (pessoas && pessoas.length > 0) {
      const total = pessoas.reduce((acc, pessoa) => {
        const totalDebitosPessoa = Array.isArray(pessoa.debitos)
          ? pessoa.debitos.reduce((soma, debito) => soma + debito.valor, 0)
          : 0;
        return acc + totalDebitosPessoa;
      }, 0);
      setTotalPago(total);
    } else {
      setTotalPago(0); // Se não houver pessoas, total é zero
    }
  }, [pessoas]);

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">

      <Sidebar/>
      <div className="flex-1">
       <Header/>
    <div style={{ backgroundColor: "#f0f0f0", padding: "10px", marginBottom: "20px" }}>
      <h2>Total Pago por Todas as Pessoas: R$ {totalPago.toFixed(2)}</h2>
    </div>
    </div>
    </div>
  );
}





export default Usuario;
