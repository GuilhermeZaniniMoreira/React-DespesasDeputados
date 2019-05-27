import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Deputados from '../deputados/deputados'
import Deputado from '../deputados/deputado'
import Partidos from '../partidos/partidos'
import Partido from '../partidos/partido'
import Estados from '../estados/estados'
import Estado from '../estados/estado'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Deputados} />
        <Route path='/deputados' component={Deputados} />
        <Route path='/partidos' component={Partidos} />
        <Route path='/estados' component={Estados} />
        <Route path="/deputado/:id" component={Deputado}/>
        <Route path="/partido/:id" component={Partido}/>
        <Route path="/estado/:sigla" component={Estado}/>
        <Redirect from='*' to='/' />
    </Router>
)
