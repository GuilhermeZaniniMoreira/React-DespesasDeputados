import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(partido => (
            <tr key={partido.id}>
                <td>{partido.sigla}</td>
                <td>{partido.nome}</td>
                <td>
                    <IconButton style='success' icon='search'
                        onClick={() => props.handleDespesas(partido)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Sigla</th>
                    <th>Nome</th>
                    <th className='tableActions'>Despesas</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}