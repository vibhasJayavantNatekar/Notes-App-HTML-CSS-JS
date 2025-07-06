let write = document.getElementById("write_section");

let noteitem = document.querySelector(".noteitem");
let DELETE = document.querySelector(".delete");

let add = document.getElementById("add");
let title = document.getElementById("title");
let note = document.getElementById("note");


add.addEventListener("click", function (e) {
    console.log(e);
    addnote();
}, false);



function addnote() {
    let notetitle = title.value;
    let notetxt = note.value;

    console.log(note.value);
    if (notetitle == "") {
        notetitle = "(NEWNOTE)";
    }
    if (notetxt == "") {
        alert("you must be enter note");

    }
    else {

        
        let div = document.createElement("div");
        div.setAttribute("class", "itembox");
        div.innerHTML = `  <div class="notes">
              <span class="title"><strong>${notetitle}</strong></span>
                  <p class="note">${notetxt}</p>
                 
                 </div>`;
                 //<input type="button" value="DELETE" class="delete">
          let input=document.createElement("input");
          input.type="button";
          input.value="DELETE";
          input.className="delete";
                    
                
        
        noteitem.insertAdjacentElement('afterbegin',div)
        div.insertAdjacentElement("beforeend",input);
        
        input.addEventListener("click",function(e){
            deletenote(div);
        })

    }
    
     title.value = "";
    note.value = "";
}


function deletenote(item) {
    
    item.remove();
    console.log("aalo");
    console.log(item);
    
}