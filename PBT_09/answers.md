# PBT 09 - DOM Manipulation

## Phần A
A1: DOM tree gom div#app > header > h1 + nav > 3 link; main > form#todoForm > input#todoInput + button; ul#todoList > 2 li. Selectors: h1, #todoForm input, .todo-item, nav a.active, #todoList li:first-child, nav a.

A2: textContent gan text thuan nen an toan voi input người dùng; innerHTML parse chuoi thanh HTML nen chi dùng voi template tin cay. De tranh XSS, thay result.innerHTML = userInput bang result.textContent = userInput.

A3: Click button in BUTTON, INNER, OUTER do event bubbling. Neu stopPropagation trong handler button thi chi in BUTTON.

## Phần C
C1: Lỗi gom dùng innerHTML không can thiet, addEventListener("onclick") sai, gan countDisplay = count lam mat bien const, historyList.innerHTML = null không ro nghia, item.remove thieu (), localStorage lay count la string, luu history bang innerHTML không an toan, bind click vao tung li thay vi delegation.

C2: Bind 1000 event ton bo nho va kho go; event delegation dat mot listener tren parent. DocumentFragment gom node roi append mot lan nen giam reflow.
