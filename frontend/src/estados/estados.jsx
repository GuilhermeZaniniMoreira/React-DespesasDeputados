import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageheader'
import ListaEstados from './listaEstados'

const URL = 'http://localhost:4000/api'

export default class Estados extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [] }

        this.handleDespesas = this.handleDespesas.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}/estados`)
            .then(resp => this.setState({...this.setState, list: resp.data}))
    }

    handleDespesas(estado) {
        window.open(`http://localhost:8080/#/estado/${estado.sigla}`)
    }

    render() {
        return (
            <div>
                <PageHeader name='Lista de estados'></PageHeader>
                <ListaEstados
                    list={this.state.list}
                    handleDespesas={this.handleDespesas} />
            </div>
        )
    }
}