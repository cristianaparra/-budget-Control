import React,{Fragment, useState} from 'react';
import Pregunta from './components/Pregunta'

function App() {

  //state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [diferencia, guardarDiferencia] = useState(false);

  return (

    <div className='container'>
      <header>
        <h1>Presupuesto</h1>
        
        <div className='contenido-principal contenido'>
          <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarDiferencia={guardarDiferencia} 
          />

        </div>
      </header>
    </div>

  )
}

export default App;
