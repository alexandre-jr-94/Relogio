setInterval(horario, 1000)

const ponteiroMin = document.querySelector('[minutos]')
const ponteiroSeg = document.querySelector('[segundos]')
const ponteiroHor = document.querySelector('[horas]')

function horario(){
    const horarioAtual = new Date()
    const RotacaoSeg = horarioAtual.getSeconds() / 60
    const RotacaoMin = horarioAtual.getMinutes() / 60
    const RotacaoHor = horarioAtual.getHours() / 12
    rotacaoRelogio(ponteiroSeg, RotacaoSeg)
    rotacaoRelogio(ponteiroMin, RotacaoMin)
    rotacaoRelogio(ponteiroHor, RotacaoHor)
}

function rotacaoRelogio(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}
