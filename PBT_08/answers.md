# PBT 08 - Functions, Arrays & Objects

## Phần A
A1: Function Declaration được hoist cả thân hàm; Function Expression và Arrow Function chỉ hoist biến nên không gọi trước khi khởi tạo. Hàm tính thuế có thể viết theo 3 cách nhưng nên u u tiên declaration khi cần hoisting rõ ràng.

A2: Counter in 1, 2, 3, 2, 2. Vòng lặp var in "var: 3" ba lần; let in "let: 0", "let: 1", "let: 2". var có function scope nên callback dùng chung i, let tạo binding mới cho mỗi vòng lặp.

A3: nums.filter(n => n % 2 === 0); nums.map(n => n * 3); nums.reduce((s, n) => s + n, 0); nums.find(n => n > 7); nums.some(n => n > 10); nums.every(n => n > 0); nums.map(n => 'Số ' + n + ' là ' + (n % 2 ? 'lẻ' : 'chẵn')); [...nums].reverse().

A4: In iPhone 16, 25990000, 8, Titan. console.log(specs) gây ReferenceError vì destructuring lờng không tạo biến specs. updated.price = 23990000, updated.sale = true, product.price vẫn 25990000. Spread copy nông nên copy.specs.ram = 16 làm product.specs.ram thành 16.

## Phần C
C1: const processOrders = orders => orders.filter(o => o.status === 'completed' && o.total > 100000).map(({ id, customer, total }) => ({ id, customer, total, discount: total * 0.1, finalTốtal: total * 0.9 })).sort((a, b) => b.finalTốtal - a.finalTốtal);

C2: miniArray tu viet trong higher_order.js.
