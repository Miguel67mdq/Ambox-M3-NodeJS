const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(express.static('public')); 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

const Listen_Port = 3000; 

app.listen(Listen_Port, function() {
    console.log('Server corriendo http://localhost:' + Listen_Port + '/');
});