import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    render() {
      return (
        <MaterialTable
          title="Deputados:"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Partido', field: 'party' },
            { title: 'UF', field: 'state'},
            {title: 'ID', field: 'id'},
          ]}
          data={this.state.list}        
          actions={[
            {
              icon: 'save',
              tooltip: 'Ver despesas',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
        />
      )
    }
  }

  export default Table