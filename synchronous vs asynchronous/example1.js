// const promisesSample  = new Promise((resolve,reject)=>{
//   const success= true;

//   setTimeout(()=>{
//     if(success){
//       resolve("promise resolve successfully!")
//     }else {
//       reject("promise rejected!");
//     }
//   },2000)
// })

// // console.log(promisesSample);
// promisesSample.then((data)=>console.log(data))

const checkEligiblityForVote = (age)=>{
  if(age>18){
    return Promise.resolve("yes you are good to go ..");
  }
  else{
    return  Promise.reject("sorry you are under age ");
  }

}

checkEligiblityForVote(13)
.then((data)=>console.log(data))
.catch((err)=>console.log(err))