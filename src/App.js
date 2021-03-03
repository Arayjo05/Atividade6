import React from 'react';
import './App.css';
import Principal from './Principal';

function App() {
  return (
    <div className="App"> 
      <h1>Cotação do Dia </h1> 
      <div className="dolar" style={{backgroundColor:"green"}}>
        <Principal moedaA="USD" moedaB="BRL"></Principal>
      </div>
      <div className="euro"style={{backgroundColor:"yellow"}}>
      <Principal moedaA="EUR" moedaB="BRL"></Principal>
      </div>
    </div>
  );
}

export default App; 
