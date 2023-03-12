import * as M from "./m.js";
import * as V from "./v.js";

export function init() {
    var form=V.init()
    var page=1
console.log(form.searchbar.value);
    form.btn.addEventListener("click",function(){
        var search=M.search(form.searchbar.value,page)
        console.log(page);
        search
        .then((movies) => {
            V.makeBoxesForMovies(movies)
            posterID()
            V.createPageButtons(movies,10)
            buttonsID(form.searchbar.value)
         
            
                    }).catch((err) => {
                        console.log(err);
                    });
                });
            };
    

export function posterID(){
  console.log("poster");
  
   var imgs= document.querySelectorAll(".movie-img")
   imgs.forEach((img) => {
        img.addEventListener("click", function() {
        
          var id = this.id;
          M.plot(id).then((plot) => {V.plotText(plot)})
            .catch((err) => {
              console.log(err);
            });
        });
      });
}

export function buttonsID(x){
  var btns= document.querySelectorAll(".page-btn")
  var pNumbers=document.querySelector(".page-numbers")
  var rMovies=document.querySelector(".results-movies")
 /*  var prev=document.querySelector(".prev")
  var next=document.querySelector(".next")
 */
  btns.forEach((btn) => {
       btn.addEventListener("click", function() {
        rMovies.remove()
        pNumbers.remove()
        /* prev.remove()
        next.remove() */
         var id = this.id;
         console.log(id);
       
         M.search(x,id).then((movies) => {
          
         V.makeBoxesForMovies(movies)
         posterID()
         V.createPageButtons(movies,10);
         buttonsID(x)
         })

         .catch((err) => {
          console.log(err);
      });
       });
     });
}

