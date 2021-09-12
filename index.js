const express = require('express');
const exercises = require('./exercises.json');
const handleId = require('./handleId.js');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Expose-Headers', '*')
  next();
})

app.get('/', (req, res) => {
	res.send("Index");
});

app.get('/exercises/:id', (req, res) => {
	const id = req.params.id;

	if ( handleId.isValid(exercises, id) ) {
		res.send(exercises.esercizi[id]);
	} else {
		res.status(406)
  	res.render('error', { error: 'There\'s an error' })
	}
});


app.listen(process.env.PORT || port, () => {
  console.log('server started');
});
