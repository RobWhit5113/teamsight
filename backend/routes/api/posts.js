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
  let completePost
  if(req.file){
    const postMedia = await singlePublicFileUpload(req.file)
    completePost = await Post.create({coachId, teamId, title, post, postMedia, externalLink})
  }else {
    completePost = await Post.create({coachId, teamId, title, post, externalLink})
  }
  return res.json({completePost})
}))

//edit a post
router.patch('/:id', 
singleMulterUpload("postMedia"),
asyncHandler(async(req,res) => {
  const id = req.params.id
  const {coachId, teamId, title, post, externalLink} = req.body
  let completePost = await Post.findByPk(id)
  if(req.file) {
    const postMedia = await singlePublicFileUpload(req.file)
    await completePost.update({coachId, teamId, title, post, postMedia, externalLink})
  } else {
    await completePost.update({coachId, teamId, title, post, externalLink})
  }

  return res.json({completePost})
}))

//delete a post
router.delete('/:id', async(req,res) => {
  const id = req.params.id
  await Post.destroy({where: {id}})
  return res.json({message: "Success!"})
})

module.exports = router