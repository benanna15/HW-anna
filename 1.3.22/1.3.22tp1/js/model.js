export function start (p){

    return new Promise ((resolve, reject) => {
       
        fetch("https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/promises-cb263f/password.json")
    
    .then((result)=> {
        if (result.ok){
            return result.json()
        }
        throw new Error (result.status);
    })
    .then((data) =>{
        if (data.password == p){
            resolve(data.password)
        }})
    
    .catch ((err) => {
        console.log("error");
        reject (err)
    })

})
    }

export function getProducts(){
    return new Promise ((resolve, reject) => {
        

  fetch("https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/promises-cb263f/products.json")
.then((result)=> {
    console.log(result);
    if (result.ok){
        console.log(result);
        return result.json()
    }
    throw new Error (result.status);
})
.then((products)=>{
    resolve(products)}
  )
   .catch ((err) => {
    console.log("error 2");
    reject (err)
})
    })}    
