const express = require('express');
const app = express();
const PORT = 5000;

// Basic route
app.get('/', (req, res) =>{
    res.send('Hello worldddddddd!');
});

//Start the server
app.listen(PORT, () =>{
    console.log('Server is running on http://localhost:${5000}');
});