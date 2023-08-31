import isHealthty from '../health';

test.each([
  [70, 'healthy'],
  [50, 'wounded'],
  [15, 'wounded'],
  [10, 'critical'],
  [0, ''],
  [-5, ''],
])('testing isHealthty function with %i health', (health, expected) => {
  const result = isHealthty({ health });
  expect(result).toBe(expected);
});
