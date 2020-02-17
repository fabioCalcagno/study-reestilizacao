


class DataHorario {
    constructor() {
        this.diaMes = new Date().getDate()
        this.diaSemana = new Date().getDay()
        this.horario = new Date().getHours()

        switch (this.diaSemana) {
            case 0: this.diaSemana = 'Segunda';
                break;
            case 1: this.diaSemana = 'Terça';
                break
            case 2: this.diaSemana = 'Quarta';
                break
            case 3: this.diaSemana = 'Quinta';
                break
            case 4: this.diaSemana = 'Sexta';
                break
            case 5: this.diaSemana = 'Sábado';
                break
            case 6: this.diaSemana = 'Domingo';
                break
        }
    }


    corPorHorario(horario) {

        let blueArray = [0, 3, 6, 9, 12, 15, 18, 21];
        let pinkArray = [1, 4, 7, 10, 13, 16, 19, 22];
        let yellow = true
        blueArray.forEach((hora) => {
            if (horario == hora) {
                yellow = false
                horario = '#009ade'
            }
        })
        pinkArray.forEach((hora) => {
            if (horario == hora) {
                yellow = false
                horario = '#ec0080'
            }
        })
        if (yellow) {
            horario = '#ffea00'
        }
        return horario
    }
}





