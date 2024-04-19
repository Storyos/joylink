const dbConnect = require('../config/dbConnect');
const { use } = require('../routes/sign');

// DB의 supabase들고올때 할거
const supabase = dbConnect();

// 일반 회원가입
async function signUp(req, res) {
    const userdata = req.body;
    console.log('userdata :>> ', userdata);
    // 회원가입 (AUTH에서 진행됨)
    const { data, error } = await supabase.auth.signUp(
        {
            email: userdata.email,
            password: userdata.password,
        }
    )
    if (error) console.error(error);
    else {
        // 여기서 email 인증해주세요
        // supabase
        // .from('users')
        // .insert({
        //     user_id : email,
        //     user_name : userdata.user_name,
        //     user_pn : userdata.user_pn,
        //     user_birth: userdata.user_birth,
        //     user_gender :userdata.user_gender,
        //     // user_verified :
        // })
        console.log('data :>> ', data);
        res.status(201).json({ success: true, message: '회원 가입 중'});
    }
}


// 이메일 인증 후 추가 정보 입력 페이지에서 정보 제출 처리
async function saveAdditionalUserInfo(useremail, additionalInfo) {
    const { data, error } = await supabase
        .from('users')
        .insert(additionalInfo)
        .match({ email: useremail });
}

// 사용자의 추가정보를 입력하여, table저장을 호출
function handleSubmit(additionalInfo) {
    const userdata = supabase.auth.getUser().data;
    const useremail = userdata.email;
    // if(userda)
    saveAdditionalUserInfo(useremail, additionalInfo);
}


module.exports = { signUp,handleSubmit,saveAdditionalUserInfo };