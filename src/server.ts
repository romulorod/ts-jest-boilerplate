const api = require('./app');

api.listen(3001, () => {
  console.log('Server is running on port 3001');
})