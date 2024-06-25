CREATE TABLE
  messages (
    msg_seq BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_title TEXT,
    msg_body TEXT,
    msg_send_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    msg_snd_seq BIGINT REFERENCES users (user_seq),
    msg_rcv_seq BIGINT REFERENCES users (user_seq),
    rcv_deleted bool DEFAULT FALSE,
    snd_deleted bool DEFAULT FALSE,
    read_messaged bool DEFAULT FALSE,
  );