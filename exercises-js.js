// ex1
var myName = "Sonja";
console.log("----------ex1----------");
console.log(myName);



// ex2
var age = 35;
console.log("----------ex2----------");
console.log(age);



//ex3
var juliaAge = 32;
var ageDiff = age - juliaAge;
console.log("----------ex3----------");
console.log(ageDiff);



//ex4
console.log("----------ex4----------");
if (age > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}



//ex5
console.log("----------ex5----------");
if (ageDiff < 0) {
    console.log("Julia is older than you");
}  else if (ageDiff > 0){
    console.log("Julia is younger than you");
} else if (ageDiff === 0) {
    console.log("You have the same age as Julia")
}



//ex6
var phoenixes = ["Mila", "Melissa", "Martha", "Sonja", "Sabir", "Alireza", "Phuoc", "Raul", "Lucas", "Emily", "Heron"];
phoenixes.sort();
//console.log(phoenixes);
console.log("----------ex6----------");
console.log(phoenixes[0]);
console.log(phoenixes.at(-1));
for (let i = 0; i < phoenixes.length; i++) {
    console.log(phoenixes[i]);
}



//ex7
const agePhoenixes = [34, 35, 26, 30, 23, 68, 28, 42];
console.log("----------ex7----------");
let count = 0;
while (count < agePhoenixes.length) {
    if (agePhoenixes[count] %2 === 0) {
        console.log(agePhoenixes[count]);
        }
    count++;
}

for (let i = 0; i < agePhoenixes.length; i++) {
    if (agePhoenixes[i] %2 === 0) {
        console.log(agePhoenixes[i]);
        }
}



//ex8
function lowestNumber(array) {
    let lowestNum = array[0];
    for (let num of array) {
        if (num < lowestNum) {
            lowestNum = num;
        }
    }
    console.log(lowestNum);
}
console.log("----------ex8----------");
lowestNumber(agePhoenixes);
//could also use Math.min() for that



//ex9
function highestNumber(array) {
    let highestNum = array[0];
    for (let num of array) {
        if (num > highestNum) {
            highestNum = num;
        }
    }
    console.log(highestNum);
}
console.log("----------ex9----------");
highestNumber(agePhoenixes);
//could also use Math.max() for that



//ex10
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 7;
var index2 = 2;

function valueAtIndex(array, index) {
    console.log(array[index]);
}
console.log("----------ex10----------");
valueAtIndex(array, index);
valueAtIndex(array, index2);



//ex11

//Write a function that receives an array and only prints the values that repeat.
//For example, given the following array, the function will print
//'6,23,33,100'.

console.log("----------ex11----------");

let newArray = [3, 6, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

function doubleValues(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++)
            if (newArray[i] === newArray[j]) {
                console.log(newArray[i]);
            }
    }
}
doubleValues(newArray);


//could also store all double values in a new array and log it to console:

function doubleValuesArr(array) {
    let doubleNumsArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (newArray[i] === newArray[j]) {
                doubleNumsArr.push(newArray[j]);
            }
    }
    console.log(doubleNumsArr);
}
doubleValuesArr(newArray);

//both work fine so far, but if the value is there more then twice, it will be printed/pushed to doubleNumsArr more than once,
//which is annoying, so let's try and prevent that

function doubleValuesArr2(array) {
    let doubleNumsArr2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (newArray[i] === newArray[j] && !doubleNumsArr2.includes(newArray[i])){
                        doubleNumsArr2.push(newArray[i]);
                    }
                 } 
    console.log(doubleNumsArr2);
}

console.log("This is the output of my new better function:")
doubleValuesArr2(newArray);



//ex12

//Write a simple JavaScript function to join all elements of the following array into a string.
//Expected Output: "Red", "Green", "White", "Black"
//Instructions are confusing, because this looks like 4 strings? Whatever, let's try different solutions.
//also not clear if the function should return a string or just output it to the console...

console.log("----------ex12----------");

myColor = ["Red", "Green", "White", "Black"];

function arrayToString(array) {
    let myString = "";
    for (let color of array) {
        myString += color;
    }
    console.log(myString);
}
arrayToString(myColor);

//could also use .toString() method:

function arrayToString2(array) {
    console.log(array.toString())
}
arrayToString2(myColor);

//to get the expected output incl. quotation marks, you would actually have to write the function like this:

function arrayToString3(array) {
    let myString3 = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            myString3 += '"'+array[i]+'"';
        } else {
            myString3 += '"'+array[i]+'", '
            }
    }
    console.log(myString3);
}

arrayToString3(myColor);

//could also use join()-method:
function arrayToString4(array) {
    console.log(array.join(', '))
}

arrayToString4(myColor);



//ex13

let x = 32443;
let y = 123456789;

console.log("----------ex13----------");

//reverse number => expected output: 34423;
//is x a string or a number? if it is a number, why is it in "JavaScript String" chapter???
//challenge: reverse it without turning it into a string first and using string methods on it, let's go :-)

function reverseNum(num) {
    let reversedNum = 0;
    while (num > 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

//this function accesses each digit as a remainder of a division by 10 (%10) starting with the last one
//after that the original number is divided by ten and rounded down to the next integer to access the next digit
//before adding the new digit to the reversed number it is muliplied by 10 so adding it will actually make it the next digit of the number

//solution with string/array methods
console.log(reverseNum(x));
console.log(reverseNum(y));

function reverseNumString(num) {
    num += '';
   return num.split('').reverse().join('')*1; //multiplying *1 turns it into a number
}



console.log(reverseNumString(x));
console.log(reverseNumString(y));

//numbers with a 0 as last digit will not have a 0 as first digit, when reversed (keeping the 0 there only works if it's a string, not a number)



//ex14
//write a function that returns a string in alphabetical order

console.log("----------ex14----------");

let testString = "webmaster";

function sortString(string) {
    //turn string into array by putting all characters in a new array
    let helperArray = [];
    for (let char of string) {
        helperArray.push(char);
    }
    //sort the array alphabetically using sort() method;
    helperArray.sort();

    //turn array back into string
    let alphabeticalString = "";
    for (let element of helperArray) {
        alphabeticalString += element;
    }
    return (alphabeticalString);
        
}

console.log(sortString(testString));


//quick solution using built-in string & array methods:
function sortStringQuick(string) {
    return string.split('').sort().join('');
}
//split(''): turns string into array with each character as element of array
//sort(): sorts array alohabetically
//join(''): turns array back into string

console.log(sortStringQuick(testString));



//ex15
console.log("----------ex15----------");
let prince = "prince of persia";
let queen = "queen of fucking everything";

function firstLetterUppercase(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (i === 0 || string[i - 1] === " ") {
            newString += string[i].toUpperCase();
        } else newString += string[i];
    }
    return newString;
}

console.log(firstLetterUppercase(prince));
console.log(firstLetterUppercase(queen));



//ex16
console.log("----------ex16----------");
let example = "Web Development Tutorial"
let someString = "HTMl CSS Javascript Python and more"

function findLongestWord(string) {
    let wordArray = string.split(" ");
    let longestWord = "";
    for (let word of wordArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord(example));
console.log(findLongestWord(someString));



//EXTRA: FUNCTION EXERCISES


//ex19
console.log("----------ex19----------");

function multiplyTwoNums() {
    console.log(a * b);
}

let a = 5;
let b = 7;

multiplyTwoNums();



//ex20  
console.log("----------ex20----------");

function multiplyTwoNumsAndReturnResult() {
    return a * b;
}
let multResult = multiplyTwoNumsAndReturnResult();
console.log(multResult);



//ex21
console.log("----------ex21----------");

function multiplyXandY(x, y) {
    return x * y;
}

console.log(multiplyXandY(a, b));
console.log(multiplyXandY(10, 7));
console.log(multiplyXandY(3, 4));



//ex22
console.log("----------ex22----------");

//types of triangles by side: 1) equilateral => all sides equal, 2) isosceles => 2 equal sides, 3) scalene => no equal sides
//types of triangles by angle: 1) acute (all angles < 90°) => if the sum of the squares of the two shorter sides is greater than the square of the longest side,  2) obtuse (one angle > 90°)=> if sum of squares of shorter sides is smaller than square of longest side, 3) right triangle if a2+b2=c2

function triangleTypeBySide(a, b, c) {
    if (a === b && a === c) {
        return "equilateral triangle";
    } else if (a === b || a === c || b === c) {
        return "isosceles triangle";
    } else {
        return "scalene triangle";
    }
}

console.log(triangleTypeBySide(3, 5, 5));
console.log(triangleTypeBySide(3, 3, 3));
console.log(triangleTypeBySide(4, 5, 6));

function triangleTypeByAngle(a, b, c) {
    let longestSide = 0;
    let shortSide1 = 0;
    let shortSide2 = 0;
    if (a > b && a > c) {
        longestSide = a;
        shortSide1 = b;
        shortSide2 = c;
    } else if (b > a && b > c) {
        longestSide = b;
        shortSide1 = a;
        shortSide2 = c;
    } else {
        longestSide = c;
        shortSide1 = a;
        shortSide2 = b;
    }
    if (shortSide1 ** 2 + shortSide2 ** 2 === longestSide ** 2) {
        return "right triangle";
    } else if (shortSide1 ** 2 + shortSide2 ** 2 > longestSide ** 2) {
        return "acute triangle";
    } else {
        return "obtuse triangle";
    }
}

console.log(triangleTypeByAngle(4, 5, 3));



//ex23
console.log("----------ex23----------");

const testArray = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

function replaceAby1(array) {
    let newArray = [];
    for (const char of array) {
        if (char === "a") {         //also uppercase A? instructions didn't say exactly but could be added
            newArray.push("1");
        } else {
            newArray.push(char);
        }
    }
    return newArray;
}

console.log(replaceAby1(testArray));



//ex24
console.log("----------ex24----------");
const someArray = [5, 7, 2, 4, 3, 4];

function sumOfArray(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}

console.log(sumOfArray(someArray));

function smallestNumInArray(array) {
    let smallest = array[0];
    for (const num of array) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

console.log(smallestNumInArray(someArray));
//could use Math.min() as well



//ex 25
console.log("----------ex25----------");
myTestArray = [1, 2, 8, 3, 2];

function addEvenNums(array) {
    let sum = 0;
    for (const num of array) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(addEvenNums(myTestArray));



//ex26
console.log("----------ex26----------");
nextTestArray = [1, 2, 8, 3, 2, 3, 4];

function addEvenPositions(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i !== 0 && i % 2 === 0) {           //i%2=0, but 0 is not considered an even position, therefore we have to exclude i === 0.
            sum += array[i];
        }
    }
    return sum;
}

console.log(addEvenPositions(nextTestArray));



//ex27
console.log("----------ex27----------");
function allEvenNumsBefore(num) {
    let count = 1;
    while (count < num) {
        if (count%2 === 0) {
            console.log(count);
        }
        count++;
    }
}
//didn't say the function should return anything, so it doesn't, it just prints

allEvenNumsBefore(9);



//ex28
console.log("----------ex28----------");
function oddNumsBetween(num1, num2) {
    let count = num1;
    let biggerNum = num2;
    if (num2 < num1) {
        count = num2;
        biggerNum = num1;
    }
    while (count <= biggerNum) {
        if (count % 2 !== 0) {
            console.log(count)
        }
        count++;
    }
}
console.log("odd nums")
oddNumsBetween(1, 13);
oddNumsBetween(24, 7);
oddNumsBetween(2, 8);


//ex17

/*Now let's add content to an HTML document instead of writing to the console. Write a function called myBandList() that will list your favorite bands. 
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.

Your function should use the JavaScript DOM to create li elements and add them to the unordered list, with each li element being a string in an array.

For example, if I call:

myBandList(['Dire Straits', 'Kansas', 'Steely Dan']);

The function will add three list items to the unordered list.*/


console.log("----------ex17----------");

const myBandListArray = ['Dire Straits', 'Kansas', 'Steely Dan'];

const bandList = document.getElementById("band-list");

function myBandList(array) {
    for (let i = 0; i < array.length; i++) {
        let newBand = document.createElement('li');
        newBand.innerHTML = array[i];
        bandList.appendChild(newBand);
    }
}

myBandList(myBandListArray);



//ex 18
/*Write a function called addMultTable(rows, cols) that will create a multiplication table like this.
Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.

For example, if I call: addMultTable(4, 8);
It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading.*/

function addMultTable(rows, cols) {
    let newTable = document.createElement('table');
    document.body.appendChild(newTable);
    for (let i = 1; i <= rows; i++) {
        let newRow = document.createElement('tr');
        newTable.appendChild(newRow);
        for (let j = 1; j <= cols; j++) {
            let newCol = document.createElement('td');
            newCol.innerText = j*i;                       //writes numbers 1-8 in each row (for each col) just to check if everything worked out as expected
            newCol.style.outline = '1px solid red';     //makes table cells visible (also just to check if it worked...)
            newRow.appendChild(newCol);
        }    
    }
}

addMultTable(4, 8);

//console.log(document);