//let muuttuja = {}


let person = {
        fname: "Reima",
        lname: "Riihimäki",
        age: 22
}

console.log(person.lname);

person.age = 23;

let persons = [];

persons.push(person);



for (p of persons) {
    console.log(p.age);
}



let car = {
        platenumber: "OOP-001",
        speed: 120
}

console.log(car.platenumber);
console.log(car.speed);

let car2 = {
    platenumber: "AKU-313",
    speed: 65

}


console.log(car2.platenumber);
console.log(car2.speed);

car2.speed = 200;

console.log(car2.speed);
