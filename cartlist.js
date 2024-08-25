// Initial shopping cart array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Function to manage the shopping cart
function manageShoppingCart(cart) {
    // 1. Add 'Meat' at the beginning if it's not already there
    if (!cart.includes('Meat')) {
        cart.unshift('Meat');
    }

    // 2. Add 'Sugar' at the end if it's not already there
    if (!cart.includes('Sugar')) {
        cart.push('Sugar');
    }

    // 3. Remove 'Honey' if you are allergic to honey
    const honeyIndex = cart.indexOf('Honey');
    if (honeyIndex !== -1) {
        cart.splice(honeyIndex, 1);
    }

    // 4. Modify 'Tea' to 'Green Tea'
    const teaIndex = cart.indexOf('Tea');
    if (teaIndex !== -1) {
        cart[teaIndex] = 'Green Tea';
    }

    return cart;
}

// Testing the function with the initial shopping cart
const updatedCart = manageShoppingCart(shoppingCart);

// Display the updated shopping cart
console.log(updatedCart);
