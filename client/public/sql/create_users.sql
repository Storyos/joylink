CREATE TABLE
  users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id TEXT,
    user_name TEXT,
    user_pn TEXT,
    user_birth TEXT,
    user_gender TEXT,
    user_email_verified bool DEFAULT FALSE
  );