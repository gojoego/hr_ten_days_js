/*

Variables named firstInteger, firstDecimal, and firstString are declared 
for you in the editor below. You must use the + operator to perform the 
following sequence of operations:

1. Convert secondInteger to an integer (Number type), 
    then sum it with firstInteger and print the result 
    on a new line using console.log.
2. Convert secondInteger to a floating-point number (Number type), 
    then sum it with firstInteger and print the result on a new line 
    using console.log.
3. Print the concatenation of firstString and secondString on a new 
    line using console.log. Note that firstString must be printed first.

Input Format

Data Type	Parameter	    Description
string		secondInteger   The string representation of an integer 
                            you must sum with firstInteger.
string		secondDecimal   The string representation of a floating-point 
                            number you must sum with firstDecimal.
string		secondString    A string of one or more space-separated words 
                            you must append to secondString.

Output Format

Print the following three lines of output:
1. On the first line, print the sum of firstInteger and the 
    integer representation of secondInteger.
2. On the second line, print the sum of firstDecimal and the 
    floating-point representation of secondDecimal.
3. On the third line, print firstString concatenated with 
    secondString. You must print firstString before secondString.                            

Sample Input 0:     12
                    4.32
                    is the best place to learn and practice coding!

Sample Output 0:    16
                    8.32
                    HackerRank is the best place to learn and practice coding!                    

Explanation 0:  

When we sum the integers 4 and 12, we get the integer 16.
When we sum the floating-point numbers 4.0 and 4.32, we get 8.32. 
When we concatenate HackerRank with is the best place to learn 
and practice coding!, we get HackerRank is the best place to 
learn and practice coding!.

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

The variables 'firstInteger', 'firstDecimal', and 'firstString' are 
declared for you -- do not modify them.

Print three lines:

    1. The sum of 'firstInteger' and the Number representation of 
    'secondInteger'.
    2. The sum of 'firstDecimal' and the Number representation of 
    'secondDecimal'.
    3. The concatenation of 'firstString' and 'secondString' 
    ('firstString' must be first).

	Parameter(s):
    secondInteger - The string representation of an integer.
    secondDecimal - The string representation of a floating-point number.
    secondString - A string consisting of one or more space-separated words.

**/

function performOperation(secondInteger, secondDecimal, secondString){
    // Declare a variable named 'firstInteger' and initialize with integer 
    // value 4.
    const firstInteger = 4; 

    // Declare a variable named 'firstDecimal' and initialize with 
    // floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the 
    // string "HackerRank".   
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 
    //'firstInteger' and 'secondInteger' (converted to a Number        type)
    // on a new line.
    var x = +firstInteger;
    var y = +secondInteger;
    var sumInt = x + y;
    console.log(sumInt);

    // Write code that uses console.log to print the sum of 
    // 'firstDecimal' and 'secondDecimal' (converted to a 
    // Number            type) on a new line.

    var a = +firstDecimal
    var b = +secondDecimal
    var sumDec = a + b;
    console.log(sumDec);

    // Write code that uses console.log to print the concatenation of 
    // 'firstString' and 'secondString' on a new line. The        variable 
    // 'firstString' must be printed first.
    console.log(firstString + secondString);
}

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();

    performOperation(secondInteger, secondDecimal, secondString);
}

/*

7 data types in JS
    primitive:
        -number
        -string
        -boolean
        -symbol
        -null
        -undefined
    object

number data type
-no specific type for integers
-maximum value for number
    MAX_VALUE = 1.7 x 10^308
    larger values represented as infinity
-minimum value for number
    MIN_VALUE = 5 x 10^-324
    smallest + value of Number type closes to 0
    not most negative number
    values smaller than that converted to 0
-symbolic numbers
    3 symbolic number values 
    -"infinity": any number divided by zero or attempt to multiply
    Number.MAX_VALUE by an integer > 1
    -"-infinity": any number divided by -0 or attempt to multiply 
    Number.MAX_VALUE by an integer < -1
    -"NaN": stands for "Not-a-Number" and denotes unrepresentable value 
-isSafeInteger method
    -safe integer can be represented as IEEE-754 double precision number 
    and cannot be result of rounding any other integer to fit IEEE-754
    representation
    -Number.isSafeInteger() method determines whether provided value is a
    "safe integer"

string
-string value is a chain of zero or more Unicode characters (i.e., letters, digits, 
    and punctuation marks) that we use to represent text
-include string literals in our scripts by enclosing them in single (') or double (") 
    quotation marks
-double quotation marks can be contained in strings surrounded by single quotation marks 
    (e.g., '"' evaluates to ")
-single quotation marks can be contained in strings surrounded by double quotation marks 
    (e.g., "'" evaluates to ')
-JavaScript does not have a type to represent a single character
-to represent a single character in JavaScript, you create a string that consists of only 
    one character
-a string that contains zero characters ("") is an empty (zero-length) string
-JavaScript strings are immutable
-once a string is created, it is not possible to modify it
-However, it is still possible to create another string based on an operation on the 
    original string.
    -substring of the original by picking individual letters or using String.substr()
    -concatenation of two strings using the concatenation operator (+) or String.concat()

boolean data type 
-boolean represents a logical entity and can have one of two literal values: true, and false.

symbol data type
-symbols are new to JavaScript in ECMAScript Edition 6
-unique and immutable primitive value and may be used as the key of an Object property.

null data type
-null data type is an internal type that has only one value: null
-primitive value that represents the absence of any object value
-variable that contains null contains no valid number, string, 
    boolean, array, or object
-can erase the contents of a variable (without deleting the variable) 
    by assigning it the null value

undefined data type
-undefined value is returned when you use an object property that does not exist
-or a variable that has been declared, but has never had a value assigned to it

typeof operator
-use the typeof operator to determine the type associated with a variable's current value

VARIABLES

dynamic typing
-JavaScript is a loosely typed or dynamic language
-don't need to declare a variable's type ahead of time
-language autmatically determines a variable's type while 
    the program is being processed
-also means that you can reassign a single variable to 
    reference different types

naming
-JS is case-sensitive 
-variable names can be of any length 
-rule for creating legal variable names:
    1. first character must be either an ASCII letter 
    (uppercase or lowercase) or an underscore (_) 
    NOTE: number cannot be used as the first character
-variable name must not be a reserved word 

reserved words
-break
-case
-catch
-class
-const
-continue
-debugger
-default
-delete
-do
-else
-export
-extends
-finally
-for
-function 
-if
-import
-in
-instanceof
-new
-return
-super
-switch
-this
-throw
-try
-typeof
-var
-void
-while
-with 
-yield

declaration and initialization 
-first time a variable appears in your script is considered its declaration
-first mention of the variable sets it up in memory
-name allows you to refer back to it in your subsequent lines of code
-should declare variables using the var keyword before using them
-if you do not initialize a variable that was declared using the var 
    keyword, it automatically takes on the value undefined

coercion
-in JavaScript, you can perform operations on values of different 
types without raising an exception
-JavaScript interpreter implicitly converts, or coerces, one of the 
    data types to that of the other, then performs the operation
-rules for coercion of string, number, or boolean values are as follows:

* If you add a number and a string, the number is coerced to a string.
* If you add a boolean and a string, the boolean is coerced to a string.
* If you add a number and a boolean, the boolean is coerced to a number.

*/