# LAB08 – Coding Standards & Code Review

Bài thực hành Lab08 về **Coding Standards, Best Practices và Peer Code Review** trên GitHub.

## Thành viên

| Thành viên | Phụ trách |
|---|---|
| **Đỗ Thanh Tú** – Nhóm trưởng | Quản lý GitHub, phân công, Code Review và tổng hợp báo cáo |
| **Su Nay Yee Nwe** – MSSV: 52400345 | API đăng ký tài khoản |
| **Phommasone Panadda** – MSSV: 52400346 | API đăng nhập và bảo mật cơ bản |
| **shinnthant-1** | Kiểm thử API với Jest & Supertest |

## Công nghệ

- **Backend:** Node.js, Express.js
- **Bảo mật mật khẩu:** bcryptjs
- **Kiểm thử:** Jest, Supertest
- **Quản lý mã nguồn:** Git, GitHub Pull Request

## Chức năng chính

- **Đăng ký:** Kiểm tra dữ liệu đầu vào, mật khẩu tối thiểu 8 ký tự, từ chối username trùng và băm mật khẩu.
- **Đăng nhập:** Xác thực tài khoản bằng bcryptjs, xử lý lỗi và trả HTTP status code phù hợp.
- **Kiểm thử:** 7 test case cho API đăng ký/đăng nhập và đo Code Coverage.
- **Code Review:** Thành viên góp ý trực tiếp trên Pull Request trước khi tích hợp vào `develop`.

> Phạm vi Lab: dữ liệu tài khoản được lưu tạm trong bộ nhớ, chưa kết nối cơ sở dữ liệu.

## Cấu trúc dự án

```text
app.js                  # Định nghĩa API
server.js               # Khởi chạy server
services/authService.js # Nghiệp vụ đăng ký, đăng nhập
tests/auth.test.js      # Kiểm thử Jest/Supertest
```

## Cách chạy

```bash
npm install
npm start
```

Chạy kiểm thử (trên nhánh đã tích hợp phần Testing):

```bash
npm test
npm test -- --coverage
```

**Repository:** https://github.com/dothanhtu2003/bookstore-management-lab08

---

# LAB09 – Unit Testing & Code Coverage

Tiếp tục dự án Lab08, nhóm thiết kế **Test Cases**, viết **Unit Test bằng Jest** và đo **Code Coverage** cho các module nghiệp vụ.

## Phân công kiểm thử

| Thành viên | Module | Test Cases |
|---|---|---:|
| **Đỗ Thanh Tú** | Quản lý tồn kho: nhập, xuất, kiểm tra tồn | 15 |
| **Phommasone Panadda** | Sản phẩm: kiểm tra giá, số lượng | 12 |
| **Su Nay Yee Nwe** | Đăng nhập: xác thực và dữ liệu không hợp lệ | 7 |
| **Shinn Thant** | Bán hàng: tính tổng tiền và giảm giá | 9 |

## Cấu trúc kiểm thử Lab09

```text
inventory.js             # Nghiệp vụ tồn kho
product.js               # Nghiệp vụ sản phẩm
sales.js                 # Nghiệp vụ bán hàng
services/authService.js  # Nghiệp vụ xác thực
test/auth.test.js        # Unit Test đăng nhập
tests/inventory.test.js  # Unit Test tồn kho
tests/product.test.js    # Unit Test sản phẩm
tests/sales.test.js      # Unit Test bán hàng
```

## Chạy Unit Test

```bash
npm ci
npx jest --coverage --runInBand
```

**Kết quả đã xác nhận trước khi tích hợp module Sản phẩm:** 31/31 Tests PASS; Statements 91.35%, Branches 87.83%, Functions 91.66%, Lines 92.40%. Sau khi bổ sung Sản phẩm, cần chạy lại Jest để xác nhận toàn bộ 43 Test Cases.
