const express = require('express');
const { User, Survey } = require('../../db/models');
const { Op } = require("sequelize");

const router = express.Router()

//get the surveys for the specific day 
router.get('/:teamId', async (req,res) => {
    const today = new Date()
    console.log(">>>>>>>>>>>>>>>>",today.getDate())
    const teamId = req.params.teamId
    const todaySurveys = await Survey.findAll({
      where: { 
        createdAt: {
          [Op.eq]: today.getDate()
        }
      }
    })
    return res.json(todaySurveys)
})

module.exports = router