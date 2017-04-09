# Variables

> What are variables used for? Why are they important?
    Variables are used for holding data values in a container of storage to be referred to. They are important because they can hold a value of any type, allowing the program to manipulate the data and change it to carry out functions in the program.

## Requirements

1. Create the following variables:
    ```js
    export var message = 'hello';

    export let greeting = 'Yo!';

    export const saying = 'What up';
    ```
2. Can you assign a new value to message? (Assign 'world')      Yes, when running the test, it shows it has been changed and is no longer equal.
3. Can you assign a new value to greeting? (Assign 'Hello!')    Yes, when running the test, it shows it has been changed and is no longer equal.
4. Can you assign a new value to const? (Assign 'Booyah')       No, when running the test, the variable has not been changed and is still equal.


## Observations

1. What it he difference between var and let?
    var defines a variable globally or locally to an entire function regardless of the block scope, while let allows a variable to be declared with a limited scope to a block, statement, or expression.

2. What is the difference between let and const?
    let can be updated or changed, while const can not be updated although the properties can change, just not reassigned entirely.

3. When should you use let versus const?
    let should be used when the variable is made to be updated and changed. const should be used when you don’t want the variable to ever change and is always going to be the exact same object. It will protect your variable from reassignment.