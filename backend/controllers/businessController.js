const mysql = require('mysql');
const connection = require('../config/dbConfig');


// Create a new business entry
const createBusiness = (req, res) => {
    const { name,business_name, email,  website } = req.body;

    if (!name || !email || !business_name || !website) {
        return res.status(400).send('All fields are required.');
    }

    const query = 'INSERT INTO businesses (name, business_name, email, website) VALUES (?, ?, ?, ?)';
    connection.query(query, [name,business_name, email, website], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).send('Business created successfully.');
    });
};

        module.exports = {
            createBusiness
        };