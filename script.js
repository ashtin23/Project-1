let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let submitButton = document.querySelector('.submit')


let myQuestions = [
	{
		question: "",
		answers: {
			a: '',
			b: '',
			c: ''
		},
		correctAnswer: 'b'
	},
	{
		question: '',
		answers: {
			a: '',
			b: '',
			c: ''
		},
		correctAnswer: 'a'
	}
]


submitButton.addEventListener('click', function(evt) {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'
})





// function myQuiz(questions, quizContainer, resultsContainer, submitButton) {
// 	function displayQuestions(questions, quizContainer) {
// 		let output = []
// 		let answers

// 		for (let i = 0; i < questions.length; i++) {
// 			answers = []
// 			for(letter in questions[i].answers) {
				
// 			}
// 		}
// 	}
// 	function displayResults(questions, quizContainer, resultsContainer) {

// 	}
// 	displayQuestions(questions, quizContainer)

// 	submitButton.addEventListener('click', function(evt) {
// 		displayResults(questions, quizContainer, resultsContainer)
// 	})
// }