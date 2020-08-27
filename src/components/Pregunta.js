import React, { Fragment, useState } from 'react';
import Error from './Error'


const Pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }
    //submit para presupuesto

    const agregarpresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return
        }
        //cuando se pasa la validacion

        guardarError(false);

    }


    return (

        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error?  <Error mensaje='El presupuesto esta mal ingresado'/> : null}

            <form onSubmit={agregarpresupuesto}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='coloca tus gastos'
                    onChange={definirPresupuesto}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='definir presupuesto'
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;