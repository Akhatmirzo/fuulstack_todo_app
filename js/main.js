const token = localStorage.getItem('token');

if (!token || token == "undefined") {
    window.location.href = "../authen.html";
}

//* render function
const todoProgress = document.getElementById('todoProgress');
const todoComplete = document.getElementById('todoComplete');

function render(data) {
    todoProgress.innerHTML = "";
    todoComplete.innerHTML = "";

    const progress = data.filter(todo => todo.completed == false);
    const complete = data.filter(todo => todo.completed == true);

    // complete false render
    progress.forEach((todo, index) => {
        const template = `
            <tr ondblclick="completedFunc('${todo._id}')">
                <td>${index + 1}</td>
                <td>${todo.task}</td>
                <td>
                    <button type="button" onclick="editModal('${todo._id}', '${todo.task}')"
                        class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                        Edit
                    </button>
                    <button type="button" onclick="deleteTodo('${todo._id}');"
                        class="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                        Delete
                    </button>
                </td>
            </tr>
        `

        todoProgress.innerHTML += template;
    });
    // complete true render
    complete.forEach((todo, index) => {
        const template = `
            <tr ondblclick="completedFunc('${todo._id}')">
                <td>${index + 1}</td>
                <td>${todo.task}</td>
                <td>
                    <button type="button" onclick="editModal('${todo._id}', '${todo.task}')"
                        class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
                        Edit
                    </button>
                    <button type="button" onclick="deleteTodo('${todo._id}');"
                        class="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
                        Delete
                    </button>
                </td>
            </tr>
        `

        todoComplete.innerHTML += template;
    });
}

//* Get all todo
const getAllTodo = "https://todo-for-n92.cyclic.app/todos/all";
async function renderTodo() {
    try {
        const response = await fetch(getAllTodo, {
            headers: {
                "x-access-token": token
            }
        })

        if (!response.ok) {
            throw new Error("user todo lists failed");
        }

        const result = await response.json();
        if (result) {
            console.log(result);
            render(result.allTodos)
        }
    } catch (error) {
        console.log(error);
    }
}

// Reload web page rendering
renderTodo();

//* Add todo list
const taskForm = document.getElementById('taskForm');
const addTodoURL = "https://todo-for-n92.cyclic.app/todos/add";
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let task = e.target[0];
    if (token && token != "undefined") {
        try {
            const response = await fetch(addTodoURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify({
                    task: task.value,
                })
            })
            if (!response.ok) {
                throw new Error("Add user failed");
            }

            const result = await response.json();
            if (result) {
                task.value = "";
                alert(result.message);
                renderTodo();
            }
        } catch (error) {
            console.log(error);
        }
    }
});

//* todo update tasks
const editModalWrap = document.getElementById('editModalWrap');
const editModalForm = document.getElementById('editModalForm');
function editModal(id, taskText) {
    editModalWrap.style.display = 'flex';
    let editTask = editModalForm[0];
    editTask.value = taskText;

    editModalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (editTask.value) {
            fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token,
                },
                body: JSON.stringify({
                    task: editTask.value,
                })
            }).then(response => response.json())
                .then(res => {
                    console.log(res);
                    renderTodo();

                    editTask.value = "";
                    editModalWrap.style.display = 'none';
                }).catch(err => {
                    alert("Update failed")
                    console.log(err);
                })
        }
    });
}

function closeModal() {
    editModalWrap.style.display = 'none';
}

//* todo delete
function deleteTodo(id) {
    fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
        method: "DELETE",
        headers: {
            "x-access-token": token,
        }
    }).then(response => response.json())
        .then(res => {
            alert(res.message);
            renderTodo();
        })
}

//* Todo toggle completed
function completedFunc(id) {
    fetch(`https://todo-for-n92.cyclic.app/todos?id=${id}`, {
        method: 'PUT',
        headers: {
            "x-access-token": token,
        }
    })
        .then(response => response.json())
        .then(res => {
            renderTodo();
        }).catch(err => {
            alert("complete failed")
            console.log(err);
        })
}

//* Log out
function LogOut() {
    localStorage.removeItem('token');
    window.location.href = "../authen.html";
}