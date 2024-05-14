const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const fs = require('fs');

app.use(bodyParser.json());

var todos = []

app.get('/todos', (req, res) => {
    fs.readFile("todos.json", "utf8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
})

app.get('/todos/:id', (req, res) => {
    fs.writeFile("todos.json", 'utf8', (err, data) => {
        let id = parseInt(req.params.id);
        let todo = todos.findIndex(t => t.id === id)
        if (err) throw err;
        res.json(JSON.parse(todos[todo]));
    })
})

app.post('/todos', function (req, res) {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000), // unique random id
        title: req.body.title,
        description: req.body.description
    };
    fs.readFile("todos.json", "utf8", (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
            if (err) throw err;
            res.status(201).json(newTodo);
        });
    });
});

app.put('/todos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let todoIndex = todos.findIndex(t => t.id === id)
    if (todoIndex !== -1) {
        todos[todoIndex].title = req.body.title,
            todos[todoIndex].description = req.body.description
        console.log(todos[todoIndex])
        res.send(todos[todoIndex])
    } else {
        res.status(404).send()
    }
})

app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    } else {
        todos.splice(todoIndex, 1);
        res.status(200).send("ToDo removed successfully");
    }
});

app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


module.exports = app;