// Promise.race()
// promise race is  the static methods is work like  first come first serve 
// it does't matter promise is fulfilled or reject 

// those who first came that will be executre first and ignore all orther promise 

const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("One"), 400))
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Two"), 100))

const result = Promise.race([p1, p2])
result.then((resData) => {
  console.log(resData); // ouput is Two
}).catch((err) => console.log(err));


// application of the promise.race
// 1. Request Timeout ( the common use ):
// when we make request to  the api we don't want user stare at sppinner forever;

// // we defined some time if the server don't responed within the time frame then we reject it and displlay request time out or retry something like that 


//2. speed opitmization data fetching ( reducndacny )
// In high availibity we might store the same data at differnet -differnt location  as primary database , secondaryDatabase(cache) or two differnt cdn 

// 3. throttling long running task  widely use in the applications


