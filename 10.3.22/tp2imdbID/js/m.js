export  function search(x,page) {
    console.log(x);
    x=encodeURIComponent(x)
    console.log(x)
    return new Promise((resolve, reject) => {
      fetch(`http://www.omdbapi.com/?apikey=1e336e4d&s=${x}&page=${page}`, {
        method: "POST",
        body: x,
      })
      
         .then((result) => {
            if (result.ok) {
                return result.json()
            }
            throw new Error(result.status);
        })
        .then((data) => {
        
            resolve(
                {movies:data.Search,
                totalResults: data.totalResults
                })
            console.log(data);
        })


        .catch((err) => {
            console.log("error");
            reject(err)
        })
})

}

export function plot(id){

    
    return new Promise((resolve, reject) => {
        fetch(`http://www.omdbapi.com/?apikey=1e336e4d&i=${id}&plot=full`, {
          method: "POST",
          body: id,
        })
           .then((result) => {
              if (result.ok) {
                  return result.json()
              }
              throw new Error(result.status);
          })
          .then((data) => {
          
              resolve(data.Plot)
              console.log(data.Plot);
          })
  
  
          .catch((err) => {
              console.log("error");
              reject(err)
          })
  })
}




