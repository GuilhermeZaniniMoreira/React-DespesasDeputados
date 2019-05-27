const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const allowCors = require('./cors')

app.use(bodyParser.json())
app.use(allowCors)

app.get("/api/estados", async (req, res, next) => {
    try {
        
        var array = [{
            "id": "1",
            "sigla": "AC",
            "nome": "Acre"
        },
        {
            "id": "2",
            "sigla": "AL",
            "nome": "Alagoas"
        },
        {
            "id": "3",
            "sigla": "AM",
            "nome": "Amazonas"
        },
        {
            "id": "4",
            "sigla": "AP",
            "nome": "Amapá"
        },
        {
            "id": "5",
            "sigla": "BA",
            "nome": "Bahia"
        },
        {
            "id": "6",
            "sigla": "CE",
            "nome": "Ceará"
        },
        {
            "id": "7",
            "sigla": "DF",
            "nome": "Distrito Federal"
        },
        {
            "id": "8",
            "sigla": "ES",
            "nome": "Espírito Santo"
        },
        {
            "id": "9",
            "sigla": "GO",
            "nome": "Goiás"
        },
        {
            "id": "10",
            "sigla": "MA",
            "nome": "Maranhão"
        },
        {
            "id": "11",
            "sigla": "MG",
            "nome": "Minas Gerais"
        },
        {
            "id": "12",
            "sigla": "MS",
            "nome": "Mato Grosso do Sul"
        },
        {
            "id": "13",
            "sigla": "MT",
            "nome": "Mato Grosso"
        },
        {
            "id": "14",
            "sigla": "PA",
            "nome": "Pará"
        },
        {
            "id": "15",
            "sigla": "PB",
            "nome": "Paraíba"
        },
        {
            "id": "16",
            "sigla": "PE",
            "nome": "Pernambuco"
        },
        {
            "id": "17",
            "sigla": "PI",
            "nome": "Piauí"
        },
        {
            "id": "18",
            "sigla": "PR",
            "nome": "Paraná"
        },
        {
            "id": "19",
            "sigla": "RJ",
            "nome": "Rio de Janeiro"
        },
        {
            "id": "20",
            "sigla": "RN",
            "nome": "Rio Grande do Norte"
        },
        {
            "id": "21",
            "sigla": "RO",
            "nome": "Rondônia"
        },
        {
            "id": "22",
            "sigla": "RR",
            "nome": "Roraima"
        },
        {
            "id": "23",
            "sigla": "RS",
            "nome": "Rio Grande do Sul"
        },
        {
            "id": "24",
            "sigla": "SC",
            "nome": "Santa Catarina"
        },
        {
            "id": "25",
            "sigla": "SE",
            "nome": "Sergipe"
        },
        {
            "id": "26",
            "sigla": "SP",
            "nome": "São Paulo"
        },
        {
            "id": "27",
            "sigla": "TO",
            "nome": "Tocantins"
        }]

        res.json(array);

    } catch (err) {
        next(err)
    }
})

app.get("/api/partidos", async (req, res, next) => {
    try {
        const data = await axios.get("https://dadosabertos.camara.leg.br/api/v2/partidos?idLegislatura=56&itens=200&ordem=ASC&ordenarPor=sigla");

        var dados = data.data.dados

        var array = []

        dados.forEach(element => {
            array.push({
                nome : element.nome,
                sigla : element.sigla,
                id : element.id
            })
        });

        res.json(array);

    } catch (err) {
        next(err)
    }
})

// despesa do deputado através do id - descobrir despesas do mes e ano
app.get(`/api/despesas/deputado/:id/:mes/:ano`, async (req, res, next) => {
    try {
        //const data = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${req.params.id}/despesas?itens=200&ordem=ASC&ordenarPor=ano`);
        const data = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${req.params.id}/despesas?ano=${req.params.ano}&mes=${req.params.mes}&ordem=ASC&ordenarPor=mes`);
        res.json(data.data.dados);
    } catch (err) {
        next(err)
    }
})

// membtos do partido através do id do partido
app.get(`/api/partido/membros/:id`, async (req, res, next) => {
    try {
        const data = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/partidos/${req.params.id}/membros?idLegislatura=56&itens=200`);
        res.json(data.data.dados);
    } catch (err) {
        next(err)
    }
})

// deputados de algum estado
app.get(`/api/estado/:sigla`, async (req, res, next) => {
    try {
        // console.log(resp.params.sigla)
        const data = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${req.params.sigla}&ordem=ASC&ordenarPor=nome`);
        res.json(data.data.dados);
    } catch (err) {
        next(err)
    }
})

// dados do deputado através do id
app.get(`/api/deputado/:id`, async (req, res, next) => {
    try {
        const data = await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${req.params.id}`);
        res.json(data.data.dados);
    } catch (err) {
        next(err)
    }
})

app.listen(4000, function() {
  console.log('Servidor rodando na porta 4000.');
});




