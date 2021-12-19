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


    // Toggle a class
const heading = document.querySelector('.heading')
    // pass in the value of the class name you want to toggle
    heading.classList.toggle('test')


// Querying children nodes by the parent node
const article = document.querySelector('article')
console.log(article.children)

    // How to add a class name to all children elements of the parent
    Array.from(article.children).forEach(child => {
        child.classList.add('article-element')
    })

    // Figuring out parent element of a specified element
    console.log(article.parentElement)
    // use 'parentElement' twice or more to figure out 'grandparent element'
    console.log(article.parentElement.parentElement)

    // Querying sibling element of a specified element
    console.log(p.nextElementSibling)
    console.log(p.previousElementSibling)