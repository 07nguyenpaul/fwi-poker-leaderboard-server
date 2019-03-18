CREATE TABLE IF NOT EXISTS "users"(
  "id"                              SERIAL            PRIMARY KEY  NOT NULL,
  "firstName"                       VARCHAR(100)      NOT NULL,
  "lastName"                        VARCHAR(100)      NOT NULL,
  "earnings"                        INT,
  "country"                         VARCHAR(100)      NOT NULL,
  "createdAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP
);
