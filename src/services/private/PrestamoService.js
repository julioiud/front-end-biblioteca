import { axiosConfig } from "../../configuration/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

export const guardarPrestamo = async (data) => {
  /*  const token = sessionStorage.getItem('token')
    headers.token = token
    return await axiosConfig.post('/codigos',
                data,
                {
                    headers: headers
                }
            )*/
}


export const consultarPrestamos = async () => {
    const token = sessionStorage.getItem('token')
    headers.token = token
    return await axiosConfig.get('/prestamos',
                {
                    headers: headers
                }
            )
}