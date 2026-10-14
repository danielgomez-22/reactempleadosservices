import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
import ServiceOficios from '../services/ServiceOficios';



export default class MenuComponent extends Component {
    service = new ServiceOficios();
    url = Global.urlOficios;
    state = {
        oficios: []
    }
    loadOficios = () => {
        this.service.getOficios().then(data => {
            console.log('loading oficios', data);
            this.setState({ 
                oficios: data 
            });
        });
    }
    componentDidMount = () => {
        this.loadOficios();
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    {/* Menú desplegable dinámico para los Oficios */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Oficios
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.oficios.map((oficio, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="dropdown-item" to={"/oficios/" + oficio}>
                                                        {oficio}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>

        )
    }
}