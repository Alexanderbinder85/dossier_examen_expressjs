const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');

// app.engine('.html', require('ejs').__express);
app.engine('.html', ejs.__express);
app.set('view engine', 'ejs');

// function errorHandler (err,req, res, next) {
//   console.log("I am a Midelware");
//   const errOjct = new Error("I am a error!");

//   next(err);
// //  if(err){
// //    res.send('<h1> You got bad ass error</h1>');
// //  }
//   // res.status(500)
//   // res.render('error', { error: err })
// }

// app.use(errorHandler);

function catchError(err,req, res, next) {
  if(err){
  res.send('h1> You got bad ass error</h1>')
  }
}

app.use(catchError);





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



// function errorHandler (req, res, next) {
//   console.log("I am a Midelware");
// //  if(err){
// //    res.send('<h1> You got bad ass error</h1>');
// //  }
//   // res.status(500)
//   // res.render('error', { error: err })
// }

// app.use(errorHandler);

// app.use(catchError);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})