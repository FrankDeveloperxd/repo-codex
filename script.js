const messages = {
  fuerza: 'Fuerza: prioriza la técnica y aumenta la carga de forma gradual. La recuperación también forma parte del entrenamiento.',
  resistencia: 'Resistencia: empieza con un ritmo sostenible y progresa en duración e intensidad según tu capacidad.',
  constancia: 'Constancia: elige un horario realista y una rutina que puedas mantener durante la semana.'
};
document.querySelectorAll('[data-goal]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-goal]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#goal-result').textContent = messages[button.dataset.goal];
  });
});