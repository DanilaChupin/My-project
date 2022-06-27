const list = document.querySelectorAll('ul');
const btnAdd = document.querySelectorAll('.addBtn');


const newElement = (event) => {
    
    const li = document.createElement('li');
    const inputValue = event.target.previousElementSibling.value;
    const addList = event.target.parentNode.parentElement.lastElementChild

    const note = document.createTextNode(inputValue);
    li.appendChild(note);
    li.setAttribute('draggable', 'true')
    
    
    
    if (inputValue.trim() === "") {
        alert("Введите ваше дело!");
    } else {
        addList.appendChild(li);
    }
    event.target.previousElementSibling.value = "";

    const span = document.createElement('SPAN');
    const txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
}

btnAdd.forEach(button => {
    button.addEventListener('click', newElement)
})

const deletElement = (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === "SPAN") {
        const div = e.target.parentNode;
        div.remove();
    }
}

list.forEach(buttom => {
    buttom.addEventListener('click', deletElement)
})

const btn = document.querySelector("#createBtn");
btn.addEventListener("click", createNewElement);

