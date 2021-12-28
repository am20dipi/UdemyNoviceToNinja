const correctAnswers = ['A', 'C', 'A']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // retrieve user input from form; set answers into array
    let score = 0
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value]

    // check answers
    userAnswers.forEach((answer, index)=>{
        if (answer === correctAnswers[index]){
            score += 33
        }
    })
    scrollTo(0,0)
    
    result.classList.remove('d-none')

    let output = 0
    // after 1 second, callback function is fired; continues to fire function every 1 second thereafter
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if ( output === score){
            clearInterval(timer)
        } else {
            output++
        }
    }, 50)

})
