import { getUser, getChat } from '../../src/server/api';

const localStorage = {};

describe('getUser', () => {
  it('gets a user by id', () => {
    expect(getUser(0)).toBe('Rob');
    expect(getUser(1)).toBe('Rob');
  });
});
