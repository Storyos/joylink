CREATE TABLE
  freeboard (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT,
    author TEXT,
    date date
  );