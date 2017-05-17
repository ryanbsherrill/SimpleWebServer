const express = require('express');
const svr = express();

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
			console.log(`${firstName}: Hello, Express!`);
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

svr.listen(3000);
