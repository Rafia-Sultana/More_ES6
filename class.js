class Support {
    name;
    designation = 'support web developer';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start support session');
    }
}
const aamir = new Support('amir khan', 'dubai');
const salman = new Support('salman khan', 'saudi');
// console.log(salman);
console.log(aamir);
// aamir.startSession();
// salman.startSession();