import React, { Fragment } from 'react';
import {revisarPresupuesto} from '../Helpers'

const Control = ({ presupuesto, diferencia }) => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto : $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, diferencia)}>
                Restante : $ {diferencia}
            </div>

        </Fragment>
    );
}

export default Control;