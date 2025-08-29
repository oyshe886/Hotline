Q1: Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

getElementById : To select an individual element based on its id, which is a unique identifier. Always returns one.

getElementsByClassName : Selects all elements with the same class name. Returns a collection.

querySelector : Accepts a CSS selector and returns only the first matching element.

querySelectorAll : Accepts a CSS selector but returns all matching elements in a list.

Q2: How to make and insert a new element into the DOM

To make: document.createElement("tagName"). For instance, document.createElement("p") makes a paragraph element.

To insert: utilize methods like append, appendChild, prepend, or insertBefore to place the new element into the DOM.

Q3: What is Event Bubbling and how does it work?
Event bubbling is the fact that when an event happens on a child element, it doesn't stop there. The event moves up its parent elements. For example, if you click a button inside of a div, first is the button's click, second is the div's click, third the body, and so forth.

Q4: What is Event Delegation in JavaScript? Why is it useful?
Event delegation is attaching an event listener to the parent element rather than adding an event listener to every child element individually. When the child is clicked, the event propagates up to the parent, and the parent processes it. It is helpful in that it conserves memory, enhances performance, and makes code more straightforward.

Q5: Difference between preventDefault() and stopPropagation

preventDefault() → Stops the browser's default action on an event. Example: stopping a submit button on a form from reloading the page.

stopPropagation() → Stops the event from bubbling up to parent elements. Example: stopping a button click from also triggering the parent div's click.
