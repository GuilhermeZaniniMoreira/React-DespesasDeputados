import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageheader'
import ListaDeputados from '../deputados/listaDeputados'

const URL = 'http://localhost:4000/api'

export default class Deputado extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [], nomePartido : "", loading: 0}
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {
        const sigla = this.props.params.sigla
        
        axios.get(`${URL}/estado/${sigla}`)
        .then(resp => this.setState({...this.setState, list: resp.data, loading : 0}))
    }

    handleDespesas(deputado) {
        window.open(`http://localhost:8080/#/deputado/${deputado.id}`)
    }

    render() {

        if (!this.state.loading) {
            return ( 
                <div>
                    <PageHeader name="Buscar" small='deputado'></PageHeader>
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