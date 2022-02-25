class teamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}



class Support extends teamMember {
    groupSupportTime;
    designation = 'support web developer';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start support session');
    }
}

class Nepchun extends teamMember {
    codeEditor;
    designation = 'neptuneweb developer';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    createApp(version) {
        console.log(this.name, 'building a app', version);
    }
}

const aamir = new Support('amir khan', 'dubai', 10);
const salman = new Support('salman khan', 'saudi', 12);
// console.log(aamir);
// console.log(salman);

const lia = new Nepchun('lia', 'BD', 12.3)
lia.createApp('1.2');
console.log(lia);


