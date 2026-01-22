// Promise.allSettled 
// what is actullay does: this wait for  all the promises result 
// this don't care  about the promise is resolve or reject 
// this return the array of object 
// each object contains their promise respective status code and value 

example: 1

// array of object 
const result = [
  // these two key are the fixed : 
  // 1. status 
  // 2. value 
  { "status": "fullfield", value: "data" },// object
  { "status": "rejct", value: "something went wrong" }, // object 
]
// value.reason : in case of the promise rejected we have to use this keywords 

// in promise.all (): if one reject the immideialty goes to the catch block 


// lets create the senario 
const sendToFriend1 = Promise.resolve("Email sent to Rahul!");
const sendToFriend2 = Promise.reject("Inavlid Email address!");
const sendToFriend3 = Promise.resolve("Email sent to Amit");

// call the static methods
Promise.allSettled([sendToFriend1, sendToFriend2, sendToFriend3]).then((item) => {
  item.forEach((result, index) => {
    if (result.status == "fulfilled") {
      console.log(`✅ Friend ${index + 1}: ${result.value}`)
    } else {
      // we have  the keywords gets:  
      // reason if the the promise rejected in that case we get the value via reason 
      console.log(`❌ Friend ${index + 1} : Error- ${result.reason}`)
    }
  })
})
