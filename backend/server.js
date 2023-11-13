const express = require('express');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express()

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

app.get('/api/goals', (req,res) => {
    res.status(200).json({message: 'Get Goals'})
});

app.post('/api/goals', (req,res) => {
    res.status(200).json({message: 'Set Goal'})
});

app.put('/api/goals/:id', (req,res) => {
    res.status(200).json({message: `Update Goal {:id}`})
});

app.delete('/api/goals/:id', (req,res) => {
    res.status(200).json({message: 'Delete Goal'})
});