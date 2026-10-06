const messages = {
  fuerza: 'Tu objetivo: ganar fuerza. Empieza por la técnica, progresa con calma y dale tiempo a la recuperación.',
  resistencia: 'Tu objetivo: mejorar resistencia. Elige un ritmo sostenible y aumenta el esfuerzo de forma gradual.',
  constancia: 'Tu objetivo: crear constancia. Reserva un momento para entrenar y conviértelo en parte de tu semana.'
};
document.querySelectorAll('[data-goal]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-goal]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#goal-result').textContent = messages[button.dataset.goal];
  });
});
