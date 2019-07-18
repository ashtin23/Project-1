let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let submitButton = document.querySelector('.submit')
var wrongAnswers = document.querySelectorAll('.wrong')
// let correctAnswers = document.querySelectorAll('.correct')
let allHeader = document.querySelectorAll('allHeader')
let slideHeader = document.querySelector('.slide-1-header')
let slideFirstBody = document.querySelector('.body-main-1')
let slideSecondBody = document.querySelector('.body-main-2')
let slideThirdBody = document.querySelector('.body-main-3')
let slideFourthBody = document.querySelector('.body-main-4')
let slideAllBodies = document.querySelectorAll('.body-main')
// let button = document.createElement('button')
// button.className = 'button'



//all q/a will be stored in an array of arrays
//will need a for loop to cycle through them all, setting all of the questions to the applicable header
//and one anser to each body element

let myQuestions = [
	'Who is the lead singer of Nirvana?',
	'What is the answer to question 2?',
	'What is the answer to question 3?',
	'What is the answer to question 4?',
	'What is the answer to question 5?',
	'What is the answer to question 6?',
	'What is the answer to question 7?',
	'What is the answer to question 8?',
	'What is the answer to question 9?',
	'What is the answer to question 10?'
]

let myAnswers = [
	{
		wrongOne: "Chester Bennington", 
		wrongTwo: "Anthony Kiedis",
		correct: "Kurt Cobain",
		wrongThree: "Chad Kroeger"
	},
	{
		wrong: "Answer a",
		correct: "Answer b",
		wrong: "Answer c",
		wrong: "Answer d"
	},
	{
		wrong: "A",
		wrong: "B",
		correct: "C",
		wrong: "D"
	},
	{
		wrong: " A",
		wrong: " B",
		wrong: " C",
		correct: " D"
	},
	{
		correct: "A",
		wrong: "B",
		wrong: "C",
		wrong: "D"
	},
	{
		wrong: "A",
		wrong: "B",
		correct: "C",
		wrong: "D"
	},
	{
		wrong: "A",
		correct: "B",
		wrong: "C",
		wrong: "D"
	},
	{
		wrong: "A",
		wrong: "B",
		wrong: "C",
		correct: "D"
	},
	{
		wrong: "A",
		wrong: "B",
		correct: "C",
		wrong: "D"
	},
	{
		correct: "A",
		wrong: "B",
		wrong: "C",
		wrong: "D"
	},

]

let correctAnswers = [
			"Kurt Cobain", "Answer b", "C", "D", "A", "C", "B", "D", "C", "A"
	]




submitButton.addEventListener('click', function(evt) {
	// for (let i = 0; i < slides.length; i++) {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'


	// slideAllBodies.appendChild(button)

	slideHeader.innerHTML = myQuestions[0]
	slideFirstBody.innerHTML = myAnswers[0].wrongOne
	slideSecondBody.innerHTML = myAnswers[0].wrongTwo
	slideThirdBody.innerHTML = myAnswers[0].correct
	slideFourthBody.innerHTML = myAnswers[0].wrongThree

})

for(let i = 0; i < slideAllBodies.length; i++) {
	let value = slideAllBodies[i].value
slideAllBodies[i].addEventListener('click', function(evt) {
	console.log('test')
	if (evt.target.innerText === myAnswers[0].correct) {
		console.log('good job')
	}else {
		console.log('keep trying')
	}
	})
}
// button.addEventListener('click', function(evt) {
// 	console.log('test')
// })


// let wrongAnswer = document.querySelector('.wrong')
// wrongAnswer.addEventListener('click', function(evt) {
// 	evt.preventDefault()
// 	if (evt.target.className === 'wrong') {
// 		console.log('wrong!')
// 	}
// })





// 	for (let i=0; i < wrongAnswers.length; i++) {
// 		// console.log('test1')
// 		wrongAnswers[i].addEventListener('click', function(evt) {
// 			evt.preventDefault()
// 			// console.log('test')
// 			if (evt.target.className === "wrong") {
// 			console.log('wrong!')
	
// 			}
// 		})

// }

// for (let i=0; i < correctAnswers.length; i++) {
// 	correctAnswers[i].addEventListener('click', function(evt) {
// 		evt.preventDefault()
// 		if (evt.target.className === "correct") {
// 		console.log('correct!')
// 			allHeader.innerHTML = myQuestions[0][0]
// 		}
// 	})

// }

