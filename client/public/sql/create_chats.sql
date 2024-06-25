CREATE TABLE chats (
    chat_seq INT PRIMARY KEY DEFAULT nextval('chats_chat_seq_seq'::regclass),
    club_seq INT REFERENCES clubs(club_seq),
    user_seq INT REFERENCES users(user_seq),
    chat_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chat_content VARCHAR NOT NULL
);
