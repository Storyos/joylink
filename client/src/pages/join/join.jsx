

export default function Join() {
  return (
    <>
        <form>
          <input type="text" id="username" name="username" placeholder="아이디" required />
          <br />
          <input type="password" id="password" name="password" placeholder="비밀번호" required />
          <br />
  
          <input type="text" id="name" name="name" placeholder="이름" required />
          <br />
  
          <input type="num" id="number" name="number" placeholder="전화번호" required />
          <br />
  
          <button type="submit">회원가입</button>
        </form>
    </>
  );
}

