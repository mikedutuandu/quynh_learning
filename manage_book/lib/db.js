var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'192.168.99.100',
	user:'root',
	password:'root',
	database:'quanlysach'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;