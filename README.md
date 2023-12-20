PERSONAL BUDGET PROJECT

This project aimed to build an API that allows clients to create and manage a personal budget through the principles of the "Envelope Budget". With this project I was able to learn in practice by applying the concepts of 
javascript express, creating a server with several endpoints and manipulating data so that can be presented correctly. Concepts of requests with fetch because in order to implement the project, a website was created with
a simple interface but that it successfully responds to all requests made to the server.

There are 2 ways to use the API, one of them is to open the website itself: it consists of a home webpage that will ask the client what they want to do, whether viewing, creating, updating/transferring or deleting data, with each
option being a link that will take them to another webpage allowing them to perform each action separately. If the client wants to return to the home webpage, they can also click on "back" link. Within each specific page it is very intuitive for the
user its possibilities. For example, clicking on "Check the Budget Envelopes" will take them to a webpage where they will be given the option to view just one envelope by typing its title and clicking the "submit" button. Or if the client prefer,
they can just click "Get All Envelopes" to view everything in one just once.
The other option would be through the Postman API app and directly place in it the endpoints that were created in the server file to obtain the response of requests. 
Below is the link to download the app as well as a list of endpoints that were created as an example to help in user experience:

- Postman API: https://www.postman.com/downloads/
- List with endpoints:

- Get: localhost:3000/budget/envelope?title=Example1
- Post: localhost:3000/budget/create/?title=Example1&envelope=2500
- Put (to update): localhost:3000/budget/update?title=Example2&envelope=10000
- Put (to transfer): localhost:3000/budget/transfer/Example1/Example2?transfer=200
- Delete: localhost:3000/budget/delete?title=Example1
