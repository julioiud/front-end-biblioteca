import { NavLink } from "react-router-dom";
import './Tabs.css'

export default function Tabs() {
    return (
        <nav id="tab-main" className="navbar fixed-bottom">
            <div className="container-fluid justify-content-center">
                <ul className="nav nav-pills text-center">
                    <NavLink
                        className="nav-link"
                        aria-current="page"
                        aria-label="Prestamos"
                        to="/home"
                    >
                        <i className="fa-solid fa-house fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion usuarios"
                        to="/pr/usuarios"
                    >
                        <i className="fa-solid fa-users fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion Libros"
                        to="/pr/libros"
                    >
                        <i className="fa-solid fa-book-open fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion Autores"
                        to="/pr/autores"
                    >   
                        <i className="fa-solid fa-at fa-xl"></i>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        aria-label="Gestion editoriales"
                        to="/pr/editoriales"
                    >
                        <i className="fa-solid fa-newspaper fa-xl"></i>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
