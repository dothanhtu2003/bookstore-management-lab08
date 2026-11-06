
function calculateTotal(items, discountPercent = 0) {
  if (!Array.isArray(items)) {
    throw new Error("Danh sách sản phẩm phải là một mảng");
  }

  if (
    typeof discountPercent !== "number" ||
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    throw new Error("Mã giảm giá không hợp lệ");
  }

  let subtotal = 0;

  for (const item of items) {
    if (
      !item ||
      typeof item.price !== "number" ||
      !Number.isFinite(item.price) ||
      item.price < 0
    ) {
      throw new Error("Giá sản phẩm không hợp lệ");
    }

    if (
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 0
    ) {
      throw new Error("Số lượng sản phẩm không hợp lệ");
    }

    subtotal += item.price * item.quantity;
  }

  const total = subtotal * (1 - discountPercent / 100);
  return total;
}

module.exports = { calculateTotal };