class Sales {
    constructor(price) {
        this.price = price;
        this.calculateFruitCost = (fruitName, quantity) => {
            return `${quantity} ${fruitName} for KES ${parseFloat(this.unitprice*quantity).toFixed(1)}`
        }      
    }
}

var apples = new Sales(35.0)
var berries = new Sales( 150.0)
var watermelon = new Sales(400.0)
console.log(berries.calculateFruitCost('berries', 5))
console.log(apples.calculateFruitCost('apples', 2))
console.log(watermelon.calculateFruitCost('watermelon',3))


class KioskCalc {
    
    constructor(fruit,quantity) {
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitsPriceList = {
            'orange' : 30,
            'mango'  : 15,
            'avocado' : 40,

        };
        
        this.getTotalcost = () => {
            return `${this.quantity} ${this.fruit} for KES ${parseFloat(this.fruitsPriceList.orange *this.quantity)}`

        }
    }


    }



var kioskCalc = new KioskCalc('oranges',5)
var kioskCalc1 = new KioskCalc('mango',4)
var kioskCalc2 = new KioskCalc('avocado',2)

console.log(kioskCalc.getTotalcost());
console.log(kioskCalc1.getTotalcost());
console.log(kioskCalc2.getTotalcost());