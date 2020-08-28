import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({ guardarGasto, guardarCrearGastos }) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);



    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
            guardarError(true);
            return
        }

        //contruir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gastyo a nuestro componente
        guardarGasto(gasto)
        guardarCrearGastos(true)

        //resetear form;
        guardarNombre('')
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>

            {error ? <Error mensaje='Ambos campos son obligatoriios o Presupuesto incorrecto' /> : null}

            <div className='campo'>
                <label>Nombre gastos</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ejemplo, Comida'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Cantidad gastos</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ejemplo, 50.000'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value), 10)}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gastos'
            />
        </form>

    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGastos: PropTypes.func.isRequired
}


export default Formulario;