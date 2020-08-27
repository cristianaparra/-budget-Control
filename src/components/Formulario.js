import React from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos</h2>

            <div className='campo'>
                <label>Nombre gastos</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ejemplo, Comida'
                />
            </div>

            <div className='campo'>
                <label>Cantidad gastos</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ejemplo, 50.000'
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

export default Formulario;