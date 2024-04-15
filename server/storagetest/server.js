// server.js

const express = require('express');
const app = express();

// 브라우저에 환경 변수 전달
app.get('/config', (req, res) => {
  res.json({
    SUPABASE_ANON_KEY: process.env.ANON_KEY,
    SUPABASE_PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.BUCKET,
    BEARER_TOKEN: process.env.TOKEN
  });
});

// 서버 실행
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
