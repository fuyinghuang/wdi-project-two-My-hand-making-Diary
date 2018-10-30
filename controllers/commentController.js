const Handmade = require('../models/handmade');
function createCommentRoute(req, res) {
  console.log(req.body);
  console.log(req.params.id);
  Handmade.findById(req.params.id)
    .then(handmade => {
      console.log('Creating a comment!', handmade, req.body);
      handmade.comments.push(req.body);
      handmade.save().then(() => res.redirect(`/handmades/${handmade.id}`));
    });
}

function deleteCommentRoute(req, res) {
  console.log('Deleting comment', req.params.handmadeId);
  Handmade.findById(req.params.handmadeId)
    .then(handmade => {
      handmade.comments.id(req.params.handmadeId).remove();
      handmade.save()
        .then(() => res.redirect(`/comments/${req.params.handmadeId}`));
    });
}

module.exports = {
  createCommentRoute: createCommentRoute,
  deleteCommentRoute: deleteCommentRoute
};
