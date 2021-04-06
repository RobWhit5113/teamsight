const express = require('express');
const asyncHandler = require('express-async-handler');
const { Survey,User } = require('../../db/models');

const router = express.Router()

router.post(
  '/',
  asyncHandler(async(req,res) => {
    const survey = await Survey.create(req.body)
    return res.json({survey})
  })
)

// router.get('/', asyncHandler(async(req,res) => {
//   const surveys = await Survey.findAll({
//     order:[Survey, "answerOne", "asc"],
//     include: User
//   })

//   return res.json(surveys)
// }))

module.exports = router