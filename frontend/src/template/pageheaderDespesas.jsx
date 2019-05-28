import React from 'react'

export default props => (
   <header className='page-header'>
        <h2>Deputado: <small>{props.nomeDeputado} ({props.partido} - {props.uf})</small></h2>
        <h2>{props.name} <small> Mês: {props.small} | Ano: {props.year} </small> </h2>
    </header>
)