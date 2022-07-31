const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');

app.use(express.static('public'));
/* app.use(express.static(path.join(__dirname, '/public/css'))); */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(helmet());
app.use(compression());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
