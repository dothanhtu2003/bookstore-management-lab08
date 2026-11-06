function calculateCartTotal(items, discountPercent = 0) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Giỏ hàng không hợp lệ hoặc rỗng");
  }

  if (
    typeof discountPercent !== "number" ||
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    throw new Error("Tỷ lệ giảm giá không hợp lệ");
  }

  let subtotal = 0;

  for (const item of items) {
    if (
      !item ||
      typeof item.price !== "number" ||
      typeof item.quantity !== "number" ||
      !Number.isFinite(item.price) ||
      !Number.isFinite(item.quantity) ||
      item.price < 0 ||
      item.quantity <= 0 ||
      !Number.isInteger(item.quantity)
    ) {
      throw new Error("Thông tin sản phẩm không hợp lệ");
    }
    subtotal += item.price * item.quantity;
  }

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  return finalTotal;
}

module.exports = { calculateCartTotal };