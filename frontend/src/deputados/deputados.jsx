import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageheader'
import DeputadoForm from './deputadoForm'
import ListaDeputados from './listaDeputados'

const URL = 'https://dadosabertos.camara.leg.br/api/v2/deputados?nome='

export default class Deputado extends Component {

    constructor(props) {
        super(props)
        this.state = { nomeDeputado: '', list: [], loading: 0}
    
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.handleDespesas = this.handleDespesas.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    refresh(nomeDeputado = '') {
        console.log(nomeDeputado)
        const search = nomeDeputado ? `${nomeDeputado}` : ''
            this.setState({...this.state, loading : 1})
            axios.get(`${URL}${search}&itens=550&ordem=ASC&ordenarPor=nome`)
            .then(resp => this.setState({...this.setState, list: resp.data.dados, loading : 0}))
    
    }

    handleSearch() {
        this.refresh(this.state.nomeDeputado)
    }

    handleChange(e) {
        this.setState({...this.state, nomeDeputado: e.target.value })
    }

    handleClear() {
        this.refresh()
    }

    handleDespesas(deputado) {
        window.open(`http://localhost:8080/#/deputado/${deputado.id}`)
    }

    render() {

        if (!this.state.loading) {
            return ( 
                <div>
                    <PageHeader name='Buscar deputado'></PageHeader>
                    <DeputadoForm
                        nomeDeputado={this.state.nomeDeputado}
                        handleChange={this.state.handleChange}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear} />
                    <ListaDeputados
                        list={this.state.list}
                        handleDespesas={this.handleDespesas} />
                </div>
            )

        } else {
            return (
                <center><img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" /></center>
            )
        }
    }
}