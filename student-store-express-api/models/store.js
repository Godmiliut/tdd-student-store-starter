const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")

 function calculateTotal(shoppingCart){
    let total = 0;
    shoppingCart.map((item) => {
        total += item.quantity * storage.get("products").find({ id: item.itemId }).value().price;
    })
    let tax = total * .875;
    total += tax
    return  total.toFixed(2);
}

function generateReceipt(order){
    let receipt = ["Showing receipt for" + order.user.name + "available at " + order.user.email + ":"];
    let total = 0;

    purchase.shoppingCart.map((item) => {
        receipt.push(item.quantity +  " total " + storage.get("products").find({ id: item.itemId} ).value().name + "purchased at a cost of $" + storage.get("products").find({id: item.itemId}).value.price + " for a total cost of $" + (item.quantity * storage.get*("products").find( {id: item.itemId} ).value().price).toFixed(2) + ".");
        total += item.quantity * storage.get("products").find({ id: item.itemId }).value().price
    })

        receipt.push("Before taxes, the subtotal was $" + total.toFixed(2));
        receipt.push("After taxes and fees were applied, the total comes out to $" + (total*1.0875).toFixed(2));
        return receipt;
}

class Store{
    static async listProducts(){
        const products=storage.get("products").value();
        return products;
    }
    static async fetchProductById(productId){
        const product = storage.get("products").find({id: Number(productId)}).value();
        return product;
    }

    static async listPurchases(){
        const purchases = storage.get("purchases").value();
        return purchases;
    }

    static async createOrder(purchase){
        let subtotal = 0;
        if(!purchase.user.name || !purchase.user.email || !purchase.shoppingCart){
            throw new BadRequestError("The order is missing a required field");
        }
        const allProducts = await this.listProducts();
        const purchases = await Store.listPurchases();
        const purchaseId = purchases.length + 1;
        const createdAt = new Date().toISOString();
        const name = purchase.user.name;
        const email = purchase.user.email;
        const  order = purchase.shoppingCart;
        const total = calculateTotal(purchase.shoppingCart);

        const receipt = ["Showing receipt for" + purchase.user.name + "available at " + purchase.user.email + ":"];

        /*purchase.shoppingCart.map((item) => {
        receipt.push(item.quantity +  " total " + storage.get("products").find({ id: item.itemId} ).value().name + "purchased at a cost of $" + storage.get("products").find({id: item.itemId}).value.price + " for a total cost of $" + (item.quantity * storage.get*("products").find( {id: item.itemId} ).value().price).toFixed(2) + ".");
        total += item.quantity * storage.get("products").find({ id: item.itemId }).value().price
        })*/

        receipt.push("Before taxes, the subtotal was $" + total);
        receipt.push("After taxes and fees were applied, the total comes out to $" + total*1.0875);
        
        const newOrder = { id: purchaseId, name: name, email: email, order: order, total: total, createdAt: createdAt, receipt: receipt};
        storage.get("purchases").push(newOrder).write()
        return newOrder;
    }
}

module.exports= Store