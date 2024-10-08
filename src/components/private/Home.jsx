import { useEffect, useState } from 'react'
import './Home.css'
import { consultarPrestamos } from '../../services/private/PrestamoService'

const src = "/logo.png"

const init = () => {
  if (sessionStorage.getItem('user')) {
    return JSON.parse(sessionStorage.getItem('user')) || { logged: false }
  }
  return false
}

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [gestorDB, setGestorDB] = useState({
    nombre: ''
  })
  const [prestamos, setPrestamos] = useState([])

  useEffect(() => {

    const user = init()
    if (user.user) {
      setGestorDB(user.user.gestorDB)
    }
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
    }
    listarPrestamos()
  }, []);

  const listarPrestamos = async () => {
    try {
      const { data } = await consultarPrestamos()
      setPrestamos(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='container'>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Nuevo Prestamo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Usuario:</label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Ejemplar:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
      <h3 className='text-center mt-3'>
        Prestamos I.U. Digital
      </h3>
      {loading
        ?
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <img
          {...{ src }}
          className={`radius img img-fluid ${loading ? 'loading' : 'loaded'}`}
        />}
      <p className='text-center mt-3'>
        <b>Gestor:</b> {gestorDB.nombre}
      </p>
      <h4>
        Listado de prestamos
      </h4>
      <button 
        type="button" 
        className="btn btn-outline-success"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal" 
        data-bs-whatever="@mdo"
      >
        Nuevo <i className="fa-solid fa-plus"></i>
      </button>
      <div className="input-group mb-3 my-2">
        <input type="text" className="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ejemplar</th>
            <th scope="col">Usuario</th>
            <th scope="col">Gestor</th>
            <th scope="col">Fecha</th>
            <th scope="col">Entrega</th>
            <th scope="col">Estado</th>
            <th scope="col">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {
            prestamos.map((prestamo, index) => 
              
              <tr key={prestamo._id}>
                <th scope="row">{index + 1}</th>
                <td>{prestamo.ejemplar.codigo}</td>
                <td>{prestamo.usuario.nombre}</td>
                <td>{prestamo.gestor.nombre}</td>
                <td>{prestamo.fechaPrestamo}</td>
                <td>{prestamo.fechaADevolver}</td>
                <td className={prestamo.fechaDevolucion ? 'alert alert-primary green' : 'alert alert-danger red'}>{prestamo.fechaDevolucion ? 'Disponible' : 'Prestado'}</td>
                <td><i className="fa-solid fa-eye"></i></td>
              </tr>
            )
          }

        </tbody>
      </table>

    </div>
  )
}
