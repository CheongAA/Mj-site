const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const userid = req.body.userid;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    const studentnum = req.body.studentnum;

    const newUser = new User({
        userid,
        password,
        name,
        email,
        studentnum
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const userid = req.body.userid;
    const password = req.body.password;

    User.find()
        .then(users => users.map(user => {
            if (user.userid == userid && user.password == password) {
                res.json(user);
            }
        }))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//     User.findById(req.params.userid)
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;


