const a = { a: 123 };
const b = { a: 123 };

describe('Тесты для практики', () => {
  it('Зеленый тест', () => {
    expect(1 + 1).not.toBe(3);
    expect(1 + 1).toBe(2);
    expect(1 + 1).toBe(4 / 2);

    expect(a).toEqual(b);
  });

  it('Красный тест', () => {
    expect(a).not.toBe(b);
  });
});
