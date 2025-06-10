// 安装依赖：npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let storedData = { text: '' }; // 临时存储数据

// 保存数据接口
app.post('/save', (req, res) => {
  storedData.text = req.body.text;
  res.send('保存成功');
});

// 获取数据接口
app.get('/data', (req, res) => {
  res.json(storedData);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});