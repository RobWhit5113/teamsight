const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { Team } = require('../../db/models');
const { route } = require('./users');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

const router = express.Router();

router.post(
  '/',
  singleMulterUpload("teamLogo"),
  asyncHandler(async(req,res) => {
   const {teamName, location} = req.body
   const teamLogoUrl = await singlePublicFileUpload(req.file)
   const team = await Team.create({teamName, teamLogoUrl, location});
    return res.json({team})
  })
)

router.get('/:teamId',
asyncHandler(async(req,res) => {
  const id = req.params.teamId
  const team = await Team.findByPk(id)
  return res.json(team)
})
)




module.exports = router;