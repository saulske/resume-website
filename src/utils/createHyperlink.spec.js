import { createHyperlink } from './createHyperlink';

describe('createHyperlink', () => {
  it('should return empty prefix', () => {
    expect(createHyperlink('', 'example.com')).toBe('example.com');
  });

  it('should return email prefix', () => {
    expect(createHyperlink('email', 'example.com')).toBe('mailto:example.com');
  });

  it('should return phone prefix', () => {
    expect(createHyperlink('phone', 'example.com')).toBe('tel:example.com');
  });

  it('should return website prefix', () => {
    expect(createHyperlink('website', 'example.com')).toBe(
      'https://example.com'
    );
  });
});
