//Comunicacion con App.
import gestorAxios from '../config/axios';

export const listaAlojamiento_get = async () => {

    let data = {  }

    await gestorAxios.get('/web-datos/lista-alojamiento').then(res => { 
        
        data = res.data;

    });
    console.log(data)
    return data;
}

export const listaTipoAlojamiento_get = async () => {

    let data = {  }

    await gestorAxios.get('/web-datos/lista-tipo-alojamiento').then(res => { 
        
        data = res.data;

    });
    console.log(data)
    return data;
}