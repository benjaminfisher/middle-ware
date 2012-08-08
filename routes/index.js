
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Homepage' });
};

exports.dir = function(req, res){
  res.render('dir', { title: 'Web Directory'});
}