class Car {
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
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.charge} %`);
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge} %`);
    }
}

const tesla = new EV("Tesla", 120, 23);

console.log("Testing Electric Car (Tesla):");
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();