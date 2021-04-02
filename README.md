# GoodEats
![image](https://user-images.githubusercontent.com/71041585/113437875-4ebb2180-939c-11eb-9b6b-e5ad72f8e8d8.png)
## Live Link
* [Link link](https://goodeats-c-j-j-t.herokuapp.com/)
## GoodEats was developed with:
* Javascript
* HTML5
* PUG
* CSS3
* Express
* PostgreSQL
* Sequelize ORM
## What is GoodEats?
A Goodreads clone designed for culinary excellence.
## To use GoodEats on your local machine
you need:
* PostgreSQL -v12
* Node.js -v12.19.0
If you would like to contribute:
* Fork this repository, `git checkout -b YOUR_BRANCH`, initiate pull requests when necessary.
Clone the repo:
1. `git clone` GoodEats repository locally
2. `cd goodeats`
3. `cd express-project-starter` then `npm i`
4. In PostgreSQL create a database, and database user with `CREATEDB` and `PASSWORD`
   * Alternatively, use the Sequelize ORM and `npx dotenv sequelize-cli db:create`
5. Create a `.env` based off the example provided and input your credentials
6. Generate a `SESSION_SECRET` with Node.js built in `uuid`
7. Run `npx dotenv sequelize db:migrate` to run the migrations
8. Run `npx dotenv sequelize db:seed:all` to seed the database
9. Start the server with `npm start`

## Documentation
Check out our [wiki](https://github.com/dunnjm814/goodEats/wiki)

## A notable snippet
The following code allows for dynamic scrolling of recipes within a user cookbook


![image](https://user-images.githubusercontent.com/71041585/113436906-75785880-939a-11eb-9b64-35fd22a16b04.png)

## Another notable snippet
The following code takes the user review, and updates the total recipe rating, then the response uses AJAX
to render the review in real time.


![image](https://user-images.githubusercontent.com/71041585/113437194-10713280-939b-11eb-8c88-29cb377512f3.png)
![image](https://user-images.githubusercontent.com/71041585/113438171-e28ced80-939c-11eb-95ee-f4b846007f51.png)
