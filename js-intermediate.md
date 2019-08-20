# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer: CRUD. Create, Read, Update, Destroy/Delete

  Researched answer: Post, Get, Put/Patch, and Delete = correspond to the CRUD verbs and their
  respective positions above.


2. Why would you use object destructuring?

  Your answer: object destructuring allows a user to extract data using a short variable name 
  rather than writing out a long line of code to define the location of the data within an object. 
  

  Researched answer:
  Because data can be so deeply nested in props or state, destructuring allows for a simple
  shorthand to access the data.


3. Why is testing important?

  Your answer: testing is important to check for errors in code. It can save a lot of time by
  testing each component of code / method / function, etc. before incorporating it into a larger
  body of code. blocks of code can be tested individually from a larger body of code to check
  where the errors are coming from

  Researched answer: testing assures that applications maximize their capacity and accuracy - when
  the quality is good, the application will last longer and perform well even when pressed to its
  maximum capacity


4. What is the difference between a class and an object?

  Your answer: a class is a blueprint for objects and a library of objects. each class defines
  common variables that objects within that class will share. for example, a class of cars will
  share the common variable of transmission which will return different values of "automatic" and
  "manual." the objects in the class will be the individual cars: "1997 Ford Fiesta", "1989 Ford
  Pinto", etc. that house the same variables but with unique values for each variable. They can 
  all be found in the same class.

  Researched answer: a class is a template for defining objects. it specifies object properties
  such as what types of variables and data to expect. an object is a member or instance of a 
  class. an object has a state in which all of its properties have values that are either 
  exmplicitly defined or set by default.
  


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer: patience. React has been the first concept in programming that has really been a 
  challenge for me to grasp. It differs from coding to me so far in that it isn't a matter of 
  logic but of correct syntax. Understanding the nuances of passing data down to children to render
  a specific outcome has been a challenge. After treasure hunt, i was certain i'd grasped the basics,
  but after struggling this(friday) morning on tic tac toe, i'm back to feeling defeated = BUT
  STILL HOPEFUL that it'll get easier.



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: by referencing the source of the css to the html page and vice-versa

  Researched answer: To use an external style sheet, add a link to it in the <head> 
  section of the HTML page:
      <link rel="stylesheet" href="styles.css">


2. What is the difference between a div and a span?

  Your answer:

  Researched answer:
  <div> logical span
  <span> Generic inline style container
  they are both containers to group HTML, but span is in-line and usually used for a small
  chunk of HTML inside a line. A div element is block-line (which is basically equivalent to
  having a line-break before and after it) and used to group larger chunks of code.

3. What is a CSS class? When should you use an id instead of a class?

  Your answer: a css class is a component that houses data and communicates the data and methods
  with other classes. id's are specific to smaller components within a class. For example, a button
  or image can be passed an id to reference independent from the class even though it is housed and
  called within a class.

  Researched answer: CSS classes are reusable styles that can be added to HTML elements.
  Much like regualar classes, css classes are templates with saved data that can be applied and
  multiplied to modify other code.


4. Name 4 semantic HTML tags.

  Your answer:

  Researched answer: semantic tags clearly communicate the purpose of each line of code, both 
  to other programmers as well as the computer and search engines
  <p> paragraph
  <ul> unordered list
  <h1 - h6> heading tags
  <cite> citation
  <strong> strong emphasis
  


5. What are three options for creating responsive design?

  Your answer: hover effects, click-ons effects, cursor effects 

  Researched answer: responsive design renders well on a variety of devices and window/screen
  sizes. RWD incorporates fluid grid concepts for re-sizing the different media types displayed
  on a web page or application. 
  1. use viewport
  2. use %'s for width properties rather than pixels
  3. flexible images -> set images to 100% width - they can shrink accordingly but not get larger


### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer: front end development is the user-experience and user-interaction portion of a
  web page or application. These include the aesthetics of an application as well as the layout
  of it. Good front end development assures that users can easily navigate an application, 
  understand how to use it and its purpose, as well enjoy the experience of using it.

  Researched answer: also referred to as client-side development, front end development is 
  the practice of producing HTML, CSS, and JavaScript for a website or web application so that
  a user can see and interact with them directly. the objective of front-end development is to
  design a site that is easy for users to read across different platforms and devices. 


2. What is block scope in JavaScript?

  Your answer: block scope is the scope of a given block of code, whether that's a function or
  a larger body of code like a class or component.

  Researched answer: the area within if, switch conditions or for and while loops. generally
  speaking, whenever you see curly brackets {}, it is a block. ES6 allows developers to 
  declare variables in block scope using let and const, which means those variables only
  exist within that corresponding scope or block of code


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer: in object oriented programming, inheritance defines what variables an object
  will contain in its data set.

  Researched answer: inheritance is the mechanism of basing an object or class on another, 
  retaining similar implementation. 'child' objects acquire the properties and behaviors of
  the parent object
