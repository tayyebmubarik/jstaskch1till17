/*Chapter 1*/
/*Question 1*/
alert("Tayyeb");
alert("Mubarik");
alert("tayyeb747@hotmail.com");
alert("0331-4438300");
alert("secretpassword123");
/*Question 2*/
alert("You're learning Javascript!");
/*Question 3*/
alert("Hi everyone, have a good day.");

/*Chapter 2*/
/*Question 1*/
var ruleCheck=0;
/*Question 2*/
var greetingCard;
greetingCard="Hello";
/*Question 3*/
var teamName="Tayyeb Mubarik";
alert(teamName);
/*Question 4*/
var bestMan="Charlie";
bestMan="John";
alert(bestMan);

/*Chapter 3*/
/*Question 1*/
var caseQty;
/*Question 2*/
caseQty=144;
/*Question 3*/
var num=9;
/*Question 4*/
var total;
total=num+caseQty;
/*Question 5*/
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert("The value of orderTotal is "+orderTotal); // Answer is 110
/*Question 6*/
var remaining=60;
remaining=remaining+num;
alert("The answer is "+remaining); // Answer is 69

/*Chapter 4*/
/*Question 1*/
var productCost=3.45;
/*Question 2*/
var nameOfBand;
/*Question 3*/
var returnAmount=250;
/*Question 4*/
var tayyebMubarik;
/*Question 5*/
// Legal variables: myNum, remainAmount, testNum etc..
// Illegal variables: alert, var, test product etc..

/*Chapter 5*/
/*Question 1*/
// The operator is modulus and symbol is %
/*Question 2*/
var num2=20 % 6;
alert(num2); // Answer is 2
/*Question 3*/
var largeNum=1000*2000; // Answer is 2000000
/*Question 4*/
var smallNum=returnAmount-remaining; // Answer is 190
/*Question 5*/
var changeToGive=caseQty % shippingCharge // Answer is 4
/*Question 6*/
var mulResult=num*num2;
alert("Answer is: " + mulResult) // Answer is 9*2=18

/*Chapter 6*/
/*Question 1*/
var x=0;
x++;
alert("X is now "+x); // Answer is 1
/*Question 2*/
x=100;
--x;
alert("X is now "+x); // Answer is 99
/*Question 3*/
x=50;
var y = x++;
alert("Y is now "+y); // Answer is 50
/*Question 4*/
y = 50;
var z = --y;
alert("Z is now "+z); // Answer is 
/*Question 5*/
var newNum = --num; // Answer is 8;
/*Question 6*/
var c=1
var newC=++c; // Answer is 2
/*Question 7*/
var b=5;
++b;
alert("B value is now: "+b); // Answer is 6

/*Chapter 7*/
/*Question 1*/
var calculatedNum = 2 + (2 * 6); // Answer is 14
alert("Q1 answer = "+calculatedNum);
/*Question 2*/
calculatedNum = (2 + 2) * 6;
alert("Q2 answer = "+calculatedNum); // Answer is 24
/*Question 3*/
calculatedNum = (2 + 2) * (4 + 2);
alert("Q3 answer = "+calculatedNum); // Answer is 24
/*Question 4*/
calculatedNum = ((2 + 2) * 4) + 2;
alert("Q4 answer = "+calculatedNum); // Answer is 18
/*Question 5*/
var cost = (2 + 2) *(4 + 10);
alert("Cost = "+cost); // Answer is 56
/*Question 6*/
var units = 2 + (2 *4) + 10;
alert("Units = "+units); // Answer is 20
/*Question 7*/
var pressure =  4 / (2 * 4);
alert("Pressure = "+pressure); // Answer is 0.5 (5 could not be possible but 0.5 is possible)

/*Chapter 8*/
/*Question 1*/
num = "2" + "2"; // Answer is 22
alert("Q1 answer= "+num);
/*Question 2*/
message = ("Hello," + "Dolly")
alert(message); // Answer is Hello,Dolly
/*Question 3*/
alert("33" + 3); // Answer is 333
/*Question 4*/
alert("Pakistan "+"Zindabad");
/*Question 5*/
var strResult="Hello" + 123;
alert(strResult);
/*Question 6*/
var str1="Welcome ";
var str2="Javascript";
var str3=str1+str2;
alert(str3);

/*Chapter 9*/
/*Question 1*/
var firstName=prompt("Enter first name");
alert(firstName);
/*Question 2*/
var defaultAnswer = "China";
var countryAnswer = prompt("Country?", defaultAnswer);
alert(countryAnswer);
/*Question 3*/
var yourName = prompt("Enter Your Name");
/*Question 4*/
defaultAnswer="Enter a string prompt or write something";
var stringStore = prompt(defaultAnswer);
alert(stringStore);
/*Question 5*/
string1="Enter something:";
string2="Like: Hello, how are you?"
string3=prompt(string1,string2);
alert(string3);
/*Question 6*/
string4=prompt("How to greet someone?","Hi, Hello etc.")
alert(string4);

/*Chapter 10*/
/*Question 1*/
var city = "Karachi";
if (city = "Karachi"); {
    console.log("The City OF Lights"); //Answer: The City of Lights
}
/*Question 2*/
x=2;
y=2;
if (x === y) {
z=prompt("Enter a value; ")
}
/*Question 3*/
var ZipCode="10110";
if (ZipCode==="10010") {
    alert("Karachi");
}
else {
    alert("Please write correct city");
}
/*Question 4*/
var testNum=16;
if (testNum===15) {
    alert("Correct value");
}
else {
    testnum=15;
    alert("Value corrected");
}

/*Chapter 11*/
/*Question 1*/
// if (16 != 15)
/*Question 2*/
// if (num>=num2)
/*Question 3*/
if (num!=10) {
    alert("Unequal");
    num=15;
}
else {
   alert("No change");
}
/*Question 4*/
if(num !=10) {
    alert("Congratulations");
}
/*Question 5*/
var firstNameGet=prompt("Enter your first name: ");
if (firstNameGet != "Tayyeb") {
    alert("No match");
}

/*Chapter 12*/
/*Question 1*/
if (num>=num2) {
    alert("1st number is greater");
}
else {
    alert("2nd number is greater");
}
/*Question 2*/
var marks = prompt("Enter your marks: ");
var grade
if (marks > 89) {
    grade="A"
    alert("Your grade is "+grade);
}
else if (marks > 79 && marks < 90) {
    grade="B"
    alert("Your grade is "+grade);
}
else if (marks > 69 && marks < 80) {
    grade="C"
    alert("Your grade is "+grade);
}
else if (marks > 49 && marks < 70) {
    grade="D"
    alert("Your grade is "+grade);
}
else if (marks < 50) {
    grade="F"
    alert("Your grade is "+grade);
}
/*Question 3*/
var a=9;
if (a === 10) {
    alert("a is 10");
   }
else {
    alert("The correct value of a is "+ a)
}
/*Question 4*/
var cityName;
cityName=prompt("Enter your city: ");
if (cityName === "Karachi") {
    alert("It is Karachi");
}
else if (cityName === "Lahore") {
    alert("It is Lahore");
}
else {
    alert("It is neither Karachi nor Lahore");
}

/*Chapter 13*/
/*Question 1*/
// if (a===b && c===d)
/*Question 2*/
// if (a===b ) || (c!==d)
/*Question 3*/
// if(name==="Hamza" || name==="Arslan" && age<60)
/*Question 4*/
var testA=8
var testB=9
if ((testA>testB)  ||  (testA<testB)) {
    alert("One is greater than other");
}
/*Question 5*/
var fName="Tayyeb"
var lName="Mubarik"
var fNameInput=prompt("Enter first name: ");
var lNameInput=prompt("Enter last name: ");
if (fName === fNameInput && lName === lNameInput) {
    alert("Name matches");
}

/*Chapter 14*/
/*Question 1*/
var password=4;
if (password!==0) {
    if (password < 5)
        alert("Password must be greater than 5");
    else {
        alert("OK");
    }
}
/*Question 2*/
a=1;
c="Max"
if (a === 1) {
    if (c === "Max") {
     alert("OK");
     }
    }
/*Question 3*/
if (a === 1 && c === "Max") {
    alert("OK");
}
/*Question 4*/
var f=20;
var g=20;
if (f===g){
    if(f<=g) {
        alert("Numbers are same");
    }
}

/*Chapter 15*/
/*Question 1*/
var firstArray=[];
/*Question 2*/
var secondArray=["Hello"];
/*Question 3*/
var alphabet = ["h","i","j","k"]
alert(alphabet[2])
/*Question 4*/
var alphabet=["h","i","j","k","l","m", "n", "o"];
alert("Total length of array: "+alphabet.length)
/*Question 5*/
var numberArray=[1];
numberArray[1]=2;
alert(numberArray[1]);

/*Chapter 16*/
/*Question 1*/
var numberArr=[4];
numberArr.push(8);
alert(numberArr[1]);
/*Question 2*/
var Alphabet=["h","i","j","k"]
Alphabet.pop();
/*Question 3*/
Alphabet.push("o",5);

/*Chapter 16 Part 2*/
/*Question 1*/
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift();
/*Question 2*/
sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift("XXXS","XXS","XS");
/*Question 3*/
var numCh=["corn"];
numCh.unshift("fish");
alert(numCh[0]);
/*Question 4*/
sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0,"L");
/*Question 5*/
sizes = ["S", "M", "XL", "XXL", "XXXL"];
regSizes=sizes.slice(0,3);
/*Question 6*/
var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1,0,"lion","rhino");
pets.splice(3,3);
console.log(pets);
/*Question 7*/
pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
/*Question 8*/
pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var pets = pets.slice(3,5);

/*Chapter 17-20*/
/*Question 1*/
for (i=0; i<11; i++){
    if(i===10) {
        alert("Loop ran 10 times");
    }
}
/*Question 2*/
// for (i=0; i<=12; i++)
/*Question 3*/
// for (var i = 0; i <= 4; i++)
/*Question 4*/
// for(j=0: j<101; j++)
/*Question 5*/
// for(k=3: k>0; k--)
/*Question 6*/
// arrLength = arr.length;
/*Question 7*/
var flag=true;
/*Question 8*/
// for(x=3: x<=pets.length; x++)
/*Question 9*/
for (i=0; i<11; i++){
    if(i===1) {
        alert("It should be 1");
        break;
    }
}
/*Question 10*/
var userNames=[];
firstName=prompt("Enter first name: ");
for (i=0; i<=userNames.length; i++) {
    if (userNames===firstName) {
        alert("Enter");
    }
    else {
        alert("Please write correct user name");
    }
}
/*Question 11*/
/*
var matchFound = false;
for (var i = 0; i < list.length; i++) {
 if (userInput === list[i]) {
 alert("Match found");
 matchFound = true;
 break;
 }
}; // Modified code after this line
if(matchFound===false) {
    alert("Match Not Found");
}
*/
/*Question 12*/
var firstArr = ["a", "b", "c","d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (i=0;i<firstArr.length;i++) {
     for (j=0;j<secondArr.length;j++){
        console.log(firstArr[i]+secondArr[j]);
     };
};
