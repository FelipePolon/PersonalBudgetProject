const express = require('express')
const app = express();

const { envelope } = require('./EnvelopeBudgeting');

const getElementByTitle = (title, elementList) => {
  return elementList.find((element) => {
    return element.title === title;
  });
};

const getIndexByTitle = (title, elementList) => {
  return elementList.findIndex((element) => {
    return element.title === title;
  });
};

let cont = 0;

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

app.post('/budget/create', (req, res, next) => {
  cont = cont + 1
  const newBudget = {
    title: req.query.title,
    envelope: req.query.envelope,
    id: cont
  };
  if (newBudget.title && newBudget.envelope) {
    envelope.push(newBudget);
    res.send(newBudget);
  } else {
    res.status(404).send();
  }
});

app.delete('/budget/delete', (req, res, next) => {
  const foundTitle = getIndexByTitle(req.query.title, envelope);
  if (foundTitle !== -1) {
    envelope.slice(0, foundTitle);
    res.status(204).send()
  } else {
    res.status(404).send()
  }
});

app.put('/budget/update', (req, res, next) => {
  const foundTitle = getIndexByTitle(req.query.title, envelope);
  if (foundTitle !== -1) {
    envelope[foundTitle].envelope= req.query.envelope
    console.log(envelope[foundTitle])
    res.status(200).send(envelope[foundTitle])
  } else {
    res.status(404).send()
  }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });