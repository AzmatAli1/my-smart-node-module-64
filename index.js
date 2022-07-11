const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello my smart over part!!');
});

const users = [
    { id: 1, name: 'anika', email: 'abc@gmail.com', phone: '017........' },
    { id: 2, name: 'monika', email: 'monika@gmail.com', phone: '017........' },
    { id: 3, name: 'ranika', email: 'ranika@gmail.com', phone: '017........' },
    { id: 4, name: 'sanika', email: 'sanika@gmail.com', phone: '017........' },
    { id: 5, name: 'banika', email: 'banika@gmail.com', phone: '017........' },
    { id: 6, name: 'panika', email: 'panika@gmail.com', phone: '017........' },
    { id: 7, name: 'danika', email: 'danika@gmail.com', phone: '017........' },
]

app.get('/user', (req, res) => {
    //filter by search query
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana', 'pina-alp', 'oranges']);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits/mango/fzle', (req, res) => {
    res.semd('sour or misti fazle tour');
})


app.listen(port, () => {
    console.log('listening to port!!!', port);
})