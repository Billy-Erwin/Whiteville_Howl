var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'williamcerwin@gmail.com',
		pass: ''
	}
});

var mailOptions = {
	from: 'williamcerwin@gmail.com',
	to: 'billycerwin@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});