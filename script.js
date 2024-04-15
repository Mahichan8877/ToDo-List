var ul=document.getElementById("List-Container")
var input=document.getElementById("input")

function add(){
    // Create a New Element
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value + "<button onclick='deleteItem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteItem(event){
    event.target.parentElement.remove()
}