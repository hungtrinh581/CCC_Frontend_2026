function format(value) {
  return value.toLocaleString('vi-VN') + 'd';
}

function printBill(items, options = {}) {
  const isWednesday = options.isWednesday || false;
  const includeTip = options.tip !== false;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discountRate = subtotal > 1000000 ? 0.15 : subtotal > 500000 ? 0.1 : 0;
  if (isWednesday) discountRate += 0.05;

  const discount = subtotal * discountRate;
  const afterDiscount = subtotal - discount;
  const vat = afterDiscount * 0.08;
  const tip = includeTip ? afterDiscount * 0.05 : 0;
  const total = afterDiscount + vat + tip;

  console.log('HÓA ĐƠN NHÀ HÀNG');
  items.forEach((item, index) => {
    console.log((index + 1) + '. ' + item.name + ' x' + item.quantity + ' @' + format(item.price) + ' = ' + format(item.price * item.quantity));
  });
  console.log('Tổng cộng:', format(subtotal));
  console.log('Giảm giá (' + discountRate * 100 + '%):', format(discount));
  console.log('VAT (8%):', format(vat));
  console.log('Tip (5%):', format(tip));
  console.log('THANH TOÁN:', format(total));
  return total;
}

printBill([
  { name: 'Phở bò', price: 65000, quantity: 2 },
  { name: 'Trà đá', price: 5000, quantity: 3 },
  { name: 'Bún chả', price: 55000, quantity: 1 },
], { isWednesday: false, tip: true });
