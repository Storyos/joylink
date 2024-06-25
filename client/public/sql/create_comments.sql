CREATE TABLE
  comments (
    cmt_seq BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_seq BIGINT REFERENCES users (user_seq),
    post_seq BIGINT REFERENCES posts (post_seq),
    cmt_body TEXT,
    cmt_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  );