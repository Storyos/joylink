const { text } = require('express');
const dbConnect = require('../config/dbConnect');

// DB의 supabase들고올때 할거
const supabase =  dbConnect();

// Data Insert문
async function insertQuery() {
    try{
    await supabase
        .from('test1')
        .insert({
            text: "Sample Text"
        });
        console.log("Data INserted");
    }
    catch(error) {
        console.error(error);
    }
}

// Data delete문
async function deleteQuery(text) {
    const { error } = await supabase
    .from('test1')
    .delete()
    .eq('text',text);
    if(error) {
        console.error(`${error}에러 발생`);
    }
}

// 없으면 만들고 있으면 Update
async function upsertQuery(query){
    const {error} = await supabase
    .from('test1')
    .upsert({text : query})
    .select();
}

// 해당 값을가진 data를 찾음
async function selectQuery(col,value){
    const {data,error} = await supabase
    .from('test1')
    .select('text')
    .eq(col,value)
    // 같지 않은 것을 찾을 때는 neq
    // 더 클때는 .gt (greater than) gte는 이상
    // 더 작을때는 .lt (less than) lte 는 이하
    // 패턴은 like('name','%Fr%')
    // NUll or TF 일때는 is('name',null)
    // 배열안에 있는지 확인할때는 in('name',['a','b'])
    console.log(data);
}

function selectQueryWrap(req,res,next){
    const col = 'id';
    const value = 12;

    selectQuery(col,value)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
}



module.exports = {insertQuery,upsertQuery,deleteQuery,selectQueryWrap};