CREATE TABLE approvals (
    id INT PRIMARY KEY DEFAULT nextval('approvals_id_seq'::regclass),
    approved BOOL NULL,
    user_seq INT NULL REFERENCES users(user_seq),
    transfer_id BIGINT NULL REFERENCES Transferinfos(transfer_id)
);
