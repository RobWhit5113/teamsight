const express = require('express');
const { Post } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

const router = express.Router()

//get all of the posts for a team 
router.get('/:teamId', async(req,res) => {
  const teamId = req.params.teamId

  const posts = await Post.findAll({
    where: {teamId}
  })

  return res.json(posts)
})

//create a new post
router.post('/', 
  singleMulterUpload("postMedia"),
  asyncHandler(async(req,res) => {
  const {coachId, teamId, title, post, externalLink} = req.body
  const postMedia = await singlePublicFileUpload(req.file)
  const completePost = await Post.create({coachId, teamId, title, post, postMedia, externalLink})
  return res.json({completePost})
}))

module.exports = router