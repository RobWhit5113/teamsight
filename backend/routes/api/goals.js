const express = require('express');
const asyncHandler = require('express-async-handler');
const { Goal } = require('../../db/models');

const router = express.Router()

// get all of the goals
router.get('/:userId', async(req,res) => {
  const userId = req.params.userId

  const goals = await Goal.findAll({
    where: {
      userId
    }
  })
  return res.json(goals)
})

//post a new goal
router.post('/', async(req,res) => {
  const newGoal = await Goal.create(req.body)
  return res.json({newGoal})
})
module.exports = router