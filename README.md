# Actionit

## Uses MySQL

1. On OSX `brew install mysql`
1. Create a new schema `actionit`
1. Create a user called `actionit` with password `p4ssw0rd`
1. Give the `actionit` account full access to the `actionit` schema
1. Run migrations - default user in the database is `kevin@rocksolidknowledge.com` default password iss `letmein`

## To run
1. Build the Angular app
1. Copy the `ActionIt/dist` folder to `main/resources/static`
1. Start the Spring servers - this should serve index.html which serves the Angular app and also sets up the `api` endpoints
