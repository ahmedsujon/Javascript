class Fruit {

    constructor(name){
        this.name = name;
    }

    fol(){
        console.log(this.name+' is too much testy');
    }
}

let eat = new Fruit('Mango');

eat.fol();