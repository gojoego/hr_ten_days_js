/*

Task

A greeting function is provided for you in the editor below. 
It has one parameter, parameterVariable. Perform the following 
tasks to complete this challenge:

1. Use console.log() to print Hello, World! on a new line in the 
console, which is also known as stdout or standard output. The code 
for this portion of the task is already provided in the editor.

2. Use console.log() to print the contents of parameterVariable
(i.e., the argument passed to main).

Data Type	Parameter	        Description
string		parameterVariable   A single line of text containing one 
                                or more space-separated words.

Output Format

Print the following two lines of output:

1. On the first line, print Hello, World! 
(this is provided for you in the editor).
2. On the second line, print the contents of parameterVariable.
                            
Sample Input 0:     Welcome to 10 Days of JavaScript!

Sample Output 0     Hello, World!
                    Welcome to 10 Days of JavaScript!

Explanation 0

We printed two lines of output:

1. We printed the literal string Hello, World! 
    using the code provided in the editor.

2. The value of parameterVariable passed to our main function 
    in this Sample Case was Welcome to 10 Days of JavaScript!. We 
    then passed our variable to console.log, which printed the 
    contents of parameterVariable.

*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/


function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout 
    //using console.log:
    console.log(parameterVariable)

}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}

/*

lexical structure of javascript
-set of elementary rules that tells you how to write programs in js 
-lowest-level syntax that specifies things like variable names, delimiters for comments 
    and how one program statement is separate from the next 

character set
-js programs written using Unicode character set
    -Unicode superset of ASCII and Latin-1
-js case-sensitive language 
-js ignores spaces that appear between tokens in program
    -for the most part, also ignores line breaks 

comments
    inline:
    -any text between // and end of line ignored by JS and treated as a comment
    block:
    -any text between slash/star and star/slash will be treated as a comment

literals
-data value that appears directly in a program
    integer: 12
    floating-point number: 1.2 
    string of text: "Hello, World."
    boolean: true/false
    absence of object: null
-more complex expressions can serve as array and object literals 
    object initializer {x:1, y:2}

identifiers
-name that you can specify and use as means of referring back to specific value 
or other piece of code 
-used to name variables and functions, and provide labels for certain loops
-must begin with letter, underscore or $
-subsequent characters can be letters, underscores, dollar signs, digits
-JS does not allow digits as first character 

reserved words/keywords
-part of set of predefined words with special meaning in language 
-cannot use as identifiers
-example: for and function
-there are also predefined global variables and functions 
-important to avoid using predefined names for your own variables and functions

optional semicolon
-used to separate statemets from each other
-makes meaning of code clear
-can be omitted between two statements if on different lines 

*/
