const router = require('express').Router();
let User = require('./user.model');

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const expenses = req.body.expenses;
    const _id = req.body._id;
    const newUser = new User({username, expenses, _id});
    console.log(newUser);
    newUser.save()
        .then(() => { res.json(newUser) })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {

    User.find({'todos.datum': req.body.new.datum}, function (err, docs) {
        if (docs.length){
            console.log("existiert")
            User.updateOne({'todos.datum': req.body.new.datum }, {$set: {
                    'todos.$.bigThing': req.body.new.bigThing,
                    'todos.$.firstsmallThing': req.body.new.firstsmallThing,
                    'todos.$.secondsmallThing': req.body.new.secondsmallThing,
                    'todos.$.thirdsmallThing': req.body.new.thirdsmallThing
                }}, function (err) {
                console.log(err)
            })  .then(res.json("success"))
                .catch(err => res.status(400).json('Error: ' + err));
        }else{
            console.log('existiert nicht');
            User.findByIdAndUpdate(req.params.id)
                .then(user => {
                    user.todos.push(req.body.new);
                    user.save()
                        .then(() => res.json('Exercise Updatetd!'))
                        .catch(err => res.status(400).json('Error: ' + err));
                })
                .catch(err => res.status(400).json('Error: ' + err));
            }
        });


});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id/:index').post((req, res) => {
    User.findByIdAndUpdate(req.params.id)
        .then(user => {
            var expenseToRemove = user.expenses.find(obj => {
                return obj._id === req.params.index
            });
            user.expenses.remove(expenseToRemove);
            user.save()
                .then(() => res.json('Exercise Updatetd!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/category/:id/:category').get((req, res) => {
    User.findById(req.params.id)
        .then(users => {
            console.log("hiiiieeer");
           const categoryArray = users.expenses.filter(element => element.category === req.params.category);
           console.log(categoryArray);
            res.json(categoryArray)
            })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/datum/:id/:date').get((req, res) => {
    User.findById(req.params.id)
        .then(users => {
            const categoryArray = users.expenses.filter(element => (element.date.charAt(3) + element.date.charAt(4)) === (req.params.date))
            console.log(categoryArray.length);
            res.json(categoryArray)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;