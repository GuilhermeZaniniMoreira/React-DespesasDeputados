import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
        const keyHandler = (e) => {
            if (e.key === 'Enter') {
                e.shiftKey ? props.handleSearch() : props.handleAdd()
            } else if (e.key === 'Escape') {
                props.handleClear()
            }
        }

    return (
        <div role='form' className='deputadoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Nome do deputado'
                    onChange={props.handleChange}
                    value={props.nomeDeputado}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
)}