import colors from './colors';

describe('colors', () => {
  it('should have keys', () => {
    expect(colors).toHaveProperty('primary');
    expect(colors).toHaveProperty('secondary');
    expect(colors).toHaveProperty('meta');
  });
});
