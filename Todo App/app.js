var input = document.getElementById("Inp")
var listParent = document.getElementById("listParent")

function Addtask(){
    if(input.value.length == 0) return;
    let li = document.createElement("li");
    let li_value = document.createTextNode(input.value)
    li.appendChild(li_value)

    let Delet_btn = document.createElement("button")
    Delet_btn.appendChild(document.createTextNode("D"))
    Delet_btn.setAttribute("class","deletBtn")
    Delet_btn.setAttribute("onclick","Delet_li(this)")

    let edit_btn = document.createElement("button")
    edit_btn.appendChild(document.createTextNode("E"))
    edit_btn.setAttribute("class","EditBtn")
    edit_btn.setAttribute("onclick","Edit_li(this)")

    let btn_wrapper = document.createElement('div')
    btn_wrapper.appendChild(edit_btn)
    btn_wrapper.appendChild(Delet_btn)


    li.addEventListener("click",(e)=>{
        e.target.style.textDecoration = 'line-through'
    })


    li.appendChild(btn_wrapper)
    // li.appendChild(edit_btn)
    listParent.appendChild(li)
    input.value="";
    input.focus()
}

function Edit_li(li){
    let New_value = prompt("Enter new Value to edit")
    if(New_value.length == 0) return;
    li.parentNode.parentNode.firstChild.nodeValue = New_value;
    li.parentNode.parentNode.style.textDecoration = "none";
    li.style.textDecoration = "none"
}
function Delet_li(li){
    li.parentNode.parentNode.remove()
}
document.addEventListener('keyup',(e)=>{
    if(e.key == "Enter"){
        Addtask()
    } 
})