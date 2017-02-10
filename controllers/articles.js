const Article = require('../models/article');

function articlesIndex(req, res) {
  Article.find((err, articles) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(articles);
  });
}

function articlesCreate(req, res) {
  Article.create(req.body, (err, article) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(article);
  });
}

function articlesShow(req, res) {
  Article.findById(req.params.id, (err, article) => {
    if(err) return res.status(500).json({ error: err });
    if(!article) return res.status(404).json({ error: 'Not found' });
    return res.json(article);
  });
}

function articlesUpdate(req, res) {
  Article.findById(req.params.id, (err, article) => {
    if(err) return res.status(500).json({ error: err });
    if(!article) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      article[key] = req.body[key];
    }

    article.save((err, article) => {
      if(err) return res.status(400).json({ error: err });
      res.json(article);
    });
  });
}

function articlesDelete(req, res) {
  Article.findById(req.params.id, (err, article) => {
    if(err) return res.status(500).json({ error: err });
    if(!article) return res.status(404).json({ error: 'Not found' });

    article.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: articlesIndex,
  create: articlesCreate,
  show: articlesShow,
  update: articlesUpdate,
  delete: articlesDelete
};
