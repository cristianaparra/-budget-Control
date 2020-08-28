import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
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
Control.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    diferencia: PropTypes.number.isRequired
}


export default Control;