Project3-Back-End
Back End for General Assembly Project 3

#Our App
Blog Hop is a CMS app that allows site visitors to view blog entries written by registered users. Each registered user has their own dashboard page where they have the ability to create a blog page and blog post as well as edit and delete their saved posts. Their dashboard also serves as a page and post gallery where the user can easily see all pages and posts they have created.  

#Utilized 3 data Scemas - Users, Pages, and Posts
We had Users, Pages and Posts data schemas.  Initially tried using the user data schema from class but needed to adjust it after a couple of days to add another field.  Initially the page and posts data schemas both pointed to an owner & the posts data schema pointed to a page.  We made some adjustments over time but they stayed fairly simple and ultimately were comprised of a small number of fields.  Mongo allowed us to easily make modifications when needed.  But this also created some difficulties when all the documents did not have data in all the fields. 

#App API Routes(Paths and Methods)
User Routes
Used 'GET' to reqest th username which was passed into the url and nav bar on our front-end. 
Used 'POST' to create a username and userId.
Used 'POST' to create passport.authenticate upon login.
Used 'DELETE' to remove the userId upon loggout. 

##Page Routes
showAllPages used the 'GET' method. This requested all pages by userIds. 
createPage used the 'POST' method. This requested and responded the objects passed into the form field by the user.

##Post Routes
showAllPosts used the 'GET' method. This requested all posts by userIds. 
createPost used the 'POST' method. This requested and responded the objects passed into the form field by the user.
updatePost used the 'PATCH' method. This requested and responded the objects passed into the form field by the user. 
deletePost used the 'DELETE' method. This removed the requested objects by their id. 

##Dashboard Routes
Used the 'GET' method to display all posts and pages with the userId that was currently logged into the website. 

#Link to the Deployed Back-End App
https://lit-brook-2992.herokuapp.com

#Link to Front End Repo
https://github.com/WDIBOSHopper/project3-front-end
