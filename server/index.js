const app = require('./app');
const config = require('./config/config');

const port = config.port || 3001;

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행중`);
});