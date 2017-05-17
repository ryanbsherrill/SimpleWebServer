const express = require('express');
const svr = express();

svr.use(express.static(__dirname+'/public'));

svr.get('/', (req, res) => {
	res.send({
		firstName: 'John',
		lastName: 'Smith',
		age: 30,
		engineer: true,
		skills: [
			'C++','JavaScript','HTML','CSS','jQuery','Node.js','Express','MongoDB','React',
		],
		sayHello(){
			console.log('Hello, Express!');
		},
	});
});

svr.get('/about', (req, res) => {
	res.send('<h1>About Page</h1>');
});

svr.get('/bad', (req, res) => {
	res.send({
		error: 'ERROR => Unable to fulfill request'
	});
});

svr.listen(3000, () => {
	console.log('Server is up on port 3000');
});