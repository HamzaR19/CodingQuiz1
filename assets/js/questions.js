// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
  { 
      question: "How many wheels are there on a tricycle?", 
      answers: [
          { text: "Two", correct: false },
          { text: "Three" , correct: true },
          { text: "Four", correct: false },
          { text: "Ten", correct: false }
      ]
  },
  { 
      question: "2+2=", 
      answers: [
          { text: "3", correct: false },
          { text: "5", correct: false },
          { text: "4", correct: true },
          { text: "7", correct: false }
      ]
  },
  { 
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 8?", 
      answers: [
          { text: "if (i != 8)", correct: true },
          { text: "if i =! 8", correct: false },
          { text: "if (i <> 8)", correct: false },
          { text: "if (i !=== 8)", correct: false }
      ]
  },
  { 
      question: "What is the correct way to write a JavaScript array?", 
      answers: [
          { text: "var vegetable = (0:'kale', 1:'lettuce', 2:'spinach')", correct: false },
          { text: "var vegetable = ['kale', 'lettuce', 'spinach']", correct: true },
          { text: "var vegetable = (kale, lettuce, spinach)", correct: false },
          { text: "None of the above", correct: false }
      ]
  },
  { 
      question: "How do you round the number 102.456, to the nearest integer?",
      answers: [
          { text: "Math.random(102.456)", correct: false },
          { text: "Math.rnd(102.456)", correct: false },
          { text: "round(102.456)", correct: false },
          { text: "None of the above", correct: true }
      ]
  },
];