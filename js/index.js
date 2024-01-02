function resultado() {
  // Get the selected radio button value for each question
  let q1 = document.querySelector('input[name="1"]:checked');
  let q2 = document.querySelector('input[name="2"]:checked');
  let q3 = document.querySelector('input[name="3"]:checked');
  let q4 = document.querySelector('input[name="4"]:checked');
  let q5 = document.querySelector('input[name="5"]:checked');
  let q6 = document.querySelector('input[name="6"]:checked');
  let q7 = document.querySelector('input[name="7"]:checked');

  // Get the values of the selected radio buttons and convert them to numbers
  q1 = parseInt(q1.value) || 0;
  q2 = parseInt(q2.value) || 0;
  q3 = parseInt(q3.value) || 0;
  q4 = parseInt(q4.value) || 0;
  q5 = parseInt(q5.value) || 0;
  q6 = parseInt(q6.value) || 0;
  q7 = parseInt(q7.value) || 0;

  // Calculate the total score
  let totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7;

  // Display the total score
  alert("Seu resultado foi : " + totalScore);
}
