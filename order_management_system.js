//task 1 
const inventory = [
    {name:'Espresso', price: 3, quantity:10},
    {name: 'Latte', price:4, quantity:5},
    {name:'Cappuccino', price:4, quantity:6},
    {name: 'Mocha', price:5, quantity:4}

];
//that is the inventory list

//task 2

let orders = []
//this is my empty array

//task 3
function placeorder(customerName:any, items:any);
for(let quantity in items){
    inventory.find((item) => item.name===item);
    if(item>1){
        console.log('This item is low stock.');
    }
    if(item<1){
        ('This item is in stock.');
    }
    //showing stock status for items

    for(let quantity in items){
        inventory.find((item) => item.name===item); 
        (item.quantity-=item.stock);
}
//making the order 
orders.push({
    customerName: customerName,
    items:[{Name:name, quantity: quantity}]
    status:"pending"
});
}
console.log(placeorder("Leila Johnson",{name:Espresso, quantity:1})
)

//task 4
function calculateordertotal (order){
    (inventory.price+=order.price)
}
console.log("total price $$'calculateordertotal')

//task 5
function completeorder (customerName)[{
    const order=order.find((order)=>order.name===order)}];
    if (order.status="completed"? "order status complete": "error");
    
    