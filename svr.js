const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const svr = express();

hbs.registerPartials(`${__dirname}/views/partials`);
svr.set('view engine', 'hbs');

svr.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', `${log}\n`, (err) => {
		if (err) {
			console.log('Unable to append server.log');
		}
	});
	next();
});

// svr.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

svr.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

svr.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome to Some Website!',
	});
});

svr.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
});

svr.get('/bad', (req, res) => {
	res.send({
		error: 'ERROR => Unable to fulfill request'
	});
});

svr.listen(3000, () => {
	console.log('SUCCESS => Server is up on port 3000');
});