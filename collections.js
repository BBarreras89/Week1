function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// TODO: Fill in some colors
let colors = ["blue", "green", "yellow", "purple"]; // you might add more elements if you want

// TODO: Fill in some fruits
let fruits = ["apple", "orange", "strawberry", "mango"]; // you might add more elements if you want

//Look here we create a nice fruit
let randomColor = getRndInteger(0, colors.length-1); // see how we can get the length of a collections
let randomFruit = getRndInteger(0, fruits.length-1);

console.log("Today I would like to eat a " + colors[randomColor] + " " + fruits[randomFruit]);

// TODO: Log the length of the colors and fruits collection -> done

// TODO: Log all elements of each collection -> done

// TODO: create all combinations (cartesian product) - nested for loops

console.log(colors.length);
console.log(fruits.length);
console.log(colors);
console.log(fruits);

for(i=0; i<colors.length; i++){
    for(j=0; j<fruits.length; j++){
        console.log(`${fruits[j]} ${colors[i]}`);
    }
}






