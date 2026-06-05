# PBT 01 - HTML5 Fundamentals

## Phần A

### A1 - HTTP và Trình duyệt
Nguồn: tuan_1_html5/01_introduction_html_universe.md.

1. Trình duyệt kiểm tra cache và HSTS.
2. DNS lookup đổi tên miền shopee.vn sang địa chỉ IP.
3. Trình duyệt mở kết nối TCP và bắt tay TLS vì dùng HTTPS.
4. Gửi HTTP request đến server/CDN.
5. Server trả HTML, status code, headers và body.
6. Browser parse HTML thành DOM, tải CSS/JS/ảnh, tạo CSSOM.
7. DOM + CSSOM thành render tree, layout, paint và composite lên màn hình.

Tab Network hiển thị request, status code, method, type, size, waterfall và tổng thời gian load. Ảnh minh chứng cần bổ sung trong screenshots.

### A2 - Semantic HTML
Lỗi semantic: dùng div thay header/nav/main/footer/article, logo không có heading/link phù hợp, sản phẩm không bọc article, ảnh thiếu alt, giá không nhấn mạnh bằng strong, menu không nằm trong nav.

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

`div` là block nên tự xuống dòng và chiếm hết dòng. `span` và `strong` là inline nên nằm cùng dòng nếu còn chỗ.

### A4 - Table
`thead` chứa hàng tiêu đề, `tbody` chứa dữ liệu chính, `tfoot` chứa tổng kết. Không nên dùng table để layout vì làm sai ngữ nghĩa nội dung, gây khó cho screen reader, khó responsive, khó bảo trì CSS và làm DOM công kênh.

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

## B4 - Phân tích web thật
Đã chọn Tiki.vn. Cần chụp ảnh thật trong screenshots. Dự kiến thay `header`, `nav`, `main` cho điều hướng và nội dung; form tìm kiếm dùng input text/search; table nếu có thường nằm trong khu thông số sản phẩm.

## Phần C
### C1 - Cấu trúc trang chi tiet san pham

```html
<header><!-- vùng đầu trang và nhận diện site -->
  <nav aria-label="Điều hướng chính"><!-- nhóm link điều hướng --></nav>
</header>
<nav aria-label="Breadcrumb"><!-- breadcrumb là điều hướng phụ -->
  <ol><li><a href="/">Trang chủ</a></li><li>Điện thoại</li></ol>
</nav>
<main><!-- nội dung chính duy nhất -->
  <article><!-- sản phẩm là nội dung độc lập -->
    <section aria-labelledby="gallery-title"><!-- nhóm ảnh sản phẩm -->
      <h2 id="gallery-title">Ảnh sản phẩm</h2>
      <figure><img src="phone.jpg" alt="iPhone 16 mặt trước"><figcaption>Ảnh chính</figcaption></figure>
    </section>
    <section aria-labelledby="info-title"><h1 id="info-title">iPhone 16</h1></section>
    <section aria-labelledby="spec-title"><h2 id="spec-title">Thông số</h2><table></table></section>
    <section aria-labelledby="review-title"><h2 id="review-title">Đánh giá</h2></section>
  </article>
  <aside><!-- sản phẩm tương tự là nội dung bổ trợ --></aside>
</main>
<footer><!-- thông tin pháp lý/liên hệ --></footer>
```

### C2 - Phân biện
Dùng div cho mọi thứ có thể hiển thị được, nhưng không truyền ý nghĩa cho trình duyệt, máy tìm kiếm và công cụ hỗ trợ. Semantic HTML giúp crawler hiểu đâu là header, nav, bài viết, sản phẩm và footer, từ đó SEO tốt hơn. Với accessibility, screen reader có thể nhảy nhanh qua các landmark như nav/main/footer thay vì đọc một cây div vô nghĩa. Ví dụ, một product card dùng article, h2, figure, figcaption sẽ rõ ràng hơn một div.product gồm nhiều div con; người dùng dùng screen reader biết đây là một mục nội dung độc lập và ảnh có chú thích. Semantic cũng giúp code dễ bảo trì vì tên thẻ đã mô tả vai trò. Tuy vậy, div vẫn phù hợp khi cần wrapper thuần layout hoặc nhóm phần tử không có ý nghĩa ngữ nghĩa riêng, ví dụ wrapper để áp dụng grid hoặc container cần CSS.