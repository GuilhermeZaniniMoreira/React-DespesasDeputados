import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(deputado => (
            <tr key={deputado.id}>
                <td>{deputado.nome}</td>
                <td>
                    {deputado.siglaPartido} - {deputado.siglaUf}
                </td>
                <td>
                    <IconButton style='success' icon='usd'
                        onClick={() => props.handleDespesas(deputado)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Deputado</th>
                    <th>Partido-UF</th>
                    <th className='tableActions'>Despesas</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}