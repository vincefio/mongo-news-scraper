


module.exports = function(router) {

	// This route renders the saved handledbars page
	  router.get("/saved", function(req, res) {
	    res.render("saved");
	  });

	router.get("/", function(req, res){
		res.render("home")
	})

	





}