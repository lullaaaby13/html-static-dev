const express = require('express');
const livereload = require('livereload');
const livereloadMiddleware = require('connect-livereload');
const path = require('path');
const app = express();

const liveServer = livereload.createServer({
    // 변경시 다시 로드할 파일 확장자들 설정
    exts: ['html', 'css', 'ejs'],
    debug: false
});

liveServer.watch(path.resolve(__dirname, '../','public'));
app.use(livereloadMiddleware());
app.use(express.static('public'));

app.listen(8080);
