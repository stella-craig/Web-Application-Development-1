/* Javascript Notes:
var x = 0;
let y = 2;
let x2 = "john"; //can use either single quotes or double quotes for strings
let y2 = 'bill';
const z = 1; //cannot change after assignment
//reassign differently
var x = 7;
y = 8;
const x3 = 7;
const y3 = 6;
var z = x+y; //z now equals 13
*/

//Scope notes:
// var x = 7;
// function myFunction(){
//     //inside the curly brackets is a block
//     let x = 12; //only exists inside this function
//     const p = 5; //cannot access outside the function
// }
// function mySecondFunction(){
//     var x = 12; //this x can be used outside of this block
// }


var x; //is 0 by default

function myFunction(){
    document.getElementById("con").innerHTML = "This is my next text";
}

function myBoolTrue(){
    x = 1;
    document.getElementById("myBool").innerHTML = Boolean(x);
}

function myBoolFalse(){
    x = 0;
    document.getElementById("myBool").innerHTML = Boolean(x);
}

document.getElementById("myBool").innerHTML = Boolean(x);

function myAddFunction(/*parameters time!*/ a, b, c){

    if(a>2){
        return(c*b/a);
    } else {
        return(a*b/c);
    }

    //return(a*b/c);
}

var y = myAddFunction(2, 8, 2);
document.getElementById("myAdd").innerHTML = y;