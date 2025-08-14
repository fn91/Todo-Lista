// Obtener referencias a los elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para añadir una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim(); // Obtener el texto del input y eliminar espacios en blanco al inicio/final

    if (taskText === "") {
        alert("Por favor, escribe una tarea."); // Si el input está vacío, muestra una alerta
        return; // Sale de la función
    }

    // Crear un nuevo elemento de lista (li)
    const listItem = document.createElement('li');

    // Crear un span para el texto de la tarea
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text'); // Añadir una clase para el texto (opcional, para futuros estilos)

    // Crear un botón para eliminar la tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'; // El texto del botón será una 'X'
    deleteBtn.classList.add('delete-btn'); // Añadir una clase para estilos del botón

    // Añadir el texto de la tarea y el botón de eliminar al elemento de la lista
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Añadir el nuevo elemento de lista a la lista de tareas
    taskList.appendChild(listItem);

    // Limpiar el input después de añadir la tarea
    taskInput.value = '';

    // Añadir un "event listener" al nuevo elemento de lista para marcar/desmarcar como completado
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed'); // Alternar la clase 'completed'
    });

    // Añadir un "event listener" al botón de eliminar
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem); // Eliminar el elemento de la lista
    });
}

// Añadir "event listener" al botón de añadir tarea
addTaskBtn.addEventListener('click', addTask);

// Añadir "event listener" al input para permitir añadir tareas con la tecla 'Enter'
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});