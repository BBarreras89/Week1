// This function returns you a random number
// between the min value (inclusive) and the
// max value (inclusive)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let percentage = getRndInteger(0, 100);

// Here your code starts
// TODO: if the percentage >=50 --> console.log.....

if(percentage  >=90){
    console.log("You have passed!" + " Your mark is a 1.");
}

else if(percentage <=89 && percentage >=80){
    console.log("You have passed!" + " Your mark is a 2.");
}

else if(percentage <=79 && percentage >=65){
    console.log("You have passed!" + " Your mark is a 3.");
}

else if(percentage <=64 && percentage  >=50){
    console.log("You have passed!" + " Your mark is a 4.");
}

else if( percentage <=50) {
    ( console.log("You have failed your exam!" + " Your mark is 5"));
}

