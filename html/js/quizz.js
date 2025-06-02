document.getElementById("quizForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const bonnesReponses = {
    q1: "b", // relâcher immédiatement
    q2: "c", // les emporter avec vous
    q3: "b"  // limiter les blessures
  };

  let score = 0;
  const totalQuestions = Object.keys(bonnesReponses).length;

  for (let key in bonnesReponses) {
    const reponse = document.querySelector(`input[name="${key}"]:checked`);
    if (reponse?.value === bonnesReponses[key]) {
      score++;
    }
  }

  const resultContainer = document.getElementById("quizResult");
  let message;

  if (score === totalQuestions) {
    message = "<p>🎉 Excellent, vous connaissez bien les bonnes pratiques !</p>";
  } else if (score >= 2) {
    message = "<p>👍 Bon début, continuez à vous informer.</p>";
  } else {
    message = "<p>❗ Il est important de mieux connaître les règles de pêche responsable.</p>";
  }

  resultContainer.innerHTML = `
    <h3>Résultat du quiz</h3>
    <p>Vous avez obtenu <strong>${score}/${totalQuestions}</strong>.</p>
    ${message}
  `;
});
