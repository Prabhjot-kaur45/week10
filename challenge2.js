class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCl("Ford", 120);

console.log("Testing Car (Ford):");
car1.accelerate();
car1.brake();

console.log(`Speed in mi/h: ${car1.speedUS}`);


car1.speedUS = 75;
console.log(`New speed in km/h after setting in mi/h: ${car1.speed} km/h`);