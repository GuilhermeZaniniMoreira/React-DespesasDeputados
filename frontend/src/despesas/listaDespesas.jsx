import React from 'react'
import IconButton from '../template/iconButton'
import TotalDespesas from '../template/totalSum'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(despesa => (
            <tr key={despesa.codDocumento}>
                <td>{despesa.tipoDespesa}</td>
                <td>{despesa.dataDocumento}</td>
                <td>{despesa.nomeFornecedor}</td>
                <td>{parseFloat(despesa.valorDocumento).toFixed(2)}</td>
            </tr>
        ))
    }

    const values = () => {
        const list = props.list || []
        var sum = 0
        list.forEach(element => {
            sum += element.valorDocumento
        });
        return sum
    }

    return (
        <div>
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
            <TotalDespesas
                somaDespesas={values()} />
        </div>
    )
}