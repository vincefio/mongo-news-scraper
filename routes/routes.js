//scraping tools
var request = require("request");
var cheerio = require("cheerio");

var Article = require('../models/Article')


module.exports = function(router) {

	router.get("/", function(req, res){
		Article.find({}, function(err, doc) {
		if (err) {
			res.send(err);
		}

		else{
			res.render("home", {article: doc} );
		}
		});
		// res.render("home")
	})

	// This route renders the saved handledbars page
  router.get("/saved", function(req, res) {
    res.render("saved");
  });

  router.get('/scrape', function(req, res){
  	// First, we grab the body of the html with request
  request("http://www.blabbermouth.net/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $("h1.newsh1").each(function(i, element) {

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this).children("a").text();
      result.link = "http://www.blabbermouth.net" + $(this).children("a").attr("href");

      // Using our Article model, create a new entry
      // This effectively passes the result object to the entry (and the title and link)
      var entry = new Article(result);

      // Now, save that entry to the db
      entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

    });
  });
  // Tell the browser that we finished scraping the text
  res.redirect("/");
  })

	





}