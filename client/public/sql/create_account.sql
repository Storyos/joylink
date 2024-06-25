CREATE TABLE account (
    account_num VARCHAR PRIMARY KEY,
    account_name VARCHAR NOT NULL,
    account_owner VARCHAR UNIQUE REFERENCES users(user_id),
    account_bnan VARCHAR NOT NULL,
    account_bal BIGINT DEFAULT 0 NOT NULL,
    club_seq INT DEFAULT nextval('account_club_seq_seq'::regclass) NOT NULL REFERENCES clubs(club_seq),
    balance INT NULL
);
