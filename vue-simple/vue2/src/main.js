import Vue from 'vue'
import {Time} from './time'

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

let meuVue = new Vue({
    el: '#app',
    data : {
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
        }
    },
    created() {
        let indexCasa = Math.floor(Math.random() * 9), indexFora = Math.floor(Math.random() * 9)

        this.novoJogo.casa.time = this.times[indexCasa]
        this.novoJogo.casa.gols = 0
        this.novoJogo.fora.time = this.times[indexFora]
        this.novoJogo.fora.gols = 0
    }
});


console.log(meuVue)