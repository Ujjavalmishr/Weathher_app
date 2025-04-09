const express = require('express');
const app = express();

// Define routes
app.get('/api/data', (req, res) => {
    // Code to fetch and return data
    res.json({ message: 'Data from your API' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
