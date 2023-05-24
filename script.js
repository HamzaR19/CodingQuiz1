// Define the quiz questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
      answer: "A"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
      answer: "B"
    },
    {
      question: "What is the largest organ in the human body?",
      choices: ["A. Liver", "B. Heart", "C. Brain", "D. Skin"],
      answer: "D"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 0;
  let timerId = null;
  
  // Function to start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = questions.length * 10; // 10 seconds per question
  
    // Hide start button and show question section
    document.getElementById("start-section").style.display = "none";
    document.getElementById("question-section").style.display = "block";
  
    // Start the timer
    timerId = setInterval(updateTimer, 1000);
  
    // Display the first question
    displayQuestion();
  }
  
  // Function to display a question
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i];
      const choiceElement = document.createElement("li");
      choiceElement.textContent = choice;
      choiceElement.addEventListener("click", handleAnswerClick);
      choicesElement.appendChild(choiceElement);
    }
  }
  
  // Function to handle the click event on an answer choice
  function handleAnswerClick(event) {
    const selectedAnswer = event.target.textContent;
    const question = questions[currentQuestionIndex];
  
    if (selectedAnswer === question.answer) {
      score++;
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  // Function to update the timer
  function updateTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;
  
    timeLeft--;
    if (timeLeft < 0) {
      endQuiz();
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerId);
  
    // Hide question section and show end section
    document.getElementById("question-section").style.display = "none";
    document.getElementById("end-section").style.display = "block";
  
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }
  
  // Function to save the initials and score
  function saveScore() 
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value.trim();
  
    if (initials !== "") 
      // Save the initials and score (you can customize this part)
      console.log("Initials:", initials);
      console.log("Score:", score);
  
      // Reset the quiz
      initialsInput.value = "";
      document.getElementById("end-section").style.display = "none";
      document.getElementById("start-section").style