const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name : "Vishal",
        phone : "1234569870"
    },
    {
        name : "Aditi",
        phone: "1235942002"
    },
    {
        name : "Aditya",
        phone : "1203205878"
    }
]


app.get('/', function(req, res){
    return res.render('home', {title : "Contact List",
    contact_list: contactList
    }); 
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        title: "Let us play with ejs"
    });
}); 

app.post('/create-contact', function(req, res){
    return res.redirect('/practice');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup My Express server is ruuning on port:', port);

})