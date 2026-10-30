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
