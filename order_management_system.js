// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: 'Chocolate Chip', price: 3, quantity: 20},
    {name: 'Double Chocolate Chip', price: 4, quantity: 15},
    {name: 'Sugar', price: 3, quantity: 20},
    {name: 'Birthday Cake', price: 4, quantity: 15} 
]; 
// Array contains name, price, and quantity of products. 

// Task 2: Create an Orders Array of Order Objects

const orders = []; // Initiallizing array 

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    for (let i = 0; i < orderedItems.length; i++) {  
        const item = orderedItems[i]; // Declare "item". 
        const product = inventory.find(product => product.name === item.name); // Declare "product".
        if (!product) { // If product is not found in inventory.
            console.log(`ERROR: Product ${item.name} not found in inventory!`); // This error message will display
        } else if (product.quantity < item.quantity) { // If inventory quantity is less than order quantity.
            console.log(`ERROR: ${item.name} has insufficient stock!`); // This error message will display. 

        }
        }

        for (let i =0; i < orderedItems.length; i++) {
            const item = orderedItems[i];
            const product = inventory.find(product => product.name === item.name);
                if (product) { // If product is found in the inventory.
                    product.quantity -= item.quantity; // The order quantity will be subracted from the inventory quantity. 
                    console.log(`${product.name} updated stock. New Quantity: ${product.quantity}`); // This message will display. 
                }
        }
         const sampleOrder = {
            custName: customerName,
            items: orderedItems,
            status: 'Pending'
         };
         orders.push(sampleOrder); // push function to input into the orders array. 
         console.log(`Order placed for ${customerName}`); // If product has sufficient stock after order is place, this message will appear. 
         console.log(`Current Orders:`, orders); // This will display the customer's order. 
    }
    placeOrder('Cameron', [{name: 'Sugar', quantity: 2}, {name: 'Birthday Cake', quantity: 4}]); // Example order. 

// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => { // Use reduce to go over arrary.
        const product = inventory.find(product => product.name === item.name);
        return sum + (product.price * item.quantity)}, 0)}; // function used to calculate total price of order. 

const total= calculateOrderTotal(orders[0]); // Used to define output of function.
console.log(` Your total is: $${total}`); // Displays message. 

// Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) { 
    const order = orders.find(order => order.customerName === customerName); // Use find code to search for name in orders. 
        if (!order) { // If message is not found, 
            console.log(`ERROR: ${customerName} order not found`); // Message will display.  
        }
        const sampleOrder = { // If message is found, data will update. 
            custName: customerName,
            status: 'Complete'
      
}};
completeOrder('Deandre', [{name: 'Sugar', quantity: 1}, {name: 'Birthday Cake', quantity: 1}]); // Example order. 

// Task 6: Create a Function to Check Pending Orders

function checkPendingOrders() {
    const pendingOrders = orders.filter(order => order.status === 'Pending');
    if (pendingOrders.length === 0) { // if there are no pending orders, 
        console.log('There are no pending orders!'); // message will display. 
    } else {
    console.log('Pending Orders:', pendingOrders); 
}
} 
orders.push({customerName: 'Sara', items: [{name: 'Sugar', quantity: 9 }], status: 'Pending'}); // Sample order
orders.push({customerName: 'Lily', items: [{name: 'Chocolate Chip', quantity: 3 }], status: 'Complete'}); // Sample order
orders.push({customerName: 'Soph', items: [{name: 'Birthday Cake', quantity: 6 }], status: 'Pending'}); // Sample order
orders.push({customerName: 'Diana', items: [{name: 'Double Chocolate Chip', quantity: 1 }], status: 'Complete'}); // Sample order


let pendingorders = checkPendingOrders(); 
console.log(pendingorders); // Display pending orders category.
