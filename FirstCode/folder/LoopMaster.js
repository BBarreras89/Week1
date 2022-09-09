
/*// displaying every number 1-10
for(i=1; i<=10; i++){
    console.log(i);
}

//displaying every odd number 1-10
for(i=1; i<=10; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

//Sum of 1+2+3+4+5+6+7+8+9+10

// short version for loop
let sum1 = 0;

for ( i = 1; i <=10; i ++){
     sum1 += i;
}
console.log( `1+2+3+4+5+6+7+8+9+10 = ${sum1}`);


// sum 1*2*3*4*5*6*7*8*9*10

//short version for loop
let sum3 = 1;

for ( i = 1; i <=10; i ++){
     sum3 *= i;
}
console.log(`1*2*3*4*5*6*7*8*9*10 = ${sum3}`);

// 3x+1 Problem
let counter = 1111;

while(counter!==1){
    if( counter%2 === 0){
        counter = counter/2;
        console.log(counter);
    }
    else{
        counter = (counter*3) +1;
        console.log(counter);
    }
} 

/*let x = 1111;
while (x!==1){
    if (x%2==0){
        x=x/2;
        console.log(x);}
    else {x = 3*x+1;
        console.log(x)}
}*/
