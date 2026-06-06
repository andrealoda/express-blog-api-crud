const posts = require('../data/posts');

// INDEX DEI POST
const index = (req, res) => {
    res.json(posts);
    console.log(posts);
};

// SHOW DI UN SINGOLO POST
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(thisPost);
};

// STORE DI UN NUOVO POST
const store = (req, res) => {
    res.json({ message: 'Creazione di un nuovo post' });
};

// UPDATE DI UN POST ESISTENTE
const update = (req, res) => {
    res.json({ message: "Aggiornamento del post by id" });
};

// MODIFICA DI UN POST ESISTENTE
const patch = (req, res) => {
    res.json({ message: "Modifica del post by id" });
};

// DELETE DI UN POST ESISTENTE
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const thisPost = posts.findIndex(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: 'Post not found' });
    }

    posts.splice(thisPost, 1);
    res.json({ message: 'Post eliminato con successo' });
};


module.exports = {
    index,
    show,
    store,
    update,
    patch,
    destroy
};