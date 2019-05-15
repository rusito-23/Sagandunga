const model = require('../../model');
const mongoose = require('mongoose');
const router = require('express').Router();

// DELETE
router.post('/delete/:id', (req, res, next) => {
    model.User.findOneAndDelete({_id: mongoose.Schema.ObjectId(req.params.id)})
    .then(function () {
        res.send('OK');
    }).catch(err => next(err))
});

module.exports = router;
