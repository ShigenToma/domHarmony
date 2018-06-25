/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
matCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
msgCount.innerHTML = 23

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
fullname.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
age.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

    var node = document.createElement("div");
    var textnode = document.createTextNode("Clown and Restauranteur");
    node.id = 'job';
    node.appendChild(textnode);
    document.getElementById("data").appendChild(node);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var node = document.createElement("div");
var textnode = document.createTextNode("Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.");
node.id = 'hobbies';
node.appendChild(textnode);
document.getElementById("data").appendChild(node);



//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var node = document.createElement("div");
var textnode = document.createTextNode("Honolulu, Hi");
node.id = 'location';
node.appendChild(textnode);
document.getElementById("data").appendChild(node);


//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var node = document.createElement("div");
var textnode = document.createTextNode("Looking for a Mrs McDonald.");
node.id = 'wants';
node.appendChild(textnode);
document.getElementById("data").appendChild(node);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var node = document.createElement("div");
var textnode = document.createTextNode("I like nuggets and Shakes. I really like Hot Fudge Sundaes");
node.id = 'pro2';
node.appendChild(textnode);
document.getElementById("profile").appendChild(node);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var nameElem = document.getElementsByClassName('firstName');
nameElem[0].innerHTML = 'Wendy';
//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var ageElem = document.getElementsByClassName('otherAge');
ageElem[0].innerHTML = 48;
//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusElem = document.getElementsByClassName('status');
statusElem[0].innerHTML = 'Single Mother';
//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var nameElem = document.getElementsByClassName('firstName');
nameElem[1].innerHTML = 'Peko Chan';
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var ageElem = document.getElementsByClassName('otherAge');
ageElem[1].innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 
 //div with class name of firstName
 var nameElem = document.getElementsByClassName('firstName');
nameElem[2].innerHTML = 'Shigen';
 //div with class name of otherAge
 var ageElem = document.getElementsByClassName('otherAge');
ageElem[2].innerHTML = 44;
 //div with class name of status
 var statusElem = document.getElementsByClassName('status');
statusElem[2].innerHTML = 'Married';
 //div with class anem of Motto
 var mottoElem = document.getElementsByClassName('motto');
 statusElem[2].innerHTML = 'Y.O.L.O';



