// Add a class to an element

const content = document.querySelector('p')
content.classList.add('error')

// Remove a class

content.classList.remove('error')

// Set an attribute to an element

const link = document.querySelector('a')
link.setAttribute('href', 'www.petco.com')

// Change the style of an element

const title = document.querySelector('h1')
title.setAttribute('style', 'color: black')
// add more styling without removing the initial styling
title.style.fontSize = '60px'
title.style.margin = '3px'


