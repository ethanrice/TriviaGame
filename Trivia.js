var myQuestions = [
	{
		question: "What is Batman's alter ego?",
		answers: {
			a: 'Clark Kent',
			b: 'Wally West',
            c: 'Bruce Wayne',
            d: 'Oliver Queen'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is the name of the city Batman protects?",
		answers: {
			a: 'Coast City',
			b: 'Gotham City',
            c: 'Metropolis',
            d: 'Star City'
		},
        correctAnswer: 'b'
    },
    {
        question: "Who are the creators of Batman?",
        answers: {
            a: 'Bob Kane & Bill Finger',
            b: 'Jerry Siegel & Joe Shuster',
            c: 'Stan Lee & Jack Kirby',
            d: 'Gardner Fox & Harry Lampert'
        },
        correctAnswer: 'a'
    },
    {
        question: "What was the name of the first Robin?",
        answers: {
            a: 'Jason Todd',
            b: 'Tim Drake',
            c: 'Dick Grayson',
            d: 'Damian Wayne'
        },
        correctAnswer: 'c'
    },
    {
        question: "What was the name of the villian who broke Batman's back?",
        answers: {
            a: "Bane",
            b: "The Joker",
            c: "The Riddler",
            d: "Clayface"
        },
        correctAnswer: 'a'
    },
];

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');

var resultsContainer = document.getElementById('results');

var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);