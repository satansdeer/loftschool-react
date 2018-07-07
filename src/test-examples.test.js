function apply(fn, x, y) {
  return fn(x, y);
}

describe('Apply fn', () => {
  it('', () => {
    const fn = jest.fn((x, y) => x * y);
    expect(apply(fn, 1, 2)).toBe(2);
    expect(fn).toBeCalledWith(1, 2);
    expect(fn).toBeCalledWith(1, 2);
  });
  it('2', done => {
    setTimeout(() => {
      done()
    }, 1000)
  });
});
