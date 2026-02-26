// cart.js

const products = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 }
];

// Calculate total
export const calculateCartTotal = (items) =>
  items.reduce((total, item) =>
    total + item.price * item.quantity, 0);

// Display Invoice
const displayInvoice = () => {
  const invoiceLines = products.map(item =>
    `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`
  );

  const totalAmount = calculateCartTotal(products);

  console.log(`
🛒 Shopping Cart Invoice
---------------------------
${invoiceLines.join("\n")}
---------------------------
Total Amount: ₹${totalAmount}
`);
};

// 🔥 IMPORTANT: Call the function
displayInvoice();