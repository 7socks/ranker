import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});