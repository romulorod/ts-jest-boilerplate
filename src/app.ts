const app = require('express')();

app.get('/', (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (): void; new(): any; }; }; }) => {
  res.status(200).send();
})

module.exports = app;