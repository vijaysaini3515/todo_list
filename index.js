const item = document.querySelector("#item");
const todoBox = document.querySelector("#todo-box");

item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addTodo(this.value)
        this .value = ""
    }
})

const addTodo =(item)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item}
    <i class="fas fa-times"></i>
    `;

    // if the task is done it will mark to clear
    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    })

    // if the task is compactly done then remove it

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    todoBox.appendChild(listItem)
}