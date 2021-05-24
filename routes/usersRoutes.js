const router = require('express').Router();
const { postNewUser, getUser, postNewExercise, getUserLogs } = require('../controllers/userController');

// POST new user
router.post('/users', postNewUser);

// GET users array
router.get('/users', getUser);

// POST new exercise
router.post('/users/:_id/exercises', postNewExercise);

// GET exercise logs
router.get('/users/:_id/logs', getUserLogs);

module.exports = router;