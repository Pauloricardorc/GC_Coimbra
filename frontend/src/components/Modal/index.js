import React, {useState, useEffect} from 'react';
import { Modal, ModalFooter, ModalBody, ModalTitle, Button, Title} from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import './style.css'


function Modale () {
    const history = useHistory()

    const [gest_contrato, setGest_contrato] = useState([])

    let { hash } = useParams()

    useEffect(() => {
        api.get(`gestao_de_contrato/${hash}`)
            .then(resp => setGest_contrato(resp.data))
    }, [])

    const [show, setShow] = useState(true);

    const handleClose = (e) => {
        e.preventDefault()
        history.push('/')
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <div className="modal_container">
            {gest_contrato.map(ctr => (
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {ctr.id} </Modal.Title>
                </Modal.Header>
                <Modal.Body> {ctr.cte_razao_social} </Modal.Body>
                <Modal.Body> {ctr.cto_razao_social} </Modal.Body>
                <Modal.Footer>
                    <Link variant="secondary" onClick={handleClose}>
                        Close
                    </Link>
                </Modal.Footer>
            </Modal>    
            ))}
        </div>
    )
}

export default Modale;