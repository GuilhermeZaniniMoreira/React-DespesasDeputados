import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageheader'
import ListaPartidos from './listaPartidos'

const URL = 'http://localhost:4000/api'

export default class Partidos extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [], loading : 0 }

        this.handleDespesas = this.handleDespesas.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {
        this.setState({...this.setState, loading : 1})
        axios.get(`${URL}/partidos`)
            .then(resp => this.setState({...this.setState, list: resp.data, loading : 0}))
    }

    handleDespesas(partido) {
        window.open(`http://localhost:8080/#/partido/${partido.id}`)
    }

    render() {

        if (!this.state.loading) {
            return ( 
               <div>
                <PageHeader name='Lista de partidos'></PageHeader>
                <ListaPartidos
                    list={this.state.list}
                    handleDespesas={this.handleDespesas}
                />
            </div>
            )

        } else {
            return (
                <center><img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" /></center>
            )
        }
    }
}