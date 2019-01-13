This is a more advanced security setup.

It is configured in WebSecurityConfig to have basic authentication. There is now a database that stores the username/password and migrations to create the table. This is setup to use MySql so you would need to create a database in mysql called actionit, with a user/password of actionit/p4ssw0rd (by default)

The Spring configuration now has the security set to allow all the URLs that the 
application needs apart from the 'api'

The angular 2 app in the 'resources' directory is set up to send the `X-Requested-With: XMLHttpRequest` header
so that if not authenticated the call fails, but it fails silently (ie Spring does not pop up the users dialog box)

The angular 2 app also does basic validation around the security, the login form is template driven and the registration form is reactive

Logout now works.

Login and registration forms do no enable 'submit' unless the form is valid.

Spring app also validates user registration