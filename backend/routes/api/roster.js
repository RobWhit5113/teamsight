const express = require('express');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { User, Survey } = require('../../db/models');



const router = express.Router()

//get all swimmers on team 
router.get('/:teamId', async (req,res) => {
  const teamId = req.params.teamId
  const users = await User.findAll({
    where: {
      teamId
    },
    include: Survey,
    // order: ["Survey", "answerOne", "ASC"]
    
    
  })

  
  return res.json(users)
})

module.exports = router