import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/'
import Api from '../../services/api'
import { Modal, ModalFooter, ModalBody, ModalTitle, Button, Title } from 'react-bootstrap'
import Modale from '../../components/Modal'
import {Link} from 'react-router-dom'
import './style.css'

function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        <Modale />
    };

    const [gest_contrato, setGest_contrato] = useState([])

    useEffect(() => {
        Api.get('gestao_de_contrato')
            .then(resp => setGest_contrato(resp.data))
    }, [])

    return (
        <div className="ContainerHme">
            <Header />
            <div className="conteudo">
                <div className="header_conteudo">
                    <nav class="navbar navbar-light wid">
                        <div class="container-fluid pesquisa">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="Container_box">
                    {gest_contrato.map(contrato => (
                        <div key={contrato.id} class="box_container">
                            <div class="col-sm-12 box_doc">
                                <div class="card border-success Container_card">
                                    <div class="card-header cont_title text-center bg-transparent border-success">{contrato.cte_razao_social}</div>
                                    <div class="card-body text-success">
                                        <h5 class="card-title">{contrato.tipo_do_contrato}</h5>
                                        <p class="card-text" name="razao_social ">{contrato.cto_razao_social}</p>
                                    </div>
                                    <div class="card-footer button_env text-center bg-transparent border-success">
                                        <Link className="btn" variant="primary" to={{pathname: "/Modale"}} onClick={handleShow}>
                                            Mostrar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home