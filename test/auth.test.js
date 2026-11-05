const request = require("supertest");
const app = require("../app");

describe("API Đăng nhập (Login) - Bookstore System", () => {
    const testUser = {
        username: "testuser_bookstore",
        password: "Password123"
    };

    beforeAll(async () => {
        await request(app).post("/api/auth/register").send(testUser);
    });

    test("TC01: Đăng nhập thành công với tài khoản hợp lệ", async () => {
        const response = await request(app).post("/api/auth/login").send(testUser);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Đăng nhập thành công");
        expect(response.body.user.username).toBe(testUser.username);
        expect(response.body.user.passwordHash).toBeUndefined();
    });

    test("TC02: Từ chối đăng nhập khi sai mật khẩu", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            username: testUser.username, password: "WrongPassword" 
        });
        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Tên đăng nhập hoặc mật khẩu không đúng");
    });

    test("TC03: Từ chối đăng nhập khi tài khoản không tồn tại", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            username: "ghost_user", password: "Password123" 
        });
        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Tên đăng nhập hoặc mật khẩu không đúng");
    });

    test("TC04: Từ chối khi thiếu mật khẩu", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            username: testUser.username 
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Tên đăng nhập và mật khẩu là bắt buộc");
    });

    test("TC05: Từ chối khi thiếu username", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            password: "Password123" 
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Tên đăng nhập và mật khẩu là bắt buộc");
    });

    test("TC06: Từ chối khi dữ liệu không phải là chuỗi", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            username: 123, password: 456 
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Tên đăng nhập và mật khẩu là bắt buộc");
    });

    test("TC07: Từ chối khi username chỉ có khoảng trắng", async () => {
        const response = await request(app).post("/api/auth/login").send({ 
            username: "   ", password: "Password123" 
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Tên đăng nhập và mật khẩu là bắt buộc");
    });
});
