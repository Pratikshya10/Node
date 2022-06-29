const http = require('http'); // to import any other module

const server = http.createServer(function(request,response){ //creating server && callback function
    //request-access all data frontend=> backend
    //response- whatever we r trying to send  backend => frontend
    
    response.write("<h1> Hello I am HTML response</h1>")
    response.write('Hello String response \n');

    const jsonData = {name : "Pratikshya" , age : 23 }
    response.write(JSON.stringify(jsonData));
    response.end(" <h1>This is First Server</h1> \n");
})
server.listen(5000); 
// port number-for every server-diff for diff server

// Everytime we update the response we need to restart the server again.