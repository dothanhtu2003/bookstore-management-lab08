const { calculateTotal } = require("../product");

describe("Unit Testing: Kiểm thử Giá và Số lượng Sản phẩm (Lab 09)", () => {
  test("PRD01: Tính tổng tiền hợp lệ kèm giảm giá 10%", () => {
    const items = [{ price: 100000, quantity: 2 }];
    expect(calculateTotal(items, 10)).toBe(180000);
  });

  test("PRD02: Giỏ hàng rỗng trả về tổng tiền 0", () => {
    expect(calculateTotal([], 0)).toBe(0);
  });

  test("PRD03: Sản phẩm có số lượng bằng 0", () => {
    const items = [{ price: 50000, quantity: 0 }];
    expect(calculateTotal(items, 0)).toBe(0);
  });

  test("PRD04: Giảm giá 0% giữ nguyên giá trị", () => {
    const items = [{ price: 200000, quantity: 1 }];
    expect(calculateTotal(items, 0)).toBe(200000);
  });

  test("PRD05: Giảm giá 100% trả về 0", () => {
    const items = [{ price: 200000, quantity: 1 }];
    expect(calculateTotal(items, 100)).toBe(0);
  });

  // --- GIÁ TRỊ BIÊN VÀ DỮ LIỆU KHÔNG HỢP LỆ (EDGE CASES & EXCEPTIONS) ---
  test("PRD06: Từ chối khi giá sản phẩm bị âm", () => {
    const items = [{ price: -50000, quantity: 1 }];
    expect(() => calculateTotal(items, 0)).toThrow("Giá sản phẩm không hợp lệ");
  });

  test("PRD07: Từ chối khi giá sản phẩm không phải số hữu hạn (NaN / Infinity)", () => {
    const items1 = [{ price: NaN, quantity: 1 }];
    const items2 = [{ price: Infinity, quantity: 1 }];
    expect(() => calculateTotal(items1, 0)).toThrow("Giá sản phẩm không hợp lệ");
    expect(() => calculateTotal(items2, 0)).toThrow("Giá sản phẩm không hợp lệ");
  });

  test("PRD08: Từ chối khi số lượng sản phẩm bị âm", () => {
    const items = [{ price: 50000, quantity: -1 }];
    expect(() => calculateTotal(items, 0)).toThrow("Số lượng sản phẩm không hợp lệ");
  });

  test("PRD09: Từ chối khi số lượng sản phẩm không phải số nguyên", () => {
    const items = [{ price: 50000, quantity: 1.5 }];
    expect(() => calculateTotal(items, 0)).toThrow("Số lượng sản phẩm không hợp lệ");
  });

  test("PRD10: Từ chối khi mã giảm giá bị âm", () => {
    const items = [{ price: 100000, quantity: 1 }];
    expect(() => calculateTotal(items, -10)).toThrow("Mã giảm giá không hợp lệ");
  });

  test("PRD11: Từ chối khi mã giảm giá vượt quá 100%", () => {
    const items = [{ price: 100000, quantity: 1 }];
    expect(() => calculateTotal(items, 120)).toThrow("Mã giảm giá không hợp lệ");
  });

  test("PRD12: Từ chối khi items không phải mảng", () => {
    expect(() => calculateTotal("not-an-array", 0)).toThrow("Danh sách sản phẩm phải là một mảng");
  });
});