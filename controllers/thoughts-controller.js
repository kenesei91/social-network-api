// Require Thoughts and User Models
const {Thoughts, User} = require('../models');

// Set up Thoughts Controller
const thoughtsController = {
    // create new thought
    createThoughts({params, body}, res) {
        Thoughts.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({message: 'No thoughts with this id!'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
    },

    // get all thoughts
    getAllThoughts(req,res) {
        Thoughts.find({})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // get thought by id
    getThoughtsById({params}, res) {
        Thoughts.findOne({ _id: params.id })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
            res.status(404).json({message: 'No thoughts with this id!'});
            return;
        }
        res.json(dbThoughtsData)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // update thought by id
    updateThoughts({params, body}, res) {
        Thoughts.findOneAndUpdate({_id: params.id}, body, { new: true })
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({message: 'No thoughts with this id!'});
                return;
            }
                res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },

    // delete thought by id
    deleteThoughts({params}, res) {
        Thoughts.findOneAndDelete({_id: params.id})
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({message: 'No thoughts with this id!'});
                return;
            }
            res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },


};

// Export module thought controller
module.exports = thoughtsController;
