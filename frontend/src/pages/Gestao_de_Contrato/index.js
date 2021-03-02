import React from 'react';
import Header from '../../components/Header'
import './style.css'

function Emprestimos() {
    return(
        <div className="Container">
            <Header />
            <div className="container">
                <div className="Title text-center">
                    <h2>Criação da Gestão de Contrato</h2>
                </div>
                <div className="col-md-12 Container">
                    <div className="container_form">
                        <div className="row g-2 bx-form">
                            <fieldset>
                                <legend>Contratante</legend>
                                <div className="row g-2 cx-form">
                                <div className="col-md-7">
                                    <label for="razao_social" class="form-label">Razão Social</label>
                                    <input type="text" class="form-control" id="razao_social"/>
                                </div>
                                <div className="col-md-5">
                                    <label for="cnpj" class="form-label">CNPJ</label>
                                    <input type="text" class="form-control" id="cnpj"/>
                                </div>
                                </div>
                                <div className="row g-2 cx-form">
                                    <div className="col-md-6">
                                        <label for="razao_social" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="razao_social"/>
                                    </div>
                                </div>
                                <div className="row g-2 cx-form">
                                    <div className="col-md-6">
                                        <label for="cnpj" class="form-label">Telefone</label>
                                        <input type="text" class="form-control" id="cnpj"/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="container_form">
                        <div className="row g-2 bx-form">
                            <fieldset>
                                <legend>Contratado</legend>
                                <div className="row g-2 cx-form">
                                <div className="col-md-7">
                                    <label for="razao_social" class="form-label">Razão Social</label>
                                    <input type="text" class="form-control" id="razao_social"/>
                                </div>
                                <div className="col-md-5">
                                    <label for="cnpj" class="form-label">CNPJ</label>
                                    <input type="text" class="form-control" id="cnpj"/>
                                </div>
                                </div>
                                <div className="row g-2 cx-form">
                                    <div className="col-md-6">
                                        <label for="razao_social" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="razao_social"/>
                                    </div>
                                </div>
                                <div className="row g-2 cx-form">
                                    <div className="col-md-6">
                                        <label for="cnpj" class="form-label">Telefone</label>
                                        <input type="text" class="form-control" id="cnpj"/>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="container ct_container">
                    <div className="ct_objeto">
                        <div className="row">
                            <div className="container_box">
                                <fieldset>
                                    <legend>Objeto & Seguro </legend>
                                    <div class="row g-2">
                                        <div class="col-md-3">
                                            <label for="inputState" class="form-label">Objeto</label>
                                            <select id="inputState" class="form-select">
                                                <option selected>Empréstimos</option>
                                                <option>Arrendamento</option>
                                                <option>Seguro </option>
                                                <option>Locação de Serviços e Equipamentos</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="bx-form">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="formGroupExampleInput" class="form-label">Carêcia</label>
                                        <input type="text" class="form-control" placeholder="Tempo de Carência" aria-label="Tempo_carencia"/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="formGroupExampleInput" class="form-label">Vigência</label>
                                        <input type="text" class="form-control" placeholder="Vigência" aria-label="Vigencia"/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="formGroupExampleInput" class="form-label">Valor</label>
                                        <input type="text" class="form-control" placeholder="Valor" aria-label="Valor"/>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="formGroupExampleInput" class="form-label">Prazo</label>
                                        <input type="text" class="form-control" placeholder="Prazo" aria-label="Prazo"/>
                                    </div>
                                </div>
                                <div className="row">
                                <div class="col-md-3">
                                    <label for="inputState" class="form-label">Status</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Em Edição</option>
                                        <option>Ativo</option>
                                        <option>Cancelado </option>
                                    </select>
                                </div>
                                </div>
                                <div className="row button_submit">
                                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emprestimos;