const express = require('express');
const { Post } = require('../../db/models');

const router = express.Router()

//get all of the posts for a team 
router.get('/:teamId', async(req,res) => {
  const teamId = req.params.teamId

  const posts = await Post.findAll({
    where: {teamId}
  })

  return res.json(posts)
})

module.exports = router