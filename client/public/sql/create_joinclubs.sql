CREATE TABLE
  joinclubs (
    jc_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_seq BIGINT REFERENCES users (user_seq),
    club_seq BIGINT REFERENCES clubs (club_seq),
    jcRst TEXT CHECK(Rst IN('allowed', 'rejected', 'waiting')),
    jc_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  );