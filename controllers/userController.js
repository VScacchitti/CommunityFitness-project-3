const db = require('../models/user');

module.exports = {
    findOne: function(req, res) {
      db.User
        .find(req.params.email)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByIdAndDelete: function(req, res) {
      db.User
        .findByIdAndDelete(req.user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.User
        .findById(req.user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
