// Promise.all(): this is the static methods 

//  This method is use when we want to execute multiple promise and our requirment is to all promises must be resolve 
// wait for the all the promiss need to be fullfilled if one promise reject then outout return rejected 
// it take array of promise code 
// it return the single result ( array of result in  same order as they are passes in all() static methods)

// order is preserved in this function 
// this follo fail fast rule if any promise reject then catch block immediatly called 


// example 1: 

const fetchPost = Promise.resolve({ id: 1, post: "1", post: "2" });
const fetchUser = Promise.resolve({ id: 1, userName: "Ashutosh Kumar", age: 21 });
const fetchFriends = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve({ friends: "1", friend: "2" })
    } else {
      reject({ message: "something went wrong!", status: 404 })
    }
  }, 2000)
})

const response = Promise.all([fetchPost, fetchFriends, fetchUser]);
console.log(response);
response.then((result) => {
  const [post, user, friend] = (result);
  console.log(post);
  console.log(user);
  console.log(friend);
}).catch((err) => console.log(err));
// WHEN TO USE 
// 1. use in dashboard we need to fetch the mulitple matrix of data and need to display in the dashbaord 
// 2.dropdown  need to fetch country list and state list simlutanly 
// 3 