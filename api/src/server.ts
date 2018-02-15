import { App } from './app';

const {
  PORT = 3001,
  MONGODB_URI = 'mongodb://localhost:27017/Donors',
} = process.env;

const { app } = new App({ MONGODB_URI });

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
