# Assignment: Strings and Regular expressions

## Requirements

1. Assign the greeting message to `'Hello World'`.
2. Create and export a variable `export const characterAt = ???` that retrieves the 4th charater in the greeting variable.
3. Create and export a variable `export const greetingArray = ???` that converts the hello world to an array ([ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ])
4. Create and export a variable `begins(str, char)` tthat creates a function that the string begins with a char 
  ```
  export const begins = (str, char) => { 
    return ???
  };
  ```
5.  Create and export a variable `beginsInsensitive(str, char)` that creates a function that determines that the string begins with a char 
   ```
   export const beginsInsensitive = (str, char) => { 
     return ???
   };
   ```

## Discussion

1. What is a string's data type really? (Discussed in class)
      A string's data is really null until you define it and every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected.
      
2. What are some functions that overlap with other types?
   What are some methods that are found on the String that are also found on Numbers, or Functions, or Array, or Object.
      Methods found on the string are:
       toString() returns a string representing the array and its elements.
       charAt() returns the character at the specified index.
       charCodeAt() returns a number indicating the Unicode value of the character at the given index.
       split() splits a String object into an array of strings by separating the string into substrings.
       toLocaleLowerCase() the characters within a string are converted to lower case while respecting the current locale.

3. What is RegEx used for?
    It is used to create patterns that help match, locate, and manage text, such as parsing through a string finding a match and returning the match or replacing it.
