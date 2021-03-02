import React from 'react';
import Header from '../../components/Header/'
import './style.css'

function Home() {
    return (
        <div className="ContainerHme">
            <Header />
            <div className="conteudo">
                <div className="header_conteudo">
                    <nav class="navbar navbar-light wid">
                        <div class="container-fluid pesquisa">
                            <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div class="row box_container">
                    <div class="col-sm-6 box_doc">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Projeto1</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 box_doc">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Projeto1</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div><div class="col-sm-6 box_doc">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Projeto1</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div><div class="col-sm-6 box_doc">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Projeto1</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home