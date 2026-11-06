const { importStock, exportStock, checkStock } = require('../inventory');

describe('Lab09 - Unit Test module Tồn kho', () => {
  test('INV01: Nhập 10 vào kho đang có 20 -> 30', () => {
    expect(importStock(20, 10)).toBe(30);
  });
  test('INV02: Nhập hàng vào kho trống', () => {
    expect(importStock(0, 5)).toBe(5);
  });
  test('INV03: Xuất 8 từ kho có 20 -> 12', () => {
    expect(exportStock(20, 8)).toBe(12);
  });
  test('INV04: Xuất hết hàng trong kho', () => {
    expect(exportStock(10, 10)).toBe(0);
  });
  test('INV05: Không cho xuất quá số lượng tồn', () => {
    expect(() => exportStock(5, 6)).toThrow('Không đủ hàng trong kho');
  });
  test('INV06: Không chấp nhận số lượng nhập âm', () => {
    expect(() => importStock(10, -2)).toThrow('Số lượng nhập/xuất không hợp lệ');
  });
  test('INV07: Không chấp nhận số lượng xuất bằng 0', () => {
    expect(() => exportStock(10, 0)).toThrow('Số lượng nhập/xuất không hợp lệ');
  });
  test('INV08: Không chấp nhận số lượng nhập là số thập phân', () => {
    expect(() => importStock(10, 1.5)).toThrow('Số lượng nhập/xuất không hợp lệ');
  });
  test('INV09: Không chấp nhận số lượng tồn âm', () => {
    expect(() => exportStock(-1, 1)).toThrow('Số lượng tồn không hợp lệ');
  });
  test('INV10: Không chấp nhận số lượng tồn không phải số', () => {
    expect(() => importStock('10', 2)).toThrow('Số lượng tồn không hợp lệ');
  });
  test('INV11: Kho còn hàng trên ngưỡng -> IN_STOCK', () => {
    expect(checkStock(12, 5)).toEqual({ quantity: 12, status: 'IN_STOCK' });
  });
  test('INV12: Kho còn đúng ngưỡng -> LOW_STOCK', () => {
    expect(checkStock(5, 5)).toEqual({ quantity: 5, status: 'LOW_STOCK' });
  });
  test('INV13: Kho hết hàng -> OUT_OF_STOCK', () => {
    expect(checkStock(0)).toEqual({ quantity: 0, status: 'OUT_OF_STOCK' });
  });
  test('INV14: Ngưỡng cảnh báo âm không hợp lệ', () => {
    expect(() => checkStock(10, -1)).toThrow('Ngưỡng cảnh báo không hợp lệ');
  });
  test('INV15: Nhập vượt giới hạn số nguyên an toàn', () => {
    expect(() => importStock(Number.MAX_SAFE_INTEGER, 1)).toThrow('Số lượng tồn vượt giới hạn');
  });
});
