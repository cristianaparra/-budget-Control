export const revisarPresupuesto = (presupuesto, diferencia) => {

    let clase;

    if ((presupuesto / 4) > diferencia) {
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > diferencia) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    return clase;
}