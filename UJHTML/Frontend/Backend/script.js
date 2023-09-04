document.getElementById('fetchData').addEventListener('click', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = `Data from Backend: ${data.message}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a simple API endpoint
app.get('/api/data', (req, res) => {
    const responseData = {
        message: 'Hello from Backend!'
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});