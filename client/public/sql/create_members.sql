CREATE TABLE
  members (
    mem_seq BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_seq BIGINT REFERENCES users (user_seq),
    club_seq BIGINT REFERENCES clubs (club_seq),
    club_position TEXT,
     mem_st TEXT CHECK(mem_st IN('가입중', '탈퇴', 'NULL')),
    mem_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  );