//db
// const db = require('../models')
const Workout = require("../models/workout.js")
const app = require('express');


//////Workout Routes//////
//get all
app.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
        })

});
//add excerise, set id, push to model, set true
app.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findOneAndUpdate(params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true },
    ).then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch(err => {
        res.json(err)
    })

});
//create new workout
app.post('/api/workouts', (req, res) => {
    Workout.create({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    }).catch(err => {
        res.json(err)
    })
});

app.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        }).catch(err => {
            res.json(err)
        })


})

module.exports = app