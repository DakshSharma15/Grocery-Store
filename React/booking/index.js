// const express = require('express')
// const route = require('./route')
// const app = express()
// const port = 3000
// app.use(express.json());


//   app.use('/',route);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

require('dotenv').config(); // Load environment variables from a .env file

const express = require('express');
const cors = require('cors');
const route = require('./route');
const app = express();
const port = process.env.PORT || 3000; // Use PORT from environment variables, default to 3000

app.use(express.json());
app.use(cors());

// Use routes from the route file
app.use('/', route);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

