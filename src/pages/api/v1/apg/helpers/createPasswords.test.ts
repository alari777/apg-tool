import { createPasswords } from './createPasswords';

describe('testing function createPasswords()', () => {
  it('should return 6 values', () => {
    const result = createPasswords();
    expect(result).toHaveLength(6);
  });
});
