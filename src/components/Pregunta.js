import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'


const Pregunta = ({guardarPresupuesto, guardarDiferencia, actualizarPregunta}) => {

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
        guardarPresupuesto(cantidad);
        guardarDiferencia(cantidad);
        actualizarPregunta(false)


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

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarDiferencia: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}


export default Pregunta;