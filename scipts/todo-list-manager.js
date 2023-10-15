let todoList = []

function addTask(taskName, dueDate){
    todoList.push([taskName, dueDate])
    console.log(todoList)
    displyTask()
}

function removeTask(index){
    todoList.splice(index, 1)
    console.log(todoList)
    displyTask()
}

function displyTask(){
    htmlCode = ''

    for (i = 0; i < todoList.length; i++){
        htmlCode += '<p> ' + todoList[i][0] + ' ' + todoList[i][1] + ' <button onclick="removeTask(' + (i)+ ')"> Delete </button></p>'
    }

    document.getElementById('taskList').innerHTML = htmlCode
}

