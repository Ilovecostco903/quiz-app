"use strict";

const storedData = [
  {
    question: 'Where did Homer grow up?',
    ans1: 'San Francisco',
    ans2: 'San Diego',
    ans3: 'Springfield',
    ans4: 'San Jose',
    correctAnswer: 'Springfield',
    img: 'https://i.dailymail.co.uk/i/pix/2012/04/11/article-2127965-128AA278000005DC-644_634x362.jpg',
    alt: 'Picture of the city Springfield',
  },

  {
    question: `What is Homer's favorite food?`,
	  ans1: 'Donut',
	  ans2: 'Spaghetti',
	  ans3: 'Sushi',
    ans4: 'Chinese',
    correctAnswer: 'Donut',
    img: 'https://media.giphy.com/media/N04Fkkzhf9slO/source.gif',
    alt: 'Homer eating donut',
  },

  {
    question: `Who is Homer's son?`,
	  ans1: 'Marge',
	  ans2: 'Bart',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Bart',
    img: 'https://media.giphy.com/media/sS9IVZUcfIw3S/giphy.gif',
    alt: 'Bart blowing bubble',
  },

  {
    question: `Who is Homer's wife?`,
	  ans1: 'Marge',
	  ans2: 'Bart',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Marge',
    img: 'https://media.giphy.com/media/l2JdZX8xyLZTY2gBW/source.gif',
    alt: 'Marge groans',
  },

  {
    question: `Who is Homer's oldest daughter?`,
	  ans1: 'Marge',
	  ans2: 'Bart',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Lisa',
    img: 'https://media.giphy.com/media/ahAqpIW3GR0sw/giphy.gif',
    alt: 'Hipster Lisa',
  },

  {
    question: `Who is Homer's youngest daughter?`,
	  ans1: 'Marge',
	  ans2: 'Bart',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Maggie',
    img: 'https://media.giphy.com/media/s6EYTqTRqujIY/giphy.gif',
    alt: 'Maggie dancing',
  },

  {
    question: `Where does Homer go to work?`,
	  ans1: 'Nuclear Power Plant',
	  ans2: 'Bar',
	  ans3: 'Donut shop',
    ans4: 'Stay home dad',
    correctAnswer: 'Nuclear Power Plant',
    img: 'https://media.giphy.com/media/8EmeieJAGjvUI/giphy.gif',
    alt: 'Homer destroying nuclear power plant control room',
  },

  {
    question: `Where does Homer go to drink beer?`,
	  ans1: `Marge's`,
	  ans2: `Bart's`,
	  ans3: `Lisa's`,
    ans4: `Moe's`,
    correctAnswer: `Moe's`,
    img: 'https://media.giphy.com/media/xT5LMWwcHmQqau1PFK/giphy.gif',
    alt: `picture of Moe's bar`,
  },

  {
    question: `Who is Homer's boss?`,
	  ans1: 'Marge',
	  ans2: 'Mr. Burns',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Mr. Burns',
    img: 'https://media.giphy.com/media/mSmF4o8LT36ec/giphy.gif',
    alt: 'Mr. burns looking angelic',
  },

  {
    question: `Who murder Mr. Burns?`,
	  ans1: 'Marge',
	  ans2: 'Bart',
	  ans3: 'Lisa',
    ans4: 'Maggie',
    correctAnswer: 'Maggie',
    img: 'https://media.giphy.com/media/X3LZLfNMOLdGU/giphy.gif',
    alt: 'Maggie shooting gun',
  },
];


function startTheQuiz() {
    $('.container').on('click', '.startQuiz', function(event) {
        $('.startQuiz').remove();
        $('.js-questionsAnswered').text(questionNum+1);
        renderQuestion();

    }); 
}

let questionNum = 0;
let score = 0;

function generateQuestion() {
    return`
    <h1 class='text question'>${storedData[questionNum].question}</h1>
    <form>
    <fieldset class="form-container">
      <label>
        <input type="radio" value="${storedData[questionNum].ans1}" name ="answers" id="answers" checked> <span class=" answer-selection">${storedData[questionNum].ans1}</span>
      </label>

      <label>
        <input type="radio" value="${storedData[questionNum].ans2}" name ="answers" id="answers" > <span class=" answer-selection">${storedData[questionNum].ans2}</span>
      </label>  

      <label>
        <input type="radio" value="${storedData[questionNum].ans3}" name ="answers" id="answers" > <span class=" answer-selection">${storedData[questionNum].ans3}</span>
      </label>

      <label>
        <input type="radio" value="${storedData[questionNum].ans4}" name ="answers" id="answers" > <span class=" answer-selection">${storedData[questionNum].ans4}</span>
      </label>
    </fieldset>
    <button type="submit" class="js-submit-button button"> Submit </button>
    </form>
    `;
}

function handleQuestions() {
    questionNum++;
}

function changeScore() {
    score++;
}

function renderQuestion() {
    $('.js-questions').html(generateQuestion());

}



function handleSubmitButton() {
    $('.js-questions').on('click', '.js-submit-button', function(event) {
        event.preventDefault();
        checkAnswer()

    }); 
}

function checkAnswer() {
  
    let answer = $('input:checked').val();

    if (answer === `${storedData[questionNum].correctAnswer}`) {
        correctAnswer();
        $('.js-score').text(score);
    } else {
        incorrectAnswer();
    }
console.log(answer);
}

function correctAnswer() {
    $('.js-answers').html(
        `
        <div class="correctAnswer text">
          <div class="response">
            <h1>You got it correct!</h1>
          </div>
        <img class="gif" src= "${storedData[questionNum].img}" alt="${storedData[questionNum].alt}">
        <button type="submit" class="js-next-button button"> Next </button>
        </div>
        `);
    changeScore()
}

function incorrectAnswer() {
    $('.js-answers').html(
        `
        <div class="incorrectAnswer text">
          <div class="response">
            <h1>You got it Incorrect!</h1>
            <h1>The correct answer is ${storedData[questionNum].correctAnswer}</h1>
          </div>
        <img class="gif" src= "${storedData[questionNum].img}" alt="${storedData[questionNum].alt}">
        <button type="submit" class="js-next-button button"> Next </button>
        </div>
        `);
}


function handleNextButton() {
    $('.js-answers').on('click', '.js-next-button', function(event) {
      if (questionNum === 9) {
        finalScore();
      } else {
          handleQuestions();
          renderQuestion();
          $('.js-questionsAnswered').text(questionNum+1);
          
      }
    });
}

function finalScore() {
  $('.js-questions').html(
    `
    <section class="final-page">
    <h1>Final score: ${score}/10</h1>
    <button type="submit" class="restart button">Restart</button>
    </section>
    `
  );
}

function restartQuiz() {
  $('.js-questions').on('click', '.restart', function(event) {
    location.reload();
  });
}


function handleButton() {
    startTheQuiz();
    handleSubmitButton();
    handleNextButton();
    restartQuiz();
}

$(handleButton);