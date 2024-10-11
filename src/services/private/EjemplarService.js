import { axiosConfig } from "../../configuration/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

export const consultarEjemplares = async () => {
    /*const token = sessionStorage.getItem('token')
    headers.token = token
    return await axiosConfig.get('/ejemplares',
                {
                    headers: headers
                }
            )*/

    return {
        data: [
        {
            "_id" : "66f212507ead4d31842028be",
            "codigo" : "0000-1",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e30"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bb",
                "titulo": "Calculo I"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : true
        },
        {
            "_id" : "66f212507ead4d31842028bf",
            "codigo" : "0000-2",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e30"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bb",
                "titulo": "Calculo I"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
        {
            "_id" : "66f212507ead4d31842028c0",
            "codigo" : "0000-3",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e30"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bb",
                "titulo": "Calculo I"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
    
        {
            "_id" : "66f212507ead4d31842028c1",
            "codigo" : "1000-0",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bc",
                "titulo": "Quimica Avanzada"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
        {
            "_id" : "66f212507ead4d31842028c2",
            "codigo" : "1000-1",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bc",
                "titulo": "Quimica Avanzada"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
        {
            "_id" : "66f212507ead4d31842028c3",
            "codigo" : "1000-2",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bc",
                "titulo": "Quimica Avanzada"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
    
        {
            "_id" : "66f212507ead4d31842028c4",
            "codigo" : "2000-1",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bd",
                "titulo" : "Calculo II"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
        {
            "_id" : "66f212507ead4d31842028c5",
            "codigo" : "2000-2",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bd",
                "titulo" : "Calculo II"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : false
        },
        {
            "_id" : "66f212507ead4d31842028c6",
            "codigo" : "2000-3",
            "localizacion" : {
                "_id" : "66ecd2fa5d7938d051314e31"
            },
            "libro" : {
                "_id" : "66f2106e7ead4d31842028bd",
                "titulo" : "Calculo II"
            },
            "fechaCreacion" : new Date(),
            "fechaActualizacion" : null,
            "prestado" : true
        },
    ]} 
}