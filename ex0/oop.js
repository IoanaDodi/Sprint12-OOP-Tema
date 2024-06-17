// Declararea unei clase prin care sa se reprezinte obiectul numit Car cu anumite proprietati si definirea unui constructor care sa
// inititializeze properietatile clasei folosind "this"

class Car {
    constructor(type, model, color, km) {
        this.type = type;
        this.model = model;
        this.color = color;
        this.km = km;
    }

//Definirea unei metode de tip "getter" care returneaza properitatile masinii
    get properties() {
        return `Car [type = ${this.type}, model = ${this.model}, color = ${this.color}, km = ${this.km}]`;
    }
}

//Definirea unei functii "main" in care se creaza 3 instante ale clasei Car folosind operatorul "New"

function main() {
    const car1 = new Car("Volvo", "XC-60", "Black", "234 000");
    const car2 = new Car("Mazda", "CX-5", "Green", "111 000");
    const car3 = new Car("Dacia", "BIGGSTER", "Blue", "24 000");

    console.log(car1.properties);
    console.log(car2.properties);
    console.log(car3.properties);
}

// Apelarea functiei;
main();
