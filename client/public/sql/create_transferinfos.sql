CREATE TABLE Transferinfos (
    transfer_id BIGINT PRIMARY KEY IDENTITY,
    transfer_type VARCHAR NOT NULL,
    transfer_counter VARCHAR NOT NULL,
    transfer_amount INT NOT NULL,
    transfer_desc VARCHAR NULL,
    transfer_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    account_num VARCHAR NOT NULL REFERENCES account(account_num),
    state TEXT DEFAULT 'pending' NULL
);
