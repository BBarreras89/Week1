let cars = [
        {
            Brand: "BMW",
            price: 70000,
            horsePower: 200,
            color: "white",
            yearOfConstruction: 2020,
        },
        {
            Brand: "Mazda",
            price: 45000,
            horsePower: 220,
            color: "silver",
            yearOfConstruction: 2021,
        },
        {
            Brand: "Volvo",
            price: 55000,
            horsePower: 190,
            color: "beige",
            yearOfConstruction: 2021,
        },
        {
            Brand: "Opel",
            price: 38000,
            horsePower: 155,
            color: "black",
            yearOfConstruction: 2021,
        },
        {
            Brand: "Mazda",
            price: 22000,
            horsePower: 90,
            color: "magenta",
            yearOfConstruction: 2021,
        },
        {
            Brand: "Fiat",
            price: 19000,
            horsePower: 110,
            color: "blue",
            yearOfConstruction: 2019,
        },
    ];



    let filter1 = cars.filter(cars => cars.price < 60000); console.log(filter1);

    let filter2 = cars.filter(cars => cars.horsePower > 150); console.log(filter2)
    
    let filter3 = cars.filter(cars => cars.yearOfConstruction > 20 && cars.horsePower < 100); console.log(filter3);
    
    let filter4 = cars.filter(cars => cars.Brand === "Fiat" || cars.horsePower < 150); console.log(filter4)