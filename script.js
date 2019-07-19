let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let score = 0
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



// all q/a will be stored in an array of arrays
// will need a for loop to cycle through them all, setting all of the questions to the applicable header
// and one anser to each body element
let questions = [
	{
		question: 'Who is the lead singer of Nirvana?',
		answers: ["Chester Bennington", "Anthony Kiedis", "Kurt Cobain", "Chad Kroeger"],
		correctAnswer: "Kurt Cobain"
	}, 
	{
		question: "What is the stage name of the American rapper with the birth name Marshall Bruce Mathers III?",
		answers: ["T.I.", "Eminem", "Dr. Dre", "Big Boi"],
		correctAnswer:"Eminem"
	},
	{
		question: "What was the name of Jay-Z's first album?",
		answers: ["The Blueprint", "The Black Album", "In My Lifetime, Vol. 1", "Reasonable Doubt"],
		correctAnswer:"Reasonable Doubt"
	},
	{
		question: "Which hip-hop artist played a role in the film 'Four Brothers'?",
		answers: ["Drake", "Andre 3000", "Kanye West", "Ludacris"],
		correctAnswer:"Andre 3000"
	},
	{
		question: "Which artist holds the record for most Grammy nominations?",
		answers: ["Quincy Jones", "Jay-Z", "Bruce Springsteen", "Michael Jackson"],
		correctAnswer:"Quincy Jones"
	}


]

console.log(questions[0].answers.indexOf('Kurt Cobain'))
submitButton.addEventListener('click', function(evt) {
	// for (let i = 0; i < slides.length; i++) {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'


	// slideAllBodies.appendChild(button)

	slideHeader.innerHTML = questions[0].question
	slideFirstBody.innerHTML = questions[0].answers[0]
	slideSecondBody.innerHTML = questions[0].answers[1]
	slideThirdBody.innerHTML = questions[0].answers[2]
	slideFourthBody.innerHTML = questions[0].answers[3]

})

for(let i = 0; i < slideAllBodies.length; i++) {
	// let value = slideAllBodies[i].value
	var theIndex = questions[i].answers.indexOf(i)
slideAllBodies[i].addEventListener('click', function(evt) {
	// console.log('test')
	evt.preventDefault()
	let chosenAnswer = evt.target.innerText
	if (chosenAnswer === questions[i].correctAnswer) {
		console.log('good job')
	}else {
		console.log('keep trying')
		}

	slideHeader.innerHTML = questions[currentSlide].question
	slideFirstBody.innerHTML = questions[currentSlide].answers[0]
	slideSecondBody.innerHTML = questions[currentSlide].answers[1]
	slideThirdBody.innerHTML = questions[currentSlide].answers[2]
	slideFourthBody.innerHTML = questions[currentSlide].answers[3]
	currentSlide+=1
	// return (currentSlide < 5)
	})
}

