# PBT 08 - Functions, Arrays & Objects

## Phần A
A1: Function Declaration được hoist ca than ham; Function Expression va Arrow Function chi hoist bien nen không goi truoc khi khoi tao. Ham tinh thue co the viet theo 3 cach nhung nen uu tien declaration khi can hoisting ro rang.

A2: Counter in 1, 2, 3, 2, 2. Vong lap var in "var: 3" ba lan; let in "let: 0", "let: 1", "let: 2". var co function scope nen callback dùng chung i, let tao binding moi cho moi vong lap.

A3: nums.filter(n => n % 2 === 0); nums.map(n => n * 3); nums.reduce((s, n) => s + n, 0); nums.find(n => n > 7); nums.some(n => n > 10); nums.every(n => n > 0); nums.map(n => 'So ' + n + ' la ' + (n % 2 ? 'le' : 'chan')); [...nums].reverse().

A4: In iPhone 16, 25990000, 8, Titan. console.log(specs) gay ReferenceError vi destructuring long không tao bien specs. updated.price = 23990000, updated.sale = true, product.price van 25990000. Spread copy nong nen copy.specs.ram = 16 lam product.specs.ram thanh 16.

## Phần C
C1: const processOrders = orders => orders.filter(o => o.status === 'completed' && o.total > 100000).map(({ id, customer, total }) => ({ id, customer, total, discount: total * 0.1, finalTốtal: total * 0.9 })).sort((a, b) => b.finalTốtal - a.finalTốtal);

C2: miniArray tu viet trong higher_order.js.
