const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');

// app.engine('.html', require('ejs').__express);
app.engine('.html', ejs.__express);
app.set('view engine', 'ejs');

function errorHandle(req, res, next) {
  //  Page not found
  if(res.status(404)){
    res.type('html').send('<h1 style="color: blue;">Hey Alex! An Error 404 page not found </h1>');
  }
  //  successfully added data 
  if(res.status(201)){
    res.type('html').send('<h1 style="color: green;">You add a new image </h1>');
  }
  
}

app.get("/home",(req, res) => {
  res.render('home',{title: "Home"});
});

app.get('/about', (req, res) => {
  res.render('about',{title: "about"});
})

app.get('/gallery', (req, res) => {
  res.render('gallery',{title: "Gallery"});
})

app.get('/ajouter', (req, res) => {
  res.render('ajouterImage',{title: "Ajouter unn Image"});
})

app.get('/', (req, res) => {
  res.render('login',{title: "Login"});
})

app.get('/wildcard/*', (req, res) => {

  let slug = req.params[0];
  res.render('wildcard',{
    title: "Express url/* wildcard",
    wildcard: slug
  });
})


app.get('/contact', (req, res) => {
  res.render('contact',{title: "Contact"});
})

app.use(errorHandle);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})