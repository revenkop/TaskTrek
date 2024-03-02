// Создаем объект приложения для управления задачами
const todoApp = {
  // Список задач
  tasks: [],
  
  // Добавление новой задачи
  addTask(taskDescription) {
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      completed: false
    };
    this.tasks.push(newTask);
    console.log(`Добавлена новая задача: "${taskDescription}"`);
  },

  // Отметка задачи как выполненной
  completeTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].completed = true;
      console.log(`Задача с ID ${taskId} отмечена как выполненная.`);
    } else {
      console.log(`Задача с ID ${taskId} не найдена.`);
    }
  },

  // Вывод списка задач
  displayTasks() {
    console.log("Список задач:");
    this.tasks.forEach(task => {
      const status = task.completed ? "✓" : "✗";
      console.log(`[${status}] ${task.description}`);
    });
  }
};

// Пример использования
todoApp.addTask("Написать письмо");
todoApp.addTask("Купить молоко");
todoApp.displayTasks();
todoApp.completeTask(todoApp.tasks[0].id);
todoApp.displayTasks();
