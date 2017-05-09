const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
const mailer = require('express-mailer');
const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

var env = process.env.NODE_ENV || 'development';
// get config object which contains the system settings
var config = require('./config')[env];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup mailer
mailer.extend(app, {
  from: config.mailer.from,
  host: config.mailer.host, 
  secureConnection: config.mailer.isSecure, // use SSL 
  port: config.mailer.port, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: config.mailer.from,
    pass: config.mailer.pass
  }
});

// Setup view engine for the email template
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-requested-with");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/contactus', (req, res) => {
	data = JSON.stringify(req.body);
	app.mailer.send('email', {
		to: 'vladpovalii@gmail.com',//config.mailer.to, // REQUIRED. This can be a comma delimited string just like a normal email to field.  
		subject: 'Form data', // REQUIRED. 
		name: data.name,
		email: data.email,
		surname: data.phone,
		phone: data.place,
		message: data.denomination
	}, function (err) {
		if (err) {
			// handle error 
			console.log(err);
			res.json({
				success: false,
				error: err
			});
			return;
		}
		res.json({success: true});
	});
});

module.exports = app;
