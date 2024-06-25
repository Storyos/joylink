CREATE TABLE
  notifications (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    read bool,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_seq BIGINT REFERENCES users (user_seq),
    transfer_id BIGINT REFERENCES Transferinfos (transfer_id),
  );