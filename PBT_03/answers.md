# PBT 03 - CSS Core

## Phần A
A1: Inline nhanh nhung kho bảo trì; internal phu hop demo mot file; external tot nhat cho du an vi tai su dùng va cache. Neu cung ap dung, inline thuong thang external/internal do specificity cao hon, tru truong hop !important.

A2: h1 -> ShopTLU; .price -> 25.990.000d va 45.990.000d; #app header -> header top-bar dark; nav a:first-child -> Home; .product.featured h2 -> MacBook Pro; article > p -> 4 the p trong 2 article; a[href="/"] -> Home; .top-bar.dark h1 -> ShopTLU.

A3: box-1 width hien thi 450px, chiem 470px tinh margin ngang. box-2 hien thi 400px, content 350px, chiem 420px. Margin collapse giua 25px va 40px thanh 40px, không cong 65px. Neu -10px va 40px thi khoang cach 30px.

A4: p=(0,0,1), .price=(0,1,0), #main-price=(1,0,0), p.price=(0,1,1). Mau do thang. Inline style orange thang. Neu p co !important thi black thang cac rule thuong.

## Phần C
C1: Sidebar thuc te 342px, content 722px, tong 1064px > 960px nen vo layout. Cach 1: them box-sizing:border-box va width 300/660. Cach 2: giu content-box nhung width sidebar 258px, content 598px de cong padding+border = 960px.

C2: Sản phẩm A font-size 20px, color green do .highlight !important. Mo ta featured color blue do .card color blue va p inherit. Sản phẩm B font-size 20px, color blue ke thua .card. Mo ta B color green do .highlight !important.