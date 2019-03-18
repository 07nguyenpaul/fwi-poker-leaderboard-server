if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // eslint-disable-line import/no-extraneous-dependencies, global-require
}

const clearDB = require('../lib/clearDB');

const User = require('../models/user');

clearDB().then(async () => {
  const daniel = await User.create({
    firstName: 'Daniel',
    lastName: 'Negreanu',
    earnings: 34151327,
    country: 'USA',
  });

  const erik = await User.create({
    firstName: 'Erik',
    lastName: 'Seidel',
    earnings: 33333457,
    country: 'GHA',
  });

  const john = await User.create({
    firstName: 'John',
    lastName: 'Juanda',
    earnings: 23418600,
    country: 'ID',
  });

  const users = [daniel, erik, john];

  /* eslint-disable no-console */
  console.log('Created users:');
  console.log(users.map(user => `  ${user.firstName} has a total earnings of ${user.earnings}`).join('\n'));
  console.log();
  console.log('***********************************************');
  /* eslint-enable no-console */
  await process.exit();
});
