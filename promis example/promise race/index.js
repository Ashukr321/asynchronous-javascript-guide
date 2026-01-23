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
