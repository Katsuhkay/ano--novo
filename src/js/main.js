AOS.init();


const dataDoEvento = new Date("Dec 31, 2025 23:59:59");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60

  const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
  const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / (horaEmMs))
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % (horaEmMs)) / (minutoEmMs))
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

  console.log(diasAteOEvento)
  console.log(horasAteOEvento)
  console.log(minutosAteOEvento)
  console.log(segundosAteOEvento)

  document.getElementById('contador').innerHTML = `${diasAteOEvento} dias, ${horasAteOEvento} horas, ${minutosAteOEvento} minutos, ${segundosAteOEvento}`

}, 1000)