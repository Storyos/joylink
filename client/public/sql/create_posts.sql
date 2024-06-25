CREATE TABLE
  posts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_seq BIGINT REFERENCES users (user_seq),
    club_seq BIGINT REFERENCES clubs (club_seq),
    post_title TEXT,
    post_body TEXT,
    post_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    post_atmt_url TEXT
  );