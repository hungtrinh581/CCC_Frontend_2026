# PBT 04 - CSS Layout

## Phần A
static: co flow, vi tri mac dinh, cuon theo trang, dùng noi dùng binh thuong. relative: van chiem cho, tham chieu vi tri ban dau, cuon theo trang, dùng tinh chinh va ancestor cho absolute. absolute: bo khoi flow, tham chieu ancestor positioned gan nhat hoac body, cuon theo ancestor/trang, dùng badge/menu. fixed: bo khoi flow, tham chieu viewport, không cuon, dùng header/nut top. sticky: van trong flow den nguong, tham chieu scroll container, ban dau cuon sau do dinh, dùng sidebar. Absolute tham chieu body khi không co ancestor positioned; tham chieu parent khi parent co position khac static.

Flex/Grid: 1) 4 item flex:1 thanh 1 hang 4 cot bang nhau. 2) 6 item width 45% margin 2.5% thanh 3 hang x 2 cot. 3) 3 item nam cung hang, cach deu, can giua doc. 4) Grid 3 cot: 200px, phan con lai, 200px. 5) 7 item grid 3 cot thanh 3 hang, item 7 o cot 1 hang cuoi.

## Phần C
1. Navbar ngang dùng Flexbox vi phan bo theo mot truc. 2. Instagram grid dùng Grid vi hai chieu. 3. Blog main + sidebar dùng Grid. 4. Footer 4 cot dùng Grid hoac Flexbox, Grid ro hon. 5. Card san pham dùng Flexbox column de day nut xuong day.

Debug: Card cao không deu -> dat .card display:flex; flex-direction:column; .btn margin-top:auto. Hero can giua -> justify-content:center; align-items:center. Sidebar co lai -> flex:0 0 250px.