# Typings

> What are types? Why should we use types? Is JS considered a typed language?
    Types are preset types that JS understands as objects or variables that are not declared explicitly, they refer to the type of data being defined.
    We should use types to clealry define what type of data a value can store.
    JS by definition is considered a typed language because it distinguishes between types and each operation is bound to specific type. It is Weakly typed since it doesn't enforce correct typing and Dynamically typed since a value's type is enforced, but the variable simply represents any value of any type.
### Requirements

1. What are all the types?
    The primitive types are: Boolean, Null, Undefined, Number, String, Symbol (new in ECMAScript 6), and Object.
2. What are the defaults for all of the types?
    Boolean represents a logical entity and can have two values: true, and false but defaults to false.
    Null's default value is null
    Undefined's default value is undefined
    Number's default value is 0
    String's default value is an empty string ""
    Symbol's default value is symbol, Symbol()
    Object's default value is an empty object, {}
3. Demonstrate an example of each type
   Boolean example: 
    var x = Boolean(expression);

   Null example: 
    if ( object == null )
      Do something
   
   Undefined example:
    var x;

   Number example:
    var y = 34;

   String example:
    var txt = "text";

   Symbol example:
    var sym1 = Symbol();

   Object example:
    var person = "John";

4. Demonstrate to teacher


### Observations

1. Why are types beneficial?
    Types clearly define what type of data a value can store to give predictable outcomes.

2. Why are strings important?
    They allow the program to understand that given characters should be treated as a string and allow them to be manipulated as such.
    1. What type of information could you store in a string?
        You could store any variety of characters as well as a list of stings
    2. Why do Assignment.myString and Assignment.stringObj not equal each other?
        JS distinguishes between primitive string values and String objects. 
    
3. Why are numbers important?
    They allow JS to treat numerical data as floating point numbers so they can be manipulated with math.
    1. What type of information could you store in a number?
        You can store a variety of numerical data such as decimals, negatives, equations, exponents, Hexadecimals, and even Infinity.
    2. Can you store decimals?
        Yes, you can store decimals, numbers are always stored as double precision floating point numbers.

4. What are all of the types?
    The primitive types are: Boolean, Null, Undefined, Number, String, Symbol (new in ECMAScript 6), and Object.

5. List a couple of native JavaScript objects, and what they do.
    Boolean object converts the value passed as the first parameter to a boolean value, if necessary. If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false.

    Number object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. If the argument cannot be converted into a number, it returns NaN. In a non-constructor context, without the new operator, Number can be used to perform a type conversion.

5. What are the defaults for all of the types?
    Boolean represents a logical entity and can have two values: true, and false but defaults to false.
    Null's default value is null
    Undefined's default value is undefined
    Number's default value is 0
    String's default value is an empty string ""
    Symbol's default value is symbol, Symbol()
    Object's default value is an empty object, {}
    1. How can this help you write cleaner code?
    So you know how each will be treated and not get unexpected values.
6. Fluffy the Cat
    1.  Does anything below surprise you? Did you have to change anything to make these tests pass? If so, why?
            No it wasn't calling the right funciton. Yes I had to change Fluffy: to call the Cat function so it would call the right function.
7. Sets
    The Set object lets you store unique values of any type, whether primitive values or object references.
8. Weakmap
    The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.  The keys must be objects and the values can be arbitrary values.