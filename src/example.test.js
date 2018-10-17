import Action from './example';

describe('Тестируем экшен Action', () => {
  it('Проверка создания пэйлоада у экшена', () => {
    const payload = Action('test data').payload;

    expect(payload).toBe('test data');
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
    expect([3, 4]).not.toEqual(expect.arrayContaining([1, 2]));
  });
});
