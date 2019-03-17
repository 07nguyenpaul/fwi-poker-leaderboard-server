module.exports = user => {
  const serialized = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    earnings: user.earnings,
    country: user.country,
  };
  return serialized;
};
