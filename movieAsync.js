//without async await 
console.log('person1: shows ticket')
console.log('person2: shows ticket')
//we have to use then before calling async function because async function always return a promise
const preMovie = async()=> {      
    const wifeBringsTickets = new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
    const getPopcorn = new Promise((resolve,reject)=>{resolve('popcorn')})
    const getcandy = new Promise((resolve,reject)=>{resolve('candy')})
    const getColddrink = new Promise((resolve,reject)=>{resolve('colddrink')})
    let ticket = await wifeBringsTickets;
    //these console,log wont execute untill wifebrings ticket executes
   let [popcorn,Colddrink,candy]= await Promise.all([getPopcorn,getColddrink,getcandy])
    console.log(`${popcorn} ${Colddrink} ${candy}`)

    return ticket;
}    
preMovie().then((m)=>{console.log(`person 3: shows ${m}`)})
console.log('person4: shows ticket')
console.log('person5: shows ticket')


