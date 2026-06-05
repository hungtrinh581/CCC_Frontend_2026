# PBT 01 - HTML5 Fundamentals

## Phần A

### A1 - HTTP va Browser
Nguồn: tuan_1_html5/01_introduction_html_universe.md.

1. Trinh duyet kiem tra cache va HSTS.
2. DNS lookup doi ten mien shopee.vn sang dia chi IP.
3. Trinh duyet mo ket noi TCP va bat tay TLS vi dùng HTTPS.
4. Gui HTTP request den server/CDN.
5. Server tra HTML, status code, headers va body.
6. Browser parse HTML thanh DOM, tai CSS/JS/anh, tao CSSOM.
7. DOM + CSSOM thanh render tree, layout, paint va composite len man hinh.

Tab Network hien thi request, status code, method, type, size, waterfall va tong thoi gian load. Ảnh minh chung can bo sung trong screenshots.

### A2 - Semantic HTML
Lỗi semantic: dùng div thay header/nav/main/footer/article, logo không co heading/link phu hop, san pham không boc article, anh thieu alt, gia không nhan manh bang strong, menu không nam trong nav.

Bản sửa:

```html
<header>
  <a href="/" aria-label="ShopTLU">ShopTLU</a>
  <nav aria-label="Điều hướng chính">
    <ul>
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/products">Sản phẩm</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>iPhone 16 Pro</h1>
    <figure><img src="iphone.jpg" alt="iPhone 16 Pro mau titan"></figure>
    <p><strong>25.990.000d</strong></p>
  </article>
</main>
<footer>&copy; 2026 ShopTLU</footer>
```

### A3 - Block vs Inline

```text
[Hop 1]
Text A Text B
[Hop 2]
Text C Text D
[Hop 3]
```

`div` la block nen tu xuong dong va chiem het dong. `span` va `strong` la inline nen nam cung dong neu con cho.

### A4 - Table
`thead` chua hang tieu de, `tbody` chua dữ liệu chinh, `tfoot` chua tong ket. Không nen dùng table de layout vi lam sai ngu nghia noi dung, gay kho cho screen reader, kho responsive, kho bảo trì CSS va lam DOM cong kenh.

## Phần B3 - Lỗi debug
1. DTD sai: `<!DOCTYPE>` -> `<!DOCTYPE html>`.
2. `html` thieu `lang="vi"`.
3. `title` thieu the dong.
4. `charset="utf8"` nen la `UTF-8`.
5. `h1` dong sai thanh `</h1>`.
6. Link dau thieu dau slash va thieu `</a>`.
7. Ảnh thieu dau nhay src va thieu alt.
8. The `b` va `p` long sai thu tu; nen dùng `strong`.
9. Bang thieu `thead`, `tbody`, `th`.
10. Co hai `main`; sidebar nen la `aside`.
11. Footer `p` thieu the dong.
12. Body/html thieu `</html>`.

## B4 - Phân tích web that
Đã chọn Tiki.vn. Can chup anh that trong screenshots. Dự kiến thay `header`, `nav`, `main` cho dieu huong va noi dung; form tim kiem dùng input text/search; table neu co thuong nam trong khu thong so san pham.

## Phần C
### C1 - Cấu trúc trang chi tiet san pham

```html
<header><!-- vung dau trang va nhan dien site -->
  <nav aria-label="Điều hướng chính"><!-- nhom link dieu huong --></nav>
</header>
<nav aria-label="Breadcrumb"><!-- breadcrumb la dieu huong phu -->
  <ol><li><a href="/">Trang chủ</a></li><li>Điện thoại</li></ol>
</nav>
<main><!-- noi dùng chinh duy nhat -->
  <article><!-- san pham la noi dùng độc lập -->
    <section aria-labelledby="gallery-title"><!-- nhom anh san pham -->
      <h2 id="gallery-title">Ảnh sản phẩm</h2>
      <figure><img src="phone.jpg" alt="iPhone 16 mat truoc"><figcaption>Ảnh chính</figcaption></figure>
    </section>
    <section aria-labelledby="info-title"><h1 id="info-title">iPhone 16</h1></section>
    <section aria-labelledby="spec-title"><h2 id="spec-title">Thông số</h2><table></table></section>
    <section aria-labelledby="review-title"><h2 id="review-title">Danh gia</h2></section>
  </article>
  <aside><!-- san pham tương tự la noi dùng bổ trợ --></aside>
</main>
<footer><!-- thong tin phap ly/lien he --></footer>
```

### C2 - Phan bien
Dùng div cho moi thu co the hien thi duoc, nhung không truyen y nghia cho trình duyệt, may tim kiem va cong cu ho tro. Semantic HTML giup crawler hieu dau la header, nav, bai viet, san pham va footer, tu do SEO tot hon. Voi accessibility, screen reader co the nhay nhanh qua cac landmark nhu nav/main/footer thay vi doc mot cay div vo nghia. Vi du, mot product card dùng article, h2, figure, figcaption se ro rang hon mot div.product gom nhieu div con; người dùng dùng screen reader biet day la mot muc noi dùng độc lập va anh co chu thich. Semantic cung giup code de bảo trì vi ten the da mo ta vai tro. Tuy vay, div van phu hop khi can wrapper thuan layout hoac nhom phan tu không co y nghia ngu nghia rieng, vi du wrapper de ap dùng grid hoac container can CSS.