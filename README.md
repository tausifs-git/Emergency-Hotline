### Q1 
##### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById returns a single element that matches with the 'id' name
- querySelector also returns a single element but only the element it found first. CSS selector can find id, class, tag and any other possible combination.
- getElementsByClassName - return an HTMLCollection. It only finds classes.
- querySelectorAll - returns a NodeList

### Q2
##### How do you create and insert a new element into the DOM?
1. createElement() method
- createElement method creates a new tag element
2. appendChild() method
- appendChild allows that newly created element to be inserted onto a parent element.

### Q3
##### What is Event Bubbling and how does it work?
- Event Bubbling is a mechanism where clicking (aka event) on a container causes the browser to start listening from child container to its parent's container if parent's container also happens to have listeners on their own.
- Event bubbling works on a ancestral line. If there are multiple containers, each is a child of its previous container while all of them or more than one container carrying an event listener, then clicking on a child container will trigger the listener of its parents, of which will trigger its own parent and this keep going on until reaches the root element. Thus in an ancestral line all parents will listen to an event happening to deep down the line.

### Q4
##### What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique where we put event listeners on a parent container to listen to the events going on to its children.
- This technique is useful, when we have many children of a container. Instead of putting event listener to each child, we exploit the event bubbling by putting event listener only on the parent container. Thus reducing the need for too many event listeners.  

### Q5
##### What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() method prevents an default action that was supposed to happen when an event is triggered.
- stopPropagation() on the other hand stops the event bubbling. The container that carries the stopPropagation will stop the flow of event bubble to go upwards to the root element.  

