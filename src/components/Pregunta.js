import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);

    //lee el presupuesto

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }
//submit para presupuesto

const agregarpresupuesto= e => {
    e.preventDefault();
}


    return (
    
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
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