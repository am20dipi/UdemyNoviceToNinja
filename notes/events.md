# EVENTS

## event listeners

* event listeners are functions called on an element of the HTML.
* event listeners wait for an event to occur and call a callback function to do something specified in the code block.
* in JS, .addEventListener() is used.

## different types of events
* click
* mouseover
* change
* keypress

## event bubbling

* the event of a parent element firing after the event of the child has been fired.
* we can use e.stopPropagation() to stop this from happening. 

## event delegation

* reduces the amount of time + space used by delegating the event listener to the parent element.
* we can use this instead of attaching the event listeners to each child.
