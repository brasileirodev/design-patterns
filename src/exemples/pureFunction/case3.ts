export function calculateTotal(cart : { price: number, quantity: number }[]): number {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Example usage:
  const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
  ];
  console.log(calculateTotal(cart)); // 35