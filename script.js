function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  const horaFormatada = `${horas}:${minutos}:${segundos}`;
  document.getElementById('time').textContent = horaFormatada;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Atualiza imediatamente ao abrir a página
