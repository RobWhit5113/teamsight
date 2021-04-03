const express = require('express');
const asyncHandler = require('express-async-handler');
const { Survey } = require('../../db/models');

const router = express.Router()

router.post(
  '/',
  asyncHandler(async(req,res) => {
    const survey = await Survey.create(req.body)
    return res.json({survey})
  })
)

module.exports = router