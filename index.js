const express = require('express');
const exercises = require('./exercises.json');
const handleId = require('./handleId.js');


const app = express();

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


app.listen(3000, () => {
  console.log('server started');
});
