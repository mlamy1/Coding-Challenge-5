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



