const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat');

if (shoppingCart[shoppingCart.length - 1] !== 'Sugar') {
    shoppingCart.push('Sugar');
}

console.log(shoppingCart);

const HoneyIndex = shoppingCart.indexOf('Honey')

if(HoneyIndex !== -1) {
    shoppingCart.splice(HoneyIndex, 1)
}

console.log(shoppingCart)

const TeaIndex = shoppingCart.indexOf('Tea');

shoppingCart[TeaIndex] = 'Green Tea'

console.log(shoppingCart)