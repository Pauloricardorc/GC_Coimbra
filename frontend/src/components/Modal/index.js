import React, {useState} from 'react';
import { Modal, ModalFooter, ModalBody, ModalTitle, Button, Title} from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import './style.css'


function Modale () {
    const history = useHistory()

    let { id } = useParams()

    

    const [show, setShow] = useState(true);

    const handleClose = (e) => {
        e.preventDefault()
        history.push('/')
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <div className="modal_container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>A</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Link variant="secondary" onClick={handleClose}>
                        Close
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modale;