This application is designed to scrape news articles from blabbermouth.net, a rock music news outlet, and then populate the page from a MongoDB database.  The user can save articles that they enjoy, and they can also add notes to their saved articles if they choose.

The user first clicks the Scrape! button to scrape blabbermouth.net.  

![mongoose1](https://user-images.githubusercontent.com/25482392/29468228-6b88f47a-8411-11e7-8b61-dea1de6c84e1.png)

The home page is then populated with recent articles form the site.  The user can save any article they wish by clicking "Save Article"

![mongoose2](https://user-images.githubusercontent.com/25482392/29468230-6d366884-8411-11e7-94c2-e2db3105d36a.png)

The saved page displays all of the saved articles.  Here the user has the option to delete a given article from their saved list, or add a note to the article.

![mongoose3](https://user-images.githubusercontent.com/25482392/29468233-6ee724f2-8411-11e7-9cdf-b45162a56d9f.png)

Once a note is created.  The user can add more or delete any notes they wish.

![mongoose4](https://user-images.githubusercontent.com/25482392/29468235-6ff914d6-8411-11e7-9771-20a3eb3f8ce7.png)

NPM packages I used for this project are express, express-handlebars, mongoose, body-parser, cheerio, request, and morgan.
