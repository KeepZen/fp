const Pipeable = require('./pipeable');
const _ = Pipeable.placeHolder;
test('Pipeable(v)', () => {
  let z = Pipeable(1);
  expect(z == 1).toBe(true);
  expect(z === 1).toBe(false);
  const fn = jest.fn((a, b) => a + b);
  let b = z.pipe(fn, 2);
  expect(fn).toHaveBeenCalledWith(1, 2);
  expect(b.valueOf()).toBe(3);
  expect(b).toHaveProperty('pipe');
  expect(b).toHaveProperty('map');
  expect(typeof b.map).toBe('function');
  expect(Pipeable.of).toBe(Pipeable);
  let c = z.map(fn, 2, _, 3);
  expect(fn).toHaveBeenCalledWith(2, 1, 3);
  expect(c == 2 + 1).toBe(true);
})