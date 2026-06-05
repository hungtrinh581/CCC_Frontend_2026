function createCart() {
  let items = [];
  let discount = { type: 'percent', value: 0 };
  const codes = {
    SALE10: { type: 'percent', value: 0.1 },
    SALE20: { type: 'percent', value: 0.2 },
    FREESHIP: { type: 'fixed', value: 30000 },
  };

  function subtotal() { return items.reduce((sum, item) => sum + item.price * item.quantity, 0); }
  function payable() {
    const total = subtotal();
    return Math.max(0, discount.type === 'percent' ? total * (1 - discount.value) : total - discount.value);
  }

  return {
    addItem(product, quantity = 1) {
      const found = items.find(item => item.id === product.id);
      if (found) found.quantity += quantity;
      else items.push({ ...product, quantity });
    },
    removeItem(productId) { items = items.filter(item => item.id !== productId); },
    updateQuantity(productId, newQuantity) {
      if (newQuantity <= 0) return this.removeItem(productId);
      const item = items.find(current => current.id === productId);
      if (item) item.quantity = newQuantity;
    },
    getTốtal() { return payable(); },
    applyDiscount(code) { discount = codes[code] || { type: 'percent', value: 0 }; },
    printCart() {
      console.table(items.map((item, index) => ({ '#': index + 1, 'Sản phẩm': item.name, SL: item.quantity, 'Đơn giá': item.price, Tổng: item.price * item.quantity })));
      console.log('Tổng cộng:', payable().toLocaleString('vi-VN') + 'd');
    },
    getItemCount() { return items.reduce((sum, item) => sum + item.quantity, 0); },
    clearCart() { items = []; discount = { type: 'percent', value: 0 }; },
  };
}

const cart = createCart();
cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);
cart.addItem({ id: 3, name: 'AirPods Pro', price: 6990000 }, 2);
cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);
cart.printCart();
cart.applyDiscount('SALE10');
cart.printCart();
console.log('Số SP:', cart.getItemCount());
cart.removeItem(3);
console.log('Sau xóa:', cart.getItemCount());
