let form = document.querySelector('#addForm');

let itemlist = document.querySelector('#items');

let filter = document.getElementById('filter');



//add items
form.addEventListener('submit',additem);
function additem(e){
      e.preventDefault();
      let item = document.getElementById('item').value;
       let li = document.createElement('li');
       li.className = "list-group-item"; 
       let x = document.createElement('button');
       x.className = "btn btn-danger btn-sm float-right delete"; 
       x.appendChild(document.createTextNode('x')); 
       
       li.appendChild(x);
       
       li.appendChild(document.createTextNode(item));
        
       itemlist.appendChild(li);

}

//Remove item:-

itemlist.addEventListener('click',removeitem);

function removeitem(e){
            if(e.target.classList.contains('delete')){
                             if(confirm('Are you sure?')){
                                       let li2 = e.target.parentElement;
                                       itemlist.removeChild(li2);
                             }
            }
}

//search 

filter.addEventListener('keyup',search);
function search(e){
      let text = e.target.value.toLowerCase();

      let lis = itemlist.getElementsByTagName('li');

      Array.from(lis).forEach(function(i1){
             let itemnamess = i1.firstChild.textContent;
             if(itemnamess.toLocaleLowerCase().indexOf(text) != -1){
                        i1.style.display = "block";
             } 

             else {
                 i1.style.display = "none";
             }
      });
}