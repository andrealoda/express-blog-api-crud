const posts = require('../data/posts');

// INDEX DEI POST
const index = (req, res) => {
    const { tag } = req.query;

    if (tag) {
        // filter the posts that contain the tag
        const filteredPosts = posts.filter(post => post.tags.includes(tag));
        return res.json(filteredPosts);
    }

    return res.json(posts);
}


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
    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        ...req.body
    }

    posts.push(newPost);
    res.status(201).json(newPost);
    console.log(posts);

};

// UPDATE DI UN POST ESISTENTE // PUT
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
    const thisPost = posts.find(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const index = posts.indexOf(thisPost);
    posts.splice(index, 1);
    res.status(200).json({ message: `Post numero ${postId} eliminato con successo` });
    console.log(posts);

};


module.exports = {
    index,
    show,
    store,
    update,
    patch,
    destroy
};