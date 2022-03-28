// add to local storage item button
const addItem = () => {
    console.log('addItem');
}
// remove to local storage item button
const removeItem = () => {
    console.log('removeItem');
}

const product = {};

const addToProduct = item => {
    // three way to add into product object
    // product.mango = 1;
    // product['orange'] = 2
    // product[item] = 1;

    if (item in product) {
        product[item] = product[item] + 1;
    }
    else {
        product[item] = 1;
    }

    console.log(product);
}