import Vue from 'vue'
import {Time} from './time'
import _ from 'lodash'

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

new Vue({
    el: '#app',
    data : {
        filter: '',
        colunas:['nome', 'pontos','gp', 'gc', 'saldo'],
        order: {
            keys: ['pontos', 'gp', 'gc'],
            sort: ['desc', 'desc', 'asc']
        },
        times: [
            new Time("Atlético MG", require('./assets/atletico_mg_60x60.png')),
            new Time("Atletico PR", require('./assets/atletico-pr_60x60.png')),
            new Time("Palmeiras", require('./assets/palmeiras_60x60.png')),
            new Time("Flamengo", require('./assets/flamengo_60x60.png')),
            new Time("Cruzeiro", require('./assets/cruzeiro_60x60.png')),
            new Time("Corinthians", require('./assets/corinthians_60x60.png')),
            new Time("Santos", require('./assets/santos_60x60.png')),
            new Time("Grêmio", require('./assets/gremio_60x60.png')),
            new Time("São Paulo", require('./assets/sao_paulo_60x60.png'))
        ],
        novoJogo: {
            casa: {
                time: null,
                gols: 0
            },
            fora: {
                time: null,
                gols: 0
            }
        },
        view : "tabela"
    },
    methods: {
        fimJogo() {
            let timeAdv = this.novoJogo.fora.time,
                gols = +this.novoJogo.casa.gols,
                golsAdv = +this.novoJogo.fora.gols;

            this.novoJogo.casa.time.fimJogo(timeAdv,gols,golsAdv)
            this.view = 'tabela'
        },
        createNovoJogo() {
            let indexCasa = Math.floor(Math.random() * 9), indexFora = Math.floor(Math.random() * 9)

            this.novoJogo.casa.time = this.times[indexCasa]
            this.novoJogo.casa.gols = 0
            this.novoJogo.fora.time = this.times[indexFora]
            this.novoJogo.fora.gols = 0
            this.view =  'novoJogo'
        },
        sortBy(coluna) {
            this.order.keys = coluna
            this.order.sort = this.order.sort === 'desc' ? 'asc' : 'desc'
        }
    },
    computed: {
        timesFiltered(){
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) >=0;
            });
        }
    },
    filters: {
        saldo(time){
            return time.gp - time.gc
        },
        ucwords(value){
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});