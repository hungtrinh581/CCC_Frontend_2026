# PBT 02 - HTML Forms & Media

## Phần A
### A1
1. email: o text co validate @, dùng dang ky.
2. password: an ky tu, dùng mat khau.
3. tel: nhap so dien thoai, dùng giao hang.
4. number: co min/max, dùng so luong.
5. date: chon ngay, dùng ngay sinh/giao hang.
6. radio: chon mot, dùng gioi tinh/phuong thuc thanh toan.
7. checkbox: chon nhieu/chap nhan dieu khoan.
8. range: thanh truot, dùng thoi gian giao.
9. search: o tim kiem, dùng tim san pham.
10. file: upload tep, dùng anh dai dien/chung tu.

### A2
1. required rong: không submit, hien thong bao bat buoc.
2. email abc: không submit vi sai dinh dang email.
3. number 15 voi max 10: không submit vi range overflow.
4. pattern 10 chu so nhung abc123: không submit vi mismatch.
5. minlength 8 nhung 123: không submit vi qua ngan.

### A3
Label for giup click vao nhan se focus input va screen reader doc ten truong. Fieldset/legend gom nhom radio/checkbox nhu gioi tinh, thanh toan. aria-label dùng khi control không co nhan hien thi, không nen lap voi label vi co the gay trung lap thong tin.

### A4
loading=lazy tri hoan tai anh ngoai viewport, giam băng thong va LCP phu. Không dùng cho anh hero tren man hinh dau. Video nen co nhieu source de browser chon format ho tro: mp4, webm, ogv. Alt mo ta anh cho accessibility/SEO; anh trang tri de alt rong.

### A5
Dùng img don le khi anh la noi dùng truc tiep va không can chu thich. Dùng figure khi anh can caption hoac la mot khoi minh hoa độc lập.

## Phần C
### C1 - 8 loi form
1. Form thieu action/method.
2. Input ten không co label/id/name/required.
3. Email không co label va required.
4. Password không co minlength/pattern.
5. Confirm password HTML không tu so sanh duoc.
6. Phone dùng text thay vi tel/pattern.
7. Select không co label/name.
8. Checkbox label thieu input checkbox required.

### C2
CMND/CCCD: pattern="[0-9]{12}". So tai khoan: pattern="[0-9]{10,15}". HTML5 validation không du an toan vi user co the sua DOM, tat validation hoac goi API truc tiep. HTML không kiem tra được trung email trong database, confirm password phuc tap, OTP/ma xac thuc, logic lien server. Neu chi validate frontend co nguy co dữ liệu doc hai vao backend va bypass dieu kien nghiep vu.