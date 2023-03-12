import { MyInput } from "../HTMLElements/input.js";
import {MySection} from "../HTMLElements/sections.js"
import {MyButton} from "../HTMLElements/button.js"

import CSS from "./style.css" assert {type: "css"}
document.adoptedStyleSheets.push(CSS)
var main= document.getElementById("main")
export function init(){

    var form={};
    var Home = new MySection("home-page", "input-group");
    form.searchbar = new MyInput("form1", "form-control rounded", "text", "Search movies ...");
    form.btn= new MyButton ("btn","btn btn-outline-primary","search")
   

    Home.append(form.searchbar,form.btn)
    main.append(Home)
    return form

}

 export function makeBoxesForMovies(result){

  var oldResults = document.querySelector('.results-movies');
    if (oldResults) {
        oldResults.remove();
    }

    var arr=result.movies
    console.log(arr);

    var container =document.createElement("card");
    container.className="row results-movies"
        arr.forEach(x => {

        var section= new MySection("","col-5 card ")
        var div= new MySection("","card-body")
        var title=new MySection("","card-title")
        title.innerText= x.Title
        var year= new MySection("","card-text")
        year.innerText=x.Year
        var img=document.createElement("img")
        img.className="card-img-top  movie-img"
        img.src=x.Poster
        img.id=x.imdbID

        
        div.append(img,title,year)
        section.append(div)
        container.append(section)
        main.append(container)
        console.log("makeboxes");

       
   } )
   
}

export function plotText(x){
    var modal = new MySection("","modal fade")
    modal.tabIndex = -1;
    var dialog = new MySection("","modal-dialog")
    var content = new  MySection("","modal-content")
    var header = new MySection("","modal-header")
    var body =new MySection("","modal-body");
    body.innerText = x;
  
    var btn = new MyButton("","close float-right")
    btn.innerHTML = "&times;"; 
  
    btn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        modal.parentElement.removeChild(modal);
      });

    header.append(btn);
    content.append(header,body);
    dialog.append(content);
    modal.append(dialog);
    document.body.append(modal);
  
    modal.classList.add("show"); 
    modal.style.display = "block";
  }
   

  export function createPageButtons(x, y) {
    var oldButtons = document.querySelector('.page-numbers');
    if (oldButtons) {
        oldButtons.remove();
    }
  console.log(x.totalResults);
    const totalPages = Math.ceil(x.totalResults / y);
  var arr=[]
    var div = new MySection("","page-numbers");
  
    
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.classList.add("btn","btn-link","page-btn");
      button.textContent = i;
      button.id = i
      arr.push(button)

      div.append(button);
      main.append(div)
    }
    main.append(div)
   
  }   

 /*  export function createPageButtons(x, y) {
    console.log(x.totalResults);
    const totalPages = Math.ceil(x.totalResults / y);
    const buttonsArray = [];
    const div = new MySection("","page-numbers");
  
    for (let i = 1; i <= totalPages; i++) {
      var button = document.createElement('button');
      button.classList.add("btn","btn-link","page-btn");
      button.textContent = i;
      button.id = i;
      div.append(button);
      buttonsArray.push(button);
    }
  
   
    var groupsBtn = [];
    for (let i = 0; i < buttonsArray.length; i += 10) {
      groupsBtn.push(buttonsArray.slice(i, i + 10));
    }
  
    
    var group = 0;
    var btns = groupsBtn[group];
    var section = new MySection("", "page-numbers");
    for (let i = 0; i < btns.length; i++) {
      section.append(btns[i]);
    }
    main.append(section);
  
   
    var prev = document.createElement("button");
    prev.classList.add("btn", "btn-link", "page-btn","prev");
    prev.innerText = "Précédent";
    prev.addEventListener("click", () => {
      if (group > 0) {
        group--
        var newSection = new MySection("", "page-numbers");
        for (let i = 0; i < groupsBtn[group].length; i++) {
          newSection.append(groupsBtn[group][i]);
        }
        section=newSection;
     
      }
    });
  
    var next = document.createElement("button");
    next.classList.add("btn", "btn-link", "page-btn","next");
    next.textContent = "Suivant";
    next.addEventListener("click", () => {
      if (group < groupsBtn.length - 1) {
        btns++;
        const newSection = new MySection("", "page-numbers");
        for (let i = 0; i < groupsBtn[group].length; i++) {
          newSection.append(groupsBtn[group][i]);
        }
        section=newSection;
      
      }
    });
  
    main.append(prev);
    main.append(next);
  } */
 