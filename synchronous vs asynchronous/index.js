// synchronous code: 
// in the executiin context : there is created a execution thread that execute the code 
// always one  global exectuion execution context created 

// sychronous code the blocking code , it exectue the code line by line 
// if we have the heavy task that block the execution of the code 

// to solve this issue asynchronous execution of code concept comes in the picture 

// example: alter window : that block the window nothing is happend  in the page 


// asynchronous code : code that not block the main thread task : it execute when the callback bg task completed 

// ajax : calling  way through which we call the api and talk with the backend services asynchroushly 

// promises: object  life cycle of the promises 
// object through which we can perform the async operations 

// state : 
// pending state 
// settled :  1.fullfiled , 2 . rejected 
// failed  or rejected state of promises 



// how to consume promises 

// json is the instace methods 
// json() is the methods that is avialable on all the res object 
// that convert  : this json() function also a asynchronous function 
// which also returun the promises so we need to consume that also then we get the data 


// when we fetch(url) 

// request goes the  server server check the hreader : that contains the all the client inforation 

// and create the readablestream piplline and get the data in bit by bit formate 
// json() : tell the browser waitl until all the the bits data is not came or downloaded once the data downloaded it close the pipeline or tunnel 
// it also parse the whole json string into object 

// JSON.parse() 
// while  sending the data to the server we need to converted js object to 
// string formate only in string formate we can send the data 
//  JSON.stringify(): this methods convert the js object into json string 
// JSON.parse(): this methods convert json string into javascript objects 



