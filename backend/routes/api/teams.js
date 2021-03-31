const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { Team } = require('../../db/models');
const { route } = require('./users');

const router = express.Router();

router.post(
  '/',
  asyncHandler(async(req,res) => {
   const {teamName, teamLogo, location} = req.body
    const team = await Team.create({teamName, teamLogo, location});
    return res.json({team})
  })
)




module.exports = router;