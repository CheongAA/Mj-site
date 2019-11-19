const router = require('express').Router();
let Notice = require('../models/notice.model');

router.route('/').get((req, res) => {
    Notice.find()
        .then(notice => res.json(notice))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {

    const userid = 'admin';
    const title = req.body.title;
    const contents = req.body.contents;
    const date = Date.parse(req.body.date);

    const newNotice = new Notice({
        userid,
        title,
        contents,
        date
    });

    newNotice.save()
        .then(() => res.json('Notice added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Notice.findById(req.params.id)
        .then(notice => res.json(notice))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//     Board.findByIdAndDelete(req.params.id)
//         .then(board => res.json('Board deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Board.findById(req.params.id)
//         .then(board => {
//             board.userid = req.body.userid;
//             board.title = req.body.title;
//             board.description = req.body.description;
//             board.date = Date.parse(req.body.date);

//             board.save()
//                 .then(() => res.json('Board updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });



module.exports = router;


