# PBT 07 - JavaScript Basics

## Phần A
A1: var truoc khai bao in undefined do hoisting; let truoc khai bao gay ReferenceError do TDZ; gan lai const gay TypeError; const array van push được vi không doi binding; block let in 2 roi ngoai block in 1.

A2: typeof null = object, typeof undefined = undefined, typeof NaN = number, "5" + 3 = "53", "5" - 3 = 2, "5" * "3" = 15, true + true = 2, [] + [] = "", [] + {} = "[object Object]", {} + [] tuy context co the la 0 hoac "[object Object]". Toan tu + co the noi chuoi, con - ep ve so.

A3: true, false, true, false, false, true, false, true. Nen dùng === de tranh ep kieu bat ngo.

A4: falsy gom false, 0, -0, 0n, "", null, undefined, NaN. Cac dong in ra: A, C, D, G, H.

A5:
~~~javascript
const greeting = `Xin chao ${name}! Ban ${age} tuoi.`;
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
const html = `<div class="card"><h2>${title}</h2><p>${description}</p><span>Giá: ${price}d</span></div>`;
~~~

## Phần C
C1: Can validate giaBan la number, dùng === thay vi =, them dau cham phay/return ro rang, không dùng var trong setTimeout loop ma thay bang let de moi vong lap co binding rieng.

C2: Xem file restaurant_bill.js.
