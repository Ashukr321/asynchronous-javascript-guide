// Promise.allSettled 
// what is actullay does: this wait for  all the promises result 
// this don't care  about the promise is resolve or reject 
// this return the array of object 
// each object contains their promise respective status code and value 

example:1

// array of object 
const result = [
  {"status":"fullfield",value:"data"},// object
  {"status":"rejct",value:"something went wrong"}, // object 
]

// in promise.all (): if one reject the immideialty goes to the catch block 

