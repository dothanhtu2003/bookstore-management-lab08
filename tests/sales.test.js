const { calculateCartTotal } = require("../sales");

describe("Unit Test - Tính tổng tiền giỏ hàng và giảm giá", () => {
  test("CT01: Tính tổng tiền hợp lệ với discount 0%", () => {
    const items = [{ price: 100000, quantity: 2 }];
    const result = calculateCartTotal(items, 0);
    expect(result).toBe(200000);
  });

  test("CT02: Tính tổng tiền nhiều sản phẩm với giảm giá 10%", () => {
    const items = [
      { price: 50000, quantity: 1 },
      { price: 100000, quantity: 2 },
    ];
    const result = calculateCartTotal(items, 10);
    expect(result).toBe(225000);
  });

  test("CT03: Giảm giá tối đa 100%", () => {
    const items = [{ price: 100000, quantity: 1 }];
    const result = calculateCartTotal(items, 100);
    expect(result).toBe(0);
  });

  test("CT04: Ném lỗi khi giỏ hàng rỗng", () => {
    expect(() => calculateCartTotal([], 0)).toThrow(
      "Giỏ hàng không hợp lệ hoặc rỗng"
    );
  });

  test("CT05: Ném lỗi khi giá sản phẩm bị âm", () => {
    const items = [{ price: -10000, quantity: 1 }];
    expect(() => calculateCartTotal(items, 0)).toThrow(
      "Thông tin sản phẩm không hợp lệ"
    );
  });

  test("CT06: Ném lỗi khi số lượng sản phẩm <= 0", () => {
    const items = [{ price: 100000, quantity: 0 }];
    expect(() => calculateCartTotal(items, 0)).toThrow(
      "Thông tin sản phẩm không hợp lệ"
    );
  });

  test("CT07: Ném lỗi khi phần trăm giảm giá bị âm", () => {
    const items = [{ price: 100000, quantity: 1 }];
    expect(() => calculateCartTotal(items, -10)).toThrow(
      "Tỷ lệ giảm giá không hợp lệ"
    );
  });

  test("CT08: Ném lỗi khi phần trăm giảm giá > 100%", () => {
    const items = [{ price: 100000, quantity: 1 }];
    expect(() => calculateCartTotal(items, 150)).toThrow(
      "Tỷ lệ giảm giá không hợp lệ"
    );
  });

  test("CT09: Ném lỗi khi giá sản phẩm không phải kiểu số", () => {
    const items = [{ price: "100000", quantity: 1 }];
    expect(() => calculateCartTotal(items, 0)).toThrow(
      "Thông tin sản phẩm không hợp lệ"
    );
  });
});