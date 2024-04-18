/*
 *  Script com a lógica do relógio digital.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio.
 *  1. Utilizando o método Date() do javaScript para retorna um objeto de data com
 *     a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o HTML chamando o método timer(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo textContent dos elementos retornados.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval'.
 */

function time() {
  const horario = new Date()

  const horas = horario.getHours()
  const minutos = horario.getMinutes()
  const segundos = horario.getSeconds()

  // arrumar para que tenha dois digitos
  const horas1 = (horas < 10 ? "0" : "") + horas
  const minutos1 = (minutos < 10 ? "0" : "") + minutos
  const segundos1 = (segundos < 10 ? "0" : "") + segundos

  const arrumarHoras = document.getElementById("horas")
  arrumarHoras.textContent = horas1;

  const arrumarMinutos = document.getElementById("minutos")
  arrumarMinutos.textContent = minutos1

  const arrumarSegundos = document.getElementById("segundos")
  arrumarSegundos.textContent = segundos1
}

/** Chamada da função de time para funcionar o relógio usando o método 'setInterval'*/
setInterval(time, 100)