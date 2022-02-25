class root {
    name;
    location = '7 no uttora';
    items_food = 'burger';
    constructor(name) {
        this.name = name;

    }
}





class Restaurent extends root {
    open_time;
    constructor(name, time) {
        super(name);
        this.open_time = time;
    }
    work(hour) {
        console.log(this.name, 'burgur banay', hour);
    }


}
const rahba = new Restaurent('kacchi bhai', '10-12');
console.log(rahba);
rahba.work('9');