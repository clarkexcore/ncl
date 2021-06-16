const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// API Master Router
const indexRouter = require('./routes/index');


const app = express();

// Connect the Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// API Link
app.use('/api/', indexRouter);


// Server Static assets in production
if(process.env.NODE_ENV === 'production'){
    //Set Static Folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));