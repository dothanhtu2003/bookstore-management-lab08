/** Pure inventory operations for Lab09 (no database or HTTP dependency). */
function validateStock(stock) {
  if (!Number.isSafeInteger(stock) || stock < 0) {
    throw new Error('Số lượng tồn không hợp lệ');
  }
}

function validateQuantity(quantity) {
  if (!Number.isSafeInteger(quantity) || quantity <= 0) {
    throw new Error('Số lượng nhập/xuất không hợp lệ');
  }
}

function importStock(currentStock, quantity) {
  validateStock(currentStock);
  validateQuantity(quantity);
  const nextStock = currentStock + quantity;
  if (!Number.isSafeInteger(nextStock)) {
    throw new Error('Số lượng tồn vượt giới hạn');
  }
  return nextStock;
}

function exportStock(currentStock, quantity) {
  validateStock(currentStock);
  validateQuantity(quantity);
  if (quantity > currentStock) {
    throw new Error('Không đủ hàng trong kho');
  }
  return currentStock - quantity;
}

function checkStock(currentStock, minimumStock = 5) {
  validateStock(currentStock);
  if (!Number.isSafeInteger(minimumStock) || minimumStock < 0) {
    throw new Error('Ngưỡng cảnh báo không hợp lệ');
  }
  return {
    quantity: currentStock,
    status: currentStock === 0 ? 'OUT_OF_STOCK' : currentStock <= minimumStock ? 'LOW_STOCK' : 'IN_STOCK',
  };
}

module.exports = { importStock, exportStock, checkStock };
