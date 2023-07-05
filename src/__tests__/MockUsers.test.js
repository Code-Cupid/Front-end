import users from '../MockUsers.js';

describe('MockUsers', () => {
  it('should export an array of users', () => {
    expect(Array.isArray(users)).toBe(true);
  });

  it('should contain user objects with required properties', () => {
    users.forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('password');
    });
  });
});