const express = require('express');
const path = require('path');
const app = express();

// Routes
const routes = require('./server/routes/routes');



// Middleware
app.use(express.static(path.join(__dirname,'dist')));
app.use('/', routes);

// Catch all other routes request and return it to the index
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'dist/index.html'));
});



const port = process.env.PORT || 4600;
app.listen(port, (req, res)=> {
  console.log(`running on port ${port}`);
});
