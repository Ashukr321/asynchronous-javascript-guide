// Promise.any(): static methods use for the handling the mulitple asynchronous javascript operation 


// // 1. all ()
// 2. allSettled()
// 3. any()


// Promise.any(): usually this takes the iterrables * array of promies 
//  it return the value of the first promise success or fulfilled 

//  Aggregate promise error if the every single promise if fail in that case 
// aggregate promise is return 


 const slowPromise = new Promise((_,reject)=>{
  setTimeout(() => {
    reject("slow promise")
  }, 100);
 })

 const fastPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("fast promise!")
  },200)
 })
 const steadyPromise  = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("steady promise!")
  }, 500);
 })


const result = Promise.any([slowPromise,fastPromise,steadyPromise]);
result.then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err)
})

// 1  multi resion fetching 
// 2. competitive caching and network calls 
// 3. finding the best vedio quality 
