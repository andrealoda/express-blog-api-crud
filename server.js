const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server del mio blog');
});


const posts = [
    {
        id: 1,
        title: 'Ciambellone',
        content: 'Questo il ciambellone più buono del mondo',
        image: 'http://localhost:3000/img/ciambellone.jpeg',
        tag: ['torta', 'ciambellone']
    },
    {
        id: 2,
        title: 'Cracker di barbabietola',
        content: 'Questi cracker di barbabietola sono buonissimi',
        image: 'http://localhost:3000/img/cracker_barbabietola.jpeg',
        tag: ['snacks', 'cracker']
    },
    {
        id: 3,
        title: 'Pane Fritto Dolce',
        content: 'Il pane fritto dolce è una delizia da provare',
        image: 'http://localhost:3000/img/pane_fritto_dolce.jpeg',
        tag: ['pane', 'dolce']
    },
    {
        id: 4,
        title: 'Pasta di barbabietola',
        content: 'La pasta di barbabietola è un piatto colorato e gustoso',
        image: 'http://localhost:3000/img/pasta_barbabietola.jpeg',
        tag: ['pasta', 'barbabietola']
    },
    {
        id: 5,
        title: 'Torta paesana',
        content: 'La torta paesana è una delizia da provare',
        image: 'http://localhost:3000/img/torta_paesana.jpeg',
        tag: ['torta', 'paesana']
    }

];


app.get('/bacheca', (req, res) => {
    res.json(posts);
});
