document.addEventListener("DOMContentLoaded", function () {
  const newTaskTitleInput = document.getElementById("newTaskTitle");
  const newTaskDescriptionInput = document.getElementById("newTaskDescription");
  const addTaskButton = document.getElementById("addTask");
  const pendingTasksList = document.getElementById("pendingTasks");
  const completedTasksList = document.getElementById("completedTasks");

  addTaskButton.addEventListener("click", function () {
    const taskTitle = newTaskTitleInput.value.trim();
    const taskDescription = newTaskDescriptionInput.value.trim();

    if (taskTitle) {
      const listItem = document.createElement("li");

      // Create task title element
      const taskTitleElement = document.createElement("span");
      taskTitleElement.innerText = taskTitle;
      listItem.appendChild(taskTitleElement);

      // Create task description element
      const taskDescriptionElement = document.createElement("p");
      taskDescriptionElement.innerText = taskDescription;
      listItem.appendChild(taskDescriptionElement);

      // Create action buttons
      const completeButton = document.createElement("button");
      completeButton.innerText = "Complete";
      completeButton.classList.add("complete");
      listItem.appendChild(completeButton);

      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.classList.add("edit");
      listItem.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete");
      listItem.appendChild(deleteButton);

      pendingTasksList.appendChild(listItem);

      // Clear input fields
      newTaskTitleInput.value = "";
      newTaskDescriptionInput.value = "";

      completeButton.addEventListener("click", function () {
        listItem.classList.add("completed");
        listItem.removeChild(completeButton);
        completedTasksList.appendChild(listItem);
      });

      editButton.addEventListener("click", function () {
        const newTaskTitle = prompt("Edit task title:", taskTitle);
        const newTaskDescription = prompt(
          "Edit task description:",
          taskDescription
        );

        if (newTaskTitle !== null) {
          taskTitleElement.innerText = newTaskTitle;
        }

        if (newTaskDescription !== null) {
          taskDescriptionElement.innerText = newTaskDescription;
        }
      });

      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
    }
  });
});
