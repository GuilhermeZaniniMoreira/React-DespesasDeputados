import React from 'react'

export default props => (
    <h2><small>Soma das despesas do deputado: R$ {parseFloat(props.somaDespesas).toFixed(2)}</small></h2>
)