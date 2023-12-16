const express = require('express')
const app = express();
const getElementByTitle = (title, elementList) => {
  return elementList.find((element) => {
    return element.title === title;
  });
};

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/budget', (req, res, next) => {
    res.send('Hello World')
})
app.get('/budget/envelope', (req, res, next) => {
  if(req.query.title) {
    const foundTitle = getElementByTitle(req.query.title, envelope);
    res.send(foundTitle);
  } else {
  res.send(envelope)
  }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });