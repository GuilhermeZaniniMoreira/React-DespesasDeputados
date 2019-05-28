import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(despesa => (
            <tr key={despesa.codDocumento}>
                <td>{despesa.tipoDespesa}</td>
                <td>{despesa.dataDocumento}</td>
                <td>{despesa.nomeFornecedor}</td>
                <td>{despesa.valorDocumento}</td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Despesa</th>
                    <th>Data</th>
                    <th>Fornecedor</th>
                    <th>R$</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}