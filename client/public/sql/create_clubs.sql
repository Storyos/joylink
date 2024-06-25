CREATE TABLE
  clubs (
    club_seq BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    club_nm varchar,
    club_est_dt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    club_fee BIGINT,
    club_ctg TEXT CHECK(category IN('스포츠', '예술,미술', '학술','반려동물','경제','영화')),
    user_seq BIGINT REFERENCES users (user_seq),
    club_st TEXT CHECK(club_st IN('RUNNING','DORMANT','DELETED')),
    club_url
    club_fee BIGINT,
  );