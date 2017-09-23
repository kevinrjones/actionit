Merged everything back into a single Spring application.

My thinking now is that both the authentication and the api should be in the REST service and the Angular application will be served from a separate Nginx or Apache URL


Also added 'withcredentials' to the Angular app so that it sends the credentials to the REST API