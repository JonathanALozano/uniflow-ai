function analyzeTask() {
  const taskName = document.getElementById("taskName").value;
  const difficulty = document.getElementById("difficulty").value;
  const urgency = document.getElementById("urgency").value;
  const result = document.getElementById("result");

  if (!taskName || !difficulty || !urgency) {
    result.classList.remove("hidden");
    result.innerHTML = `
      <h3>Faltan datos</h3>
      <p>Por favor completa el nombre de la tarea, la dificultad y la urgencia.</p>
    `;
    return;
  }

  let priority = "";
  let recommendation = "";

  if (difficulty === "alta" && urgency === "alta") {
    priority = "Prioridad máxima";
    recommendation = "Debes trabajar en esta tarea lo antes posible. Se recomienda dividirla en partes pequeñas y dedicarle tiempo hoy.";
  } else if (difficulty === "alta" && urgency === "media") {
    priority = "Prioridad alta";
    recommendation = "Es una tarea compleja. Aunque no sea urgente, conviene comenzar pronto para evitar retrasos.";
  } else if (difficulty === "media" && urgency === "alta") {
    priority = "Prioridad alta";
    recommendation = "La tarea no es demasiado compleja, pero la fecha es cercana. Debes atenderla durante el día.";
  } else if (difficulty === "baja" && urgency === "alta") {
    priority = "Prioridad media";
    recommendation = "Es una tarea sencilla, pero urgente. Puedes resolverla rápido antes de avanzar con actividades más largas.";
  } else {
    priority = "Prioridad baja o moderada";
    recommendation = "Puedes programarla para después, pero no olvides asignarle un espacio en tu calendario.";
  }

  result.classList.remove("hidden");
  result.innerHTML = `
    <h3>Resultado de UniFlow AI</h3>
    <p><strong>Tarea:</strong> ${taskName}</p>
    <p><strong>Dificultad:</strong> ${difficulty}</p>
    <p><strong>Urgencia:</strong> ${urgency}</p>
    <p><strong>Clasificación:</strong> ${priority}</p>
    <p><strong>Recomendación:</strong> ${recommendation}</p>
  `;
}
