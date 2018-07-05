export class Time {
    constructor(nome, escudo) {
        this.nome = nome
        this.escudo = escudo

        this.pontos = 0
        this.gp = 0
        this.gc = 0
    }

    updateInfo(pontos, golsMarcados, golsSofridos) {
        this.pontos += pontos
        this.gp += golsMarcados
        this.gc += golsSofridos
    }

    fimJogo(timeAdv, gols, golsAdv) {
        if (gols === golsAdv) {
            this.updateInfo(1, gols, golsAdv)
            timeAdv.updateInfo(1, golsAdv, gols)
        } else {
            if (gols > golsAdv) {
                this.updateInfo(3, gols, golsAdv)
                timeAdv.updateInfo(0, golsAdv, gols)
            } else {
                this.updateInfo(0, gols, golsAdv)
                timeAdv.updateInfo(3, golsAdv, gols)
            }
        }
    }
}