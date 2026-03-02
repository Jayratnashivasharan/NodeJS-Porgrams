const express = require('C://Users//Home//node_modules//express'); // third party package
const path = require('path'); // core package
const app = express();
const PORT = 8090;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle the form submission (POST request)
app.post('/submit-form', (req, res) => {
    // Access the form data using req.body
    const UserName = req.body.uname;
    const Upass = req.body.upass;

    console.log(`Received data: ${UserName} ${Upass}`);

    // Send a response back to the user
    res.send(`
        <h2>Form Submitted Successfully!</h2>
        <p>Welcome, ${UserName} </p>
        <a href="/">Go back to Login Page</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});