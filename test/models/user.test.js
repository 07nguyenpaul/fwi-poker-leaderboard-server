const expect = require('expect');

require('../helpers/testSetup');

const User = require('../../models/user.js');

describe('User', () => {
  it('can be created', async () => {
    const usersBefore = await User.all();
    expect(usersBefore.length).toBe(0);

    await User.create({
      firstName: 'Luke',
      lastName: 'Skywalker',
      earnings: 74913,
      country: 'AU',
    });
    const usersAfter = await User.all();
    expect(usersAfter.length).toBe(1);
  });

  it('can be updated', async () => {
    const originalUser = await User.create({
      firstName: 'Luke',
      lastName: 'Skywalker',
      earnings: 74913,
      country: 'AU',
    });
    const updatedUser = await User.update({
      id: originalUser.id,
      firstName: 'Luke',
      lastName: 'Skywalker',
      earnings: 74913,
      country: 'USA',
    });

    expect(updatedUser.firstName).toBe('Luke');
    expect(updatedUser.lastName).toBe('Skywalker');
    expect(updatedUser.earnings).toBe(74913);
    expect(updatedUser.country).toBe('USA');
  });
});
