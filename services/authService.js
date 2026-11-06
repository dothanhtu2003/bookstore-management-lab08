const bcrypt = require("bcryptjs");
const users = [];
let nextId = 1;

// --- YOUR PART: REGISTER ---
async function register(username, password) {
    if (typeof username !== "string" || typeof password !== "string") {
        throw new Error("Tên đăng nhập và mật khẩu phải là chuỗi");
    }
    const normalizedUsername = username.trim().toLowerCase();
    if (!normalizedUsername || !password) {
        throw new Error("Tên đăng nhập và mật khẩu là bắt buộc");
    }
    if (password.length < 8) {
        throw new Error("Mật khẩu phải có ít nhất 8 ký tự");
    }
    const existed = users.some(user => user.username === normalizedUsername);
    if (existed) {
        throw new Error("Tên đăng nhập đã tồn tại");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = { id: nextId++, username: normalizedUsername, passwordHash };
    users.push(user);
    return { id: user.id, username: user.username };
}

// --- EMMY'S PART: LOGIN ---
async function login(username, password) {
    if (typeof username !== "string" || typeof password !== "string") {
        throw new Error("Tên đăng nhập và mật khẩu là bắt buộc");
    }

    const normalizedUsername = username.trim().toLowerCase();
    if (!normalizedUsername || !password) {
        throw new Error("Tên đăng nhập và mật khẩu là bắt buộc");
    }

    const user = users.find(u => u.username === normalizedUsername);

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
    }
    
    return { id: user.id, username: user.username };
}

module.exports = { register, login, users };