# What is the DOM?

DOM => Document Object Model

* The DOM is a visual representation in HTML of what is displayed on the webpage

* The DOM is a tree; a hierarchal structure of nodes
    * the root node (the top) is html tag
    * then there are head tags, body tags ..

* The DOM has elements; elements have children, siblings, parents ...

* The DOM is created by the browser by loading the HTML file

* There are tons of methods that can be called on the 'document' object
    * document.URL
    * document.location
    * document.getElementById
    * document.querySelector


## Query Selector

* document.querySelector() is a method used to reach in and pull the specified element. 
* we can set a variable to queried element to be used later in reference

Example:
    let list = document.querySelector('.list')


* we can also use:
    * document.getElementById() -- grabs a SINGLE element by that specified ID
    * document.getElementsByClassName() -- grabs ALL elements by that specified class name
    * document.getElementsByTagName() -- grabs ALL elements by that specified tag

