let slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0
let submitButton = document.querySelector('.submit')



let myQuestions = [
	{
		question: "placeholder",
		answers: {
			a: 'yo',
			b: 'hi',
			c: 'hey',
			d: 'sup'
		},
		correctAnswer: ''
	},
	{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	},
		{
		question: '',
		answers: {
			a: '',
			b: '',
			c: '',
			d: ''
		},
		correctAnswer: ''
	}

]



//main approach



submitButton.addEventListener('click', function(evt) {
	// for (let i = 0; i < slides.length; i++) {
	slides[currentSlide].className = 'slide'
	currentSlide = (currentSlide+1)%slides.length
	slides[currentSlide].className = 'slide showing'
})





// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";  
// }









// submitButton.addEventListener('click', function(evt) {
// function nextSlide(n) {
// 	showSlides(currentSlide += n)
// }
// function showCurrentSlide(n) {
// 	showSlides(currentSlide = n)
// }
// function showSlides(n) {
// 	let i
// 	if (n > slides.length) {
// 		currentSlide = 1
// 	}else if (n < 1) {
// 		currentSlide = slides.length
// 	}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none'
// 	}
// 	slides[currentSlide-1].style.display = "block"
// }
// 	showSlides(currentSlide)
// 	nextSlide()
// 	showCurrentSlide()
// 	showSlides()
// })





//different approach

// function nextSlide() {
// 	goToSlide(currentSlide+1)
// }

// for(let i =0; i < slides.length; i++){
// function goToSlide(n) {
// 	slides[currentSlide].className = 'slide'
// 	currentSlide = (n+slides.length)%slides.length
// 	slides[currentSlide].className = 'slide showing'
// }









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