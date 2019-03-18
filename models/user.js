const { query } = require('../db/index');

exports.all = async () => {
  const users = (await query('SELECT * FROM "users"')).rows;
  return users;
};

exports.create = async properties => {
  const createdUser = (await query(
    `INSERT INTO "users"(
      "firstName",
      "lastName",
      "earnings",
      "country"
    ) values ($1, $2, $3, $4) returning *`,
    [
      properties.firstName,
      properties.lastName,
      properties.earnings,
      properties.country,
    ],
  )).rows[0];
  return createdUser;
};

exports.find = async id => {
  const user = (await query('SELECT * FROM "users" WHERE "id" = $1 LIMIT 1', [
    id,
  ])).rows[0];
  return user;
};

exports.update = async newProperties => {
  const oldProps = await this.find(newProperties.id);
  const properties = { ...oldProps, ...newProperties };

  const updatedUser = (await query(
    `UPDATE "users" SET
    "firstName"=$2,
    "lastName"=$3,
    "earnings"=$4,
    "country"=$5
    WHERE "id" = $1
    RETURNING *`,
    [
      properties.id,
      properties.firstName,
      properties.lastName,
      properties.earnings,
      properties.country,
    ],
  )).rows[0];
  return updatedUser;
};
