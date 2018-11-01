const Handmade = require('../models/handmade');
function createCommentRoute(req, res) {
  Handmade.findById(req.params.id)
    .then(handmade => {
      console.log('Creating a comment!', handmade, req.body);
      handmade.comments.push(req.body);
      handmade.save().then(() => res.redirect(`/handmades/${handmade.id}`));
    });
}


function deleteCommentRoute(req, res) {
  Handmade.findById(req.params.id)
    .then(handmade => {
      handmade.comments.id(req.params.commentId).remove();
      handmade.save()
        .then(() => res.redirect(`/handmades/${req.params.id}`));
    });
}

module.exports = {
  createCommentRoute: createCommentRoute,
  deleteCommentRoute: deleteCommentRoute
};
