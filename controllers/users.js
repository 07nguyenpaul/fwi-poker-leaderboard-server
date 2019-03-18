const userSerializer = require('../serializers/user');
const User = require('../models/user');

exports.index = async (req, res) => {
  const users = await User.all();
  const serializedUsers = users.map(user => userSerializer(user));
  res.json({ users: await Promise.all(serializedUsers) });
};

exports.create = async (req, res, next) => {
  const user = await User.create(req.body);
  try {
    const serializedUser = await userSerializer(user);
    res.json({ user: serializedUser });
  } catch (e) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const user = await User.find(req.params.id);
    const serializedUser = await userSerializer(user);
    res.json({ user: serializedUser });
  } catch (e) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const taskFieldsToUpdate = { ...req.body };
    const updatedUserInfo = await User.update(taskFieldsToUpdate);

    const serializedUser = await userSerializer(updatedUserInfo);
    res.json({ user: serializedUser });
  } catch (err) {
    next(err);
  }
};
