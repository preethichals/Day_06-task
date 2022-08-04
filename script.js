class person {
    constructor(firstName, lastName, age, place){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.place = place;
    }
    getDetails(){
        return(`the name of the person is ${this.firstName} ${this.lastName} with age ${this.age} born at ${this.place})`);
    }
}
let person1 = new person("Guvi", "Geek", "10", "Chennai");
let person2 = new person("John", "Joseph", "24", "Bangalore");

console.log(person1.getDetails());

// To Calculate Uber Price ------------

class Uber {
    constructor(distance, rate, waitingPeriod){
       this.distance = distance;
       this.rate = rate;
       this.waitingPeriod = waitingPeriod;
    }
    getRideDetails(){
        return(`The Price for distance ${this.distance}Km is ${this.rate} with waiting period ${this.waitingPeriod}`);
    }
    getPrice(){
        var price = (this.rate * this.distance) + (this.waitingPeriod * 5);
        return (`The Total price is ${price}`);
    }
}
let Uber1 = new Uber(20, 15, 15);
let Uber2 = new Uber(10, 7, 12);

console.log(Uber2.getRideDetails());
console.log(Uber2.getPrice());

//Movie

class Movie{
    constructor(title, studio, rating)
    { this.title = title;
      this.studio = studio;
      this.rating = rating;
      } 
    if(rating=NULL)
    {
        console.log(rating ="PG");
    }
    getPG(){
        return (`The movie title ${title} rating ${rating}`);
            }
}
    var new1 = new Movie;
    
        console.log(new1("Casino Royal", "Eon Productions", "P13"));
     
     //Circle
     
    class Circle {
    const PI = 3.142;
     constructor(radius,color){
        this.radius=radius;
        this.color=color;
     }
     Circle()
     {
         return Math.PI* this.radius* this.radius;
     }
     Circle()
     {
        return (`the given radius value is ${this.radius} and the color is${this. color}`);
     }
     getRadius()
     {
        return (` The given radius is ${this.radius}`);
     }
     getColor()
     {
        return (`The given color for circle ${this.color}`);
     }
     setRadius(radius1)
     {  this.radius = radius1;}

     setColor(color1)
     { this.color = color1;}
     toString(){
        return (`Circle [${this.radius},${this.color}]`);
     }
     getArea(){
     return pi*this.radius*this.radius;
     }
     getCircumference(){
        return (`The Circumfernce ${this.radius * PI * 2}`);
     }
    }
    let r1 = new Circle(5, "blue");
    let r2 = new Circle(8, "green");
    console.log(r1.getarea());
    console.log(getCircumference());
    console.log(getArea());
    console.log(parseInt(Circle(radius)));

    


