# PBT 03 - CSS Core

## Phần A
A1: Inline nhanh nhưng khó bảo trì; internal phù hợp demo một file; external tốt nhất cho dự án vì tái sử dụng và cache. Nếu cùng áp dụng, inline thường thẳng external/internal do specificity cao hơn, trừ trường hợp !important.

A2: h1 -> ShopTLU; .price -> 25.990.000d va 45.990.000d; #app header -> header top-bar dark; nav a:first-child -> Home; .product.featured h2 -> MacBook Pro; article > p -> 4 the p trong 2 article; a[href="/"] -> Home; .top-bar.dark h1 -> ShopTLU.

A3: box-1 width hiển thị 450px, chiếm 470px tính margin ngang. box-2 hiển thị 400px, content 350px, chiếm 420px. Margin collapse giữa 25px và 40px thành 40px, không cộng 65px. Nếu -10px và 40px thì khoảng cách 30px.

A4: p=(0,0,1), .price=(0,1,0), #main-price=(1,0,0), p.price=(0,1,1). Màu đỏ thắng. Inline style orange thắng. Nếu p có !important thì black thắng các rule thường.

## Phần C
C1: Sidebar thực tế 342px, content 722px, tổng 1064px > 960px nên vỡ layout. Cách 1: thêm box-sizing:border-box và width 300/660. Cách 2: giữ content-box nhưng width sidebar 258px, content 598px để cộng padding+border = 960px.

C2: Sản phẩm A font-size 20px, color green do .highlight !important. Mô tả featured color blue do .card color blue và p inherit. Sản phẩm B font-size 20px, color blue kế thừa .card. Mô tả B color green do .highlight !important.