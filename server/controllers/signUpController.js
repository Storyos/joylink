const dbConnect = require('../config/dbConnect');

// DB의 supabase들고올때 할거
const supabase = dbConnect();

// 일반 회원가입
async function signUp(req, res) {
    const userdata = req.body;
    console.log('userdata :>> ', userdata);
    const { data, error } = await supabase.auth.signUp(
        {
            email: userdata.email,
            password: userdata.password,
            options: {
                data: {
                    // 여기에 회원가입시에 입력될 사용자 정보
                    age: userdata.age,
                }
            }
        }
    )
    if (error) console.error(error);
    else {
        console.log('Sign up success, user data :>> ', data);
        res.status(201).json({ success: true, message: '회원 가입 성공', userData: data });
    }
}

module.exports = { signUp };