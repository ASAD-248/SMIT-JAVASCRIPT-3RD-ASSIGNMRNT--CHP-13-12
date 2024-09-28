//                      Q no:01;

var userinput = prompt("Enter any word for asci number");

if(userinput === "A"){
    alert("65");
}else  if(userinput === "a"){
    alert("97");
}else  if(userinput === "B"){
    alert("66");
}else  if(userinput === "b"){
    alert("98");
}else  if(userinput === "C"){
    alert("67");
}else  if(userinput === "c"){
    alert("99");
}else  if(userinput === "D"){
    alert("68");
}else  if(userinput === "d"){
    alert("100");
}else  if(userinput === "E"){
    alert("69");
}else  if(userinput === "e"){
    alert("101");
}else  if(userinput === "F"){
    alert("70");
}else  if(userinput === "f"){
    alert("102");
}else  if(userinput === "G"){
    alert("71");
}else  if(userinput === "g"){
    alert("103");
}else  if(userinput === "H"){
    alert("72");
}else  if(userinput === "h"){
    alert("104");
}else  if(userinput === "I"){
    alert("73");
}else  if(userinput === "i"){
    alert("105");
}else  if(userinput === "J"){
    alert("74");
}else  if(userinput === "j"){
    alert("106");
}else  if(userinput === "K"){
    alert("75");
}else  if(userinput === "k"){
    alert("107");
}else  if(userinput === "L"){
    alert("76");
}else  if(userinput === "l"){
    alert("108");
}else  if(userinput === "M"){
    alert("77");
}else  if(userinput === "m"){
    alert("109");
}else  if(userinput === "N"){
    alert("78");
}else  if(userinput === "n"){
    alert("110");
}else  if(userinput === "O"){
    alert("79");
}else  if(userinput === "o"){
    alert("111");
}else  if(userinput === "P"){
    alert("80");
}else  if(userinput === "p"){
    alert("112");
}else  if(userinput === "Q"){
    alert("81");
}else  if(userinput === "q"){
    alert("113");
}else  if(userinput === "R"){
    alert("82");
}else  if(userinput === "r"){
    alert("114");
}else  if(userinput === "S"){
    alert("83");
}else  if(userinput === "s"){
    alert("115");
}else  if(userinput === "T"){
    alert("84");
}else  if(userinput === "t"){
    alert("116");
}else  if(userinput === "U"){
    alert("85");
}else  if(userinput === "u"){
    alert("117");
}else  if(userinput === "V"){
    alert("86");
}else  if(userinput === "v"){
    alert("118");
}else  if(userinput === "W"){
    alert("87");
}else  if(userinput === "w"){
    alert("119");
}else  if(userinput === "X"){
    alert("88");
}else  if(userinput === "x"){
    alert("120");
}else  if(userinput === "Y"){
    alert("89");
}else  if(userinput === "y"){
    alert("121");
}else  if(userinput === "Z"){
    alert("90");
}else  if(userinput === "z"){
    alert("122");
}else("thank you")


//                      Q no:02;

var usnum1 = +prompt("Enter anyone number first number");
var usnum2 = +prompt("Enter any one number second number");

if (usnum1 > usnum2){
    alert("Number 1 is greater than number 2");
}else if(usnum2 > usnum1){
    alert("Number 2 is greater than number 1");   
}else if(usnum1 === usnum2){
    alert("numbers are equal") 
}else("Try again latter")

//                      Q no:03;

var usernumer = +prompt("Enter any number positive or nagative");
if(usernumer > 0){
    alert(usernumer + " is positive")
}else if(usernumer < 0 ){
    alert(usernumer + " is nagative")
}else(alert(usernumer + " is zero"))

//                      Q no:04;


var user_chracther = prompt("Enter any characther ");
if (user_chracther === "a" || user_chracther === "e" || user_chracther === "i" || user_chracther === "o" || user_chracther === "u"){
    alert("True")
}else(alert("false"));

//                      Q no:05;

var usinput = prompt("Please enter your password")
var password = "asad@Email.com";
if(usinput === password){
   alert("“Correct! The password you entered matches the original password”");
}else(alert("Incorrect password"));

//                      Q no:06;

var greeting ;
var hour = 13;
if (hour < 18){
    alert(greeting="Good Day");
}else( greeting="Good Evening");
alert(greeting);

//                      Q no:07;

var hour = +prompt("Enter a time");
if (hour >= 0 && hour < 12) {
    alert("Good Morning!");
} else if (hour >= 12 && hour < 17) {
    alert("Good Afternoon!");
} else if (hour >= 17 && hour < 21) {
    alert("Good Evening!");
} else if (hour >= 21 && hour <= 24) {
    alert("Good Night!");
} else {
    alert("Invalid hour. Please enter a time between 0 and 24.");
}
