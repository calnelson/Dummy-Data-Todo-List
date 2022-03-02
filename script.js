    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    
    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut novembre",
        "completed": false
    }]

    
    const fetchTodos = () => {
        fetch('https://reqres.in/api/users')
        .then(function(response) {
            return response.json()
        })
        .then( function(data) {
            console.log(data.data)
            const jsonResponse = JSON.stringify(data)
            const ol =document.getElementById('todo-list')
            ol.innerHTML = `
                

                <img src='${data.data[0].avatar}'> `
        })
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        //
       
        for (let i = 0; i < arrayOfTodos.length; i++){
            const ol = document.getElementById('todo-list')
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(arrayOfTodos[i].title)) 
            ol.appendChild(li)
        }
       
       
    
    }