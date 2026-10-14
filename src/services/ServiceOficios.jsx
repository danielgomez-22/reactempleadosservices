import axios from 'axios';
import Global from '../Global';

export default class ServiceOficios {
    getOficios = () => {
        return new Promise((resolve) => {
            let request = 'api/Empleados/oficios';
            let url = Global.urlOficios + request;
            
            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getEmpleadosByOficio = (oficio) => {
        return new Promise((resolve) => {
            let request = 'api/Empleados' + oficio;
            let url = Global.urlEmpleados + request;

            axios.get(url).then(response => {
                console.log('leyendo empleados');
                resolve(response.data);
            });
        });
    }
}