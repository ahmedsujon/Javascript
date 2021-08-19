const Mango = {
    color: 'yellow',
    price: 120,
    weight: 100,
    about:function(){
        // return 'This mango price is '+this.price+' Taka';
        return `this mango price is ${this.price} taka`
    }
}

console.log(Mango.about());