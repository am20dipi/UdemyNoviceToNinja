const correctAnswers = ['A', 'C', 'A']
const form = document.querySelector('.quiz-form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // retrieve user input from form; set answers into array
    let score = 0
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value]

    // check answers
    userAnswers.forEach((answer, index)=>{
        if (answer === correctAnswers[index]){
            score += 1
        }
    })

    
})