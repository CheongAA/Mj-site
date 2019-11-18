const router = require('express').Router();
let Board = require('../models/board.model');

router.route('/').get((req, res) => {
    Board.find()
        .then(board => res.json(board))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {

    const userid = req.body.userid;
    const title = req.body.title;
    const description = req.body.description;
    const views = Number(req.body.views);
    const date = Date.parse(req.body.date);

    const newBoard = new Board({
        userid,
        title,
        description,
        views,
        date,
    });

    newBoard.save()
        .then(() => res.json('Board added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Board.findById(req.params.id)
        .then(board => res.json(board))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Board.findByIdAndDelete(req.params.id)
        .then(board => res.json('Board deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Board.findById(req.params.id)
        .then(board => {
            board.userid = req.body.userid;
            board.title = req.body.title;
            board.description = req.body.description;
            board.views = Number(req.body.views);
            board.date = Date.parse(req.body.date);

            board.save()
                .then(() => res.json('Board updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;


