import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/'
import Api from '../../services/api'
import {Form, Col, Alert } from 'react-bootstrap'
import Modale from '../../components/Modal'
import {Link, useHistory} from 'react-router-dom'
import './style.css'

function Home() {
    const [show, setShow] = useState(false);
    const history = useHistory()

    let [op1, setOp1] = useState('')
    let [op2, setOp2] = useState('')
    let [op3, setOp3] = useState('')

    const Limpar = () => {
        setOp1('')
        setOp2('')
        setOp3('')
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        <Modale />
    };

    const Pesquisa = (op1, op2, op3) => {  
        Api.get(`/filter?tipo_do_contrato=${op1}&i_vigencia=${op3}&status=${op2}`).then(resp => setGest_contrato(resp.data))
    }

    const [gest_contrato, setGest_contrato] = useState([])

    useEffect(() => {
        Api.get(`/gestao_de_contrato`)
            .then(resp => setGest_contrato(resp.data))
    }, [])



    return (
        <div className="ContainerHme">
            <Header />
            <div className="conteudo">
                <div className="header_conteudo">
                    <nav class="navbar navbar-light wid">
                        <div class="container-fluid pesquisa">
                            <Form.Group controlId="formGridState">
                                <Form.Label>Contrato</Form.Label>
                                <Form.Control as="select" value={op1} onChange={e => setOp1(e.target.value)} defaultValue="1">
                                    <option selected value=''></option>
                                    <option>Emprestimo</option>
                                    <option>Arrendamento</option>
                                    <option>Seguro</option>
                                    <option>Locação de Serviços e Equipamentos</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Inicial Vigencia</Form.Label>
                                <input type="date" defaultValue="" value={op3} onChange={e => setOp3(e.target.value)} class="form-control" id="razao_social"/>
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" value={op2} onChange={e => setOp2(e.target.value)} defaultValue="">
                                    <option selected value=''></option>
                                    <option selected>Em Edição</option>
                                    <option>Ativo</option>
                                    <option>Cancelado</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="bnt_limpa" controlId="formGridState">
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" onClick={() => Pesquisa(op1, op2, op3)} class="btn btn-info">Procurar</button>
                                    <button type="button" onClick={Limpar} class="btn btn-danger">Limpar</button>
                                </div>
                            </Form.Group>
                        </div>
                    </nav>
                </div>
                <div className="Container_box">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Razao_social</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Tipo_do_contrato</th>
                                    <th scope="col">Status</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                        {gest_contrato.map(contrato => (
                            <tbody  key={contrato.id}>
                                <tr>
                                    <td>{contrato.cto_razao_social}</td>
                                    <td>{contrato.cte_endereco}</td>
                                    <td>{contrato.tipo_do_contrato}</td>
                                    <td>{contrato.status}</td>
                                    <td>
                                    <Link to={{pathname: `/modale/${contrato.id}`}} class="btn btn-info button_icon"><i class="bi bi-pencil-square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg></i></Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                {gest_contrato.length == 0 &&
                    [
                        'danger',
                        ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            Não foi possivel encontrar nenhum contrato com essas especificações
                        </Alert>
                        ))
                }
            </div>
        </div>

    )
}

export default Home