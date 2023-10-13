const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const port = process.env.PORT || 3000; // Use the specified port or a default one

// Enable CORS for all routes
app.use(cors());

// Define your API routes and other server logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});