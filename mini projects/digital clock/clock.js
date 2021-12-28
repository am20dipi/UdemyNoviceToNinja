const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    //console.log(hour, minutes, seconds)

    const html = `
        <span>${hour} : ${minutes} : ${seconds}</span>
    `
    clock.innerHTML = html
}

setInterval(tick, 1000)