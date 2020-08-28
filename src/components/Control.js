import React, { Fragment } from 'react';

const Control = ({presupuesto, diferencia}) => {
    return ( 
        <Fragment>
<div className='alert alert-primary'>
    Presupuesto : $ {presupuesto}
</div>
<div className='alert'>
    Restante : $ {diferencia}
</div>
            
        </Fragment>
     );
}
 
export default Control;