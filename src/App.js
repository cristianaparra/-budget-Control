import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Control from './components/Control'



function App() {

  //state para guardar nuestro presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [diferencia, guardarDiferencia] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGastos] = useState(false);

  //agregando un nuevo gasto 

  useEffect(() => {
    if (creargasto) {

      guardarGastos([
        ...gastos,
        gasto
      ])
    }

    // restr del presupuesto actual

    const prespuestoRestante = diferencia - gasto.cantidad;
    guardarDiferencia(prespuestoRestante);

    //resetear a false
    guardarCrearGastos(false)

  }, [gasto, creargasto, gastos]);



  return (

    <div className='container'>
      <header>
        <h1>Presupuesto</h1>

        <div className='contenido-principal contenido'>

          {mostrarpregunta ?
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarDiferencia={guardarDiferencia}
                actualizarPregunta={actualizarPregunta}
              />
            ) : (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGastos={guardarCrearGastos}
                  />
                </div>
                <div className='one-half column'>
                  <Listado
                    gastos={gastos} />
                  <Control
                    presupuesto={presupuesto}
                    diferencia={diferencia}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>

  )
}

export default App;
