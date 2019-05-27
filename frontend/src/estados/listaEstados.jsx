import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(estado => (
            <tr key={estado.id}>
                <td>{estado.sigla}</td>
                <td>{estado.nome}</td>
                <td>
                    <IconButton style='success' icon='search'
                        onClick={() => props.handleDespesas(estado)}>
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
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}