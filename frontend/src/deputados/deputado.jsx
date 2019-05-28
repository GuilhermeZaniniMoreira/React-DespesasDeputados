import React from 'react'
import axios from 'axios'
import PageHeader from '../template/pageheaderDespesas'
import ListaDespesas from '../despesas/listaDespesas'

import Select from 'react-select';

const URL = 'http://localhost:4000/api/despesas/deputado'
const URLDadosDeputado = 'http://localhost:4000/api/deputado'

const anos = [
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' }
  ];

  const meses = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Fev' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Abr' },
    { value: '5', label: 'Mai' },
    { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' },
    { value: '8', label: 'Ago' },
    { value: '9', label: 'Set' },
    { value: '10', label: 'Out' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dez' },
  ];

class Deputado extends React.Component {
    constructor(props) {
        super(props)

        var d = new Date()
        var month = (d.getMonth()) + 1
        var year = (d.getFullYear())

        this.state = { list: [], nomeDeputado : "", partido : "", estado : "", year : year, month : month, loading : 0 }
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeMonth = this.handleChangeMonth.bind(this);
    }

    componentDidMount() {
        this.refresh()
    }

    refresh(yearParam, monthParam) {
        const idDeputado = this.props.params.id

        var month
        if (Number.isInteger(monthParam)) {
            month = monthParam
        } else {
            month = this.state.month
        }

        var year
        if (Number.isInteger(yearParam)) {
            year = yearParam
        } else {
            year = this.state.year
        }
        
        this.setState({...this.setState, loading : 1})

        axios.all([
            axios.get(`${URL}/${idDeputado}/${month}/${year}`),
            axios.get(`${URLDadosDeputado}/${idDeputado}`)
          ])
          .then(axios.spread((despesas, dadosDeputado) => {
                console.log(despesas.data)
                var nomeDeputado = dadosDeputado.data.ultimoStatus.nomeEleitoral
                var partido = dadosDeputado.data.ultimoStatus.siglaPartido
                var uf = dadosDeputado.data.ultimoStatus.siglaUf
                this.setState({...this.setState, partido : partido, estado : uf, nomeDeputado : nomeDeputado, list: despesas.data, year : year, month : month, loading : 0})
                console.log(this.state)
          }));

    }

    handleChangeYear(selectedOption) {
        this.refresh(parseInt(selectedOption.label))
    }

    handleChangeMonth(selectedOption) {
        this.refresh(this.state.year, parseInt(selectedOption.value))
    }
     
  render() {
      
    const selectedOption = this.state.year;

        if (!this.state.loading) {
            return ( 
                <div>
                    <ul>
                        <li>
                            <Select
                                value={this.state.year}
                                placeholder={this.state.year}
                                onChange={this.handleChangeYear}
                                options={anos}
                            />
                        </li>
                        <li>    
                            <Select
                                value={this.state.month}
                                placeholder={this.state.month}
                                onChange={this.handleChangeMonth}
                                options={meses}
                            />
                        </li>
                    </ul>
                <PageHeader nomeDeputado={this.state.nomeDeputado} partido={this.state.partido} uf={this.state.estado} name="Despesas" small={this.state.month} year={this.state.year}></PageHeader>
                <ListaDespesas
                    list={this.state.list} />
            </div>
            )

        } else {
            return (
                <center><img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" /></center>
            )
        }
    }
}
export default Deputado