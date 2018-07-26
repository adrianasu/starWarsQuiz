const quizList = [{
        question: 'Who directed the original Star Wars movies?',
        answers: ['Jules Verne', 'J. K. Rowling', 'George Lucas',
            'Steven Spielberg', 'Alfred Hitchcock'
        ],
        correctAnswer: 'George Lucas',
        image: {
            srcAttribute: 'https://www.dailydot.com/wp-content/uploads/2018/06/george-lucas-2.jpg',
            altAttribute: "director's red chair and speaker cartoon"
        }
    },
    {
        question: 'Who is the son of Anakin and Padme?',
        answers: ['Darth Vader', 'Palpatine', 'Han Solo',
            'Luke Skywalker', 'Obi-Wan Kenobi'
        ],
        correctAnswer: 'Luke Skywalker',
        image: {
            srcAttribute: 'https://images.hellogiggles.com/uploads/2017/07/03042040/lukeskywalker.gif',
            altAttribute: "Luke Skywalker holding his lightsaber"
        }
    },
    {
        question: 'Who said "No, I am your Father!"?',
        answers: ['Luke Skywalker', 'Palpatine', 'Darth Vader',
            'Chewbacca', 'Han Solo'
        ],
        correctAnswer: 'Darth Vader',
        image: {
            srcAttribute: 'https://deadmanstales.files.wordpress.com/2015/09/tumblr_vaderanimatedgif.gif',
            altAttribute: "Darth Vader saying I am your father and Luke Skywalker horrified yelling no!"
        }
    },
    {
        question: 'Which of the following is a planet in Star Wars?',
        answers: ['Almec', 'Palpatine', 'Tatooine', 'Jar Jar',
            'Sora'
        ],
        correctAnswer: 'Tatooine',
        image: {
            srcAttribute: 'https://cdna.artstation.com/p/assets/images/images/002/448/368/large/benoit-duroi-tatooine-reboot-0029-cam-004.jpg?1461853926',
            altAttribute: "Sight of Luke Skywalker's house in Tatooine"
        }
    },
    {
        question: "What's Han Solo's ship called?",
        answers: ['Star Destroyer', 'Serenity', 'The Millennium Falcon',
            'Naboo Starfighter', 'The Profundity'
        ],
        correctAnswer: 'The Millennium Falcon',
        image: {
            srcAttribute: 'https://steamusercontent-a.akamaihd.net/ugc/2421123985746667342/CF3985518D4B2C83DFEB6E89FFDDCF006BB6B8BA/',
            altAttribute: "Han Solo's Millenium Falcon ship"
        }
    },
    {
        question: "Who was the oldest and wisest known Jedi Master?",
        answers: ['Master Oppo Rancisis', 'Mace Windu', 'Shaak Ti',
            'Palpatine', 'Yoda'
        ],
        correctAnswer: 'Yoda',
        image: {
            srcAttribute: 'https://media1.tenor.com/images/b384221e44cc8d222f1df1b85f3ee315/tenor.gif?itemid=8063259',
            altAttribute: "Yoda concentrating with his eyes closed"
        }
    },
    {
        question: "What species is Chewbacca?",
        answers: ['Ewok', 'Wookie', 'Dinko',
            'Vratix', 'Nikto'
        ],
        correctAnswer: 'Wookie',
        image: {
             srcAttribute: 'https://noescinetodoloquereluce.com/wp-content/uploads/2016/03/Wookie.gif',
             altAttribute: "Chewbacca smoothing his head's fur down with both hands"
        }
    },
    {
        question: "What’s the weapon used by the Jedi?",
        answers: ['Lightsabers', 'Blasters', 'Ray guns',
            'Machine guns', 'Space Swords'
        ],
        correctAnswer: 'Lightsabers',
        image: {
            srcAttribute: 'https://33.media.tumblr.com/77795731a1f08131a90430f932a72406/tumblr_ncl6dcrK611s2wio8o1_500.gif',
            altAttribute: "Skywalker and Darth Vader fighting with lightsabers"
        }
    },
    {
        question: "What’s a Death Star?",
        answers: ['A planet', 'A star', 'A galaxy',
            'A  superweapon', 'A rebel group'
        ],
        correctAnswer: 'A  superweapon',
        image: {
            srcAttribute: 'https://s.hswstatic.com/gif/death-star-1.jpg',
            altAttribute: "Death Star view"
        }
    },
    {
        question: "What’s R2-D2’s nickname?",
        answers: ['Little R', 'Mini', 'R2',
            'D2', 'RD'
        ],
        correctAnswer: 'R2',
        image: {
            srcAttribute: 'https://media.giphy.com/media/Qgh28p98jlja0/giphy.gif',
            altAttribute: "R2-D2 plugging himself to a computer machine"
        }
    }
];

const feedbackList = {
    correct: {
        resultText: "Correct!",
        image: {
            srcAttribute: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-08/15/13/enhanced/webdr11/anigif_enhanced-buzz-9359-1439659370-14.gif?downsize=715:*&output-format=auto&output-quality=auto',
            altAttribute: "Princess Lea and Chewbacca hugging happily"
        },
        messages: ['"The Force will be with you. Always"',
            '"The Force runs strong in your family"',
            '"You have brought balance to this world"',
            '"Oh, my dear friend. How I’ve missed you"',
            '"Do or do not. There is no try"',
            '"A Jedi gains power through understanding"'
        ]
    },
    incorrect: {
        resultText: "Uh-oh...",
        image: {
            srcAttribute: 'https://bestanimations.com/Sci-Fi/StarWars/yoda-sat-wars-animated-gif-3.gif',
            altAttribute: "Angry Yoda threatens with lightsaber"
        },
        messages: ['"Help me, Obi-Wan Kenobi. You’re my only hope"',
            '"I find your lack of faith disturbing"',
            '"Use the Force"',
            '"Fear is the path to the dark side"',
            '"You fail because you don’t believe"',
            '"The dark side clouds everything"'
        ]
    }
}

function joinQuestionsAndChoices(quizList, questionNumber) {
    let questionAndChoices = [];
    questionAndChoices.push(headerOfForm(quizList, questionNumber));
    questionAndChoices.push(joinChoicesStrings(quizList, questionNumber));
    questionAndChoices.push(formFooter());
    return questionAndChoices.join("");
}

function formFooter() {
    return `</fieldset><button role="button" type="submit"               
          class = "form-button js-form-button"> Submit 
          </button></form >` ;
}
// generate string with choices
function joinChoicesStrings(quizList, questionNumber) {
    let choices = [];
    choices.push('<div class="choices">');
    for (let i = 0; i < quizList[questionNumber-1].answers.length; i++) {
        choices.push(generateChoiceString(quizList, questionNumber,i));
    };
    choices.push('</div>');
    return choices.join("");
}

function generateChoiceString(quizList, questionNumber, num) {
    return `<label 
			for="answer${num}">
			<input type="radio" id="answer${num}"
			name="answer" value="${num}" required>
			<span>${quizList[questionNumber-1].answers[num]}
			</span></label>`;
}

function generateQuestionAndChoices(quizList, questionNumber) {
    let questionAndChoices = joinQuestionsAndChoices(quizList, questionNumber);
    $('.js-quiz').html(questionAndChoices);
}

function headerOfForm(quizList, questionNumber) {
    return `<form>
            <fieldset name="question-and-multiple-choice-answers">
            <legend> ${quizList[questionNumber-1].question}
            </legend>`;
}

function generateImage(list, item, correctAnswer) {
    if (typeof item !== "number") {
        return `<img class="js-feedback-image feedback-image" 
			src="${list[correctAnswer].image.srcAttribute}" 
			alt="${list[correctAnswer].image.altAttribute}">`;
    } else {
        $('.js-quiz-image').attr("src", `${list[item-1].image.srcAttribute}`)
            .attr("alt", `${list[item-1].image.altAttribute}`);
    }
}

function updateQuestionCounter() {
  let questionNumber = parseInt($('.js-question-counter').attr('data-question-number'))+1;
  $('.js-question-counter').attr('data-question-number', questionNumber)
                          .text(questionNumber);
  return questionNumber;
}

function updateScore() {
    let score = parseInt($('.js-score').attr('data-score')) + 1;
    return score;
}

function updateScoreDisplay() {
    let score = updateScore();
    $('.js-score').attr('data-score', score)
        .text(score);
}

function renderFeedbackPage(quizList, questionNumber, answer) {
    let correctAnswer = true;
    compareAnswer(quizList, questionNumber, answer) ?
        correctAnswer = true : correctAnswer = false;
    generateFeedbackPage(quizList, questionNumber, correctAnswer);
    $('.js-quiz, .js-quiz-image').hide();
    $('.js-feedback, .js-feedback-image, .js-footer-button').show();
}

// compares user's answer to right answer
//  and returns true if they're the
// same, otherwise it returns false
function compareAnswer(quizList, questionNumber, answer) {
    const answerString = quizList[questionNumber-1]
        .answers[answer];
    const rightAnswer = quizList[questionNumber-1].correctAnswer;
    if (answerString == rightAnswer) {
        return true;
    }
    return false;
}

function generateFeedbackPage(quizList, questionNumber, correctAnswer) {

    if (correctAnswer) {
        updateScoreDisplay();
    }
    generateAnswerFeedback(quizList, questionNumber, correctAnswer);
    generateNextButton();
}

function generateAnswerFeedback(quizList, questionNumber, correctAnswer) {
    let result = correctAnswer ? "correct" : "incorrect";
    let feedbackString = joinFeedbackString(quizList, questionNumber, result);
    $('.js-feedback').html(feedbackString);
}

function generateNextButton() {
    $('.js-footer-button').html(`<button role="button" type="button" 
			class="js-next-button">Next</button>`);
}

function joinFeedbackString(quizList, questionNumber, result) {
    let feedback = [];
    feedback.push(generateImage(feedbackList, undefined, result));
    feedback.push(`<div class="feedback-text">`);
    feedback.push(generateFeedbackString(result));
    feedback.push(generateCorrectAnswerString(quizList, questionNumber, result));
    feedback.push(generateStarWarsQuote(result));
    feedback.push(`</div>`);
    return feedback.join("");
}

function generateFeedbackString(result) {
    return `<h1>${feedbackList[result].resultText}</h1>`;
}

function generateCorrectAnswerString(quizList, questionNumber, result) {
    return (result == "correct") ? `<br>` :
        `<p>${quizList[questionNumber-1].correctAnswer}
				<span class="break"></span>
				is the correct answer</p><br>`
}

function generateStarWarsQuote(result) {
    return `<p><i>${feedbackList[result].messages[Math.floor(Math.random() * 5)]}</i></p>`;
}

function showCounters() {
    $('.js-counters').show();
}

function selectAnswer() {
    $('.js-quiz').on('submit', function (event) {
        event.preventDefault();
        let answer = $('input:checked').val();
        let questionNumber = parseInt($('.js-question-counter')
                            .attr('data-question-number'));
        renderFeedbackPage(quizList, questionNumber, answer);
    });
}

function renderQuestion() {
    let questionNumber = 1;
    generateImage(quizList, questionNumber);
    generateQuestionAndChoices(quizList, questionNumber);
}

function highScoreFeedback() {
    return `<p><i>"The force is strong with this one"</i><br>-Darth Vader</p>`;
}

function mediumScoreFeedback() {
    return `<p><i>"It is the quest for honor that makes one honorable"</i><br>-Star Wars</p>`;
}

function lowScoreFeedback() {
    return `<p><i>“Much to learn you still have my old padawan”</i><br>-Yoda</p>`;
}

function finalScoreString() {
    return `<h1>Score<span class="break"></span>${$('.js-score').attr('data-score')}/10</h1>`;
}

function generateRestartButton() {
    $('.js-footer-button').html(`<button role="button" type="button" 
			class="js-restart-button">
			Start</button>`);
}

function generateResultStrings() {
    let resultString = [];
    let score = $('.js-score').attr('data-score');
    resultString.push(finalScoreString());
    (score >= 8) ? resultString.push(highScoreFeedback()): (score >= 5) ? resultString.push(mediumScoreFeedback()) :
        resultString.push(lowScoreFeedback())
    return resultString.join("");
}

function renderQuizResults() {
    $('.js-feedback, .js-feedback-image, .js-counters').hide();
    $('.js-logo').addClass('results-logo');
    $('.js-logo').removeClass('quiz-logo');
    $('.js-results').html(generateResultStrings());
    generateRestartButton();
    $('.js-results').show();
    
}

function isItOver(questionNumber) {
    return (questionNumber-1 >= quizList.length) ? true :
        false;
}

function renderNextQuestion() {
    $('.js-footer-button').on('click', '.js-next-button', function (event) {
        let questionNumber = updateQuestionCounter();
        if (isItOver(questionNumber)) {
            renderQuizResults();
            restartQuiz();  
        } 
        else {
            generateImage(quizList, questionNumber);
            generateQuestionAndChoices(quizList, questionNumber);
            $('.js-feedback, .js-feedback-image,.js-footer-button').hide();
            $('.js-quiz, .js-quiz-image').show();
        }
    });
}

function resetCounters() {
    $('.js-score').attr('data-score', 0).text(0);
    $('.js-question-counter').attr('data-question-number', 1).text(1);
}

function restartQuiz() {
    $('.js-footer-button').on('click', '.js-restart-button', function (event) {
        $('.js-results').hide();
        $('.js-logo').removeClass('results-logo').addClass('start-logo');
        $('.js-start').show();
        $('.js-footer-button').html('<button role="button" type="button" class="js-start-button">Go!</button>');  
    });
    
}

function handleStart(event) {
        resetCounters();
        $('.js-start, .js-footer-button').hide();
        $('.js-quiz, .js-counters, .js-quiz-image').show();
        $('.js-logo').removeClass('start-logo').addClass('quiz-logo');
        renderQuestion();
        selectAnswer();
    }

// startQuiz function will be our callback when the
// page fully loads. It's responsible for activating 
// our individual functions that handle the new 
// question submission
function watchStartButton() {
    // listens for a click on the start button
    $('.js-footer-button').on('click', '.js-start-button', handleStart);
}

function main() {
  watchStartButton();
  renderNextQuestion();
}

// when the page loads call main
$(main);