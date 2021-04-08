'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        coachId: 1,
        teamId: 1,
        title: "How do I get my mind right for racing?",
        post:"In order to get into the best mindset before racing, I recommend meditation. In just 5 minutes, if can help you get in the right mindset for the best performant. I prefer apps like headspace and peloton!",
        postMedia: "https://teamsightposts.s3.us-east-2.amazonaws.com/posts/postPhotos/meditation.jpeg"
      },
      {
        coachId: 1,
        teamId: 1,
        title: "What should I eat before a race?",
        post:"I would recommend eating a light meal the morning before a race. Everyone likes different thigs, but some light and balanced would be your best bet!",
        postMedia: "https://teamsightposts.s3.us-east-2.amazonaws.com/posts/postPhotos/nutrition.jpeg"
      },
      {
        coachId: 1,
        teamId: 1,
        title: "Check out this technique!",
        post:"Look at this perect high elbow freestyle",
        postMedia: "https://teamsightposts.s3.us-east-2.amazonaws.com/posts/postPhotos/swimmer.jpeg"
      },
      {
        coachId: 1,
        teamId: 1,
        title: "What is a quick tip for recovering faster after practice?",
        post:"In order to recover faster, try stretching for 15 minutes after practice. Here is a video to some great stretches!",
        postMedia: "https://teamsightposts.s3.us-east-2.amazonaws.com/posts/postPhotos/stretching.jpeg"
      },
      {
        coachId: 1,
        teamId: 1,
        title: "Lets have a great practice today!",
        post:"Don't forget about your goals! Your hardwork now will payoff at the big meet!",
        postMedia: "https://teamsightposts.s3.us-east-2.amazonaws.com/posts/postPhotos/taper.jpeg"
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
