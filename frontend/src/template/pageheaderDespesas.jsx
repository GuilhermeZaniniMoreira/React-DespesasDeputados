import React from 'react'

export default props => (
   <header className='page-header'>
        <h1>{props.nomeDeputado}</h1>
        <h2>{props.name} <small> Mês: {props.small} | Ano: {props.year} </small> </h2>
    </header>
)