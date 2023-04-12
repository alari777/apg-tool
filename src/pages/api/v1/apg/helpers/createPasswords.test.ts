import { createPasswords } from './createPasswords';

describe('testing function createPasswords()', () => {
  it('should return 6 values', () => {
    const result = createPasswords();
    expect(result).toHaveLength(6);
  });

  it('should return all values have length = 16', () => {
    const result = createPasswords('-m 16');
    expect(result).toHaveLength(6);
    expect(result[0]).toHaveLength(16);
    expect(result[1]).toHaveLength(16);
    expect(result[2]).toHaveLength(16);
    expect(result[3]).toHaveLength(16);
    expect(result[4]).toHaveLength(16);
    expect(result[5]).toHaveLength(16);
  });
});
