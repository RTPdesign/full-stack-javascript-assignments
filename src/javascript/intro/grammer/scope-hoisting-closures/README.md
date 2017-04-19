# Assignment: Scope, hoisting, and closures

## Requirements

1. Fill in the details for the isValid function
2. Complete the toString function (takes a string, sanitizes it, then formats it to normal ssn formatting)



## Discussion

1. Explain what scope is?
    Scope is the set of variables, objects, and functions you have access to. JavaScript has two scopes, global and local.
2. What is the "global" scope?
    A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is local. It is created and destroyed every time the function is executed, and it cannot be accessed by any code outside the function. A local variable can have the same name as a global variable, but it is entirely separate; changing the value of one variable has no effect on the other. Only the local version has meaning inside the function in which it is declared.
3. How does the ssn function utilize closure?
    By defining and using variables within its enclosing scope. 
4. What is closure good for?
    Closure allows variables to be created, modified, and destroyed within its scope without being affected by code outside its scope.  
5. Observe the calculate function.  What's weird about it?  How is this an example of hoisting?
    The function is called before the function. This is a good example because the values are given before the function.
6. What is hoisting?
    Hoisting refers to how JS executes variable and function declarations by putting them into memory during the compile phase, but they stay exactly where you typed them in your code. Putting function declarations into the memory before it executes any code segment, allows functions to be used before declared in the code.
