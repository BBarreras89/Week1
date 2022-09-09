    // variables are declared with "let" or "var"
    // btw. this is a comment - with comments I can explain my code to remember later, what the code does
    // TODO: change the variable values below and see how the logs to the console change
    lastname="Barreras"; // this is a variable of datatype string - there is no modifier (let, var, const) - bad style
    
    let firstname="Benito"; // with the let modifier we declare here a local variable (we almost always use this)
    let height=190; // in cm - this is a variable from datatype int
    
    var weight=70; // in kg - with modifier var this is a global variable (unless we know what we do we never want to use this)
    
    let age=33;
    let isFemale=false; // this is a variable of datatype boolean - it is true if you are female
    
    // variables that can't change the value, so they can not be changed later by coincidence
    // see how this variable is declared - only with big letters and words are seperated by "_"
    // when experience developers see this style they immediately understand, that the variable
    // represents a constant value
    const KG_TO_LBS = 2.20462262185; 
    
    // BTW. look how this variable is declared.
    // The so called camelCase is used, means
    // you start the variable name with small
    // case and for every new word in it you
    // start with big case
    let yourWeightInPounds = weight * KG_TO_LBS;
    
    //TODO: Change the console.log to use string literals
    console.log(`Hello ${firstname} ${lastname}`);
    console.log("I know some things about you!");
    console.log("You are " + age + " years old.");
    console.log("You are " + height + " cm tall.");
    console.log("Your weight is " + weight + " kg. This is equal to " + yourWeightInPounds + " pounds.");
    console.log("If you are female I would print out here true, else false: " + isFemale);
    
    console.log("Now I will tell you your hight in meters:");
    let heightInM = height/100;
    //TODO: Change the console.log to use string literals
    console.log("Now you are " + heightInM + " meters tall.");
    
    /*****************/
    // TODO:
    // Here are variables which have aweful names.
    // Could you rename them please and put some values there?
    let favBook="Ready Player One, but I like to read Comics and Sci Fi books.";
    let favMovie="The Fifth Element and John Wick";
    let eatenBurgers=4;
    
    //TODO: Change the console.log to use string literals
    console.log("My favorite book is " + favBook);
    console.log("My favorite movie is " + favMovie);
    console.log("Once I was so hungry that I ate " + eatenBurgers + " burgers.");
    
    // TODO: can you declare more variables and initialize them with values which describe you?
    // TODO: try also to log those new values like above

    let hobby1="basketball"
    let hobby2="playing games"
    let hobby3="comics"

    console.log("My hobbies are " + hobby1 + "," + "reading " + hobby3 + " and " + hobby2 + ".");
