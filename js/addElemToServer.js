/*const getData = () => {
    fetch('http://localhost:3000/element').then(
        (res) => {
            return res.json()
        }
    ).then(
        data => {
            for (const key in data) {
                const container = document.querySelector('.container-main')
                const currentTitle = data[key].table
                // console.log(currentTitle);
                const newElem = document.createElement('div');
                newElem.setAttribute('draggable', 'true')
                newElem.className = 'wrapper'
                newElem.innerHTML = currentTitle
                container.append(newElem)

                const btnAdd = document.querySelectorAll('.addBtn');
                btnAdd.forEach(button => {
                    button.addEventListener('click', newElement)
                });

                const list = document.querySelectorAll('ul');
                list.forEach(buttom => {
                    buttom.addEventListener('click', deletElement)
                });

                const deletTable = document.querySelectorAll('.deletBtn');
                deletTable.forEach(button => {
                    button.addEventListener('click', deletNewTable)
                })
            }
        }
    ).catch(
        err => console.log('Error', err)
    )

}

//document.querySelector('#get').addEventListener('click', getData)
getData()

const postData = (event) => {
    const getElement = document.querySelector('.wrapper').innerHTML
    event.preventDefault();

    fetch('http://localhost:3000/element', {
        method: 'POST',
        body: JSON.stringify({
            "table": getElement,
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        res => {
            return res.json();
        }
    ).then(
        data => {
            console.log('POST', data);
        }
    )

}

// document.querySelector('#post').addEventListener('click', postData)
btn.addEventListener('click', postData)



const deleteData = () => {
    fetch('http://localhost:3000/element/2', {
        method: 'DELETE'
    }).then(
        res => {
            return res.json();
        }
    ).then(
        data => {
            console.log('DELETE:', data);
        }
    )
};


 
    
deletTable.forEach(button => {
    button.addEventListener('click', deleteData)
})
 

  document.querySelector('#delete').addEventListener('click', deleteData)*/