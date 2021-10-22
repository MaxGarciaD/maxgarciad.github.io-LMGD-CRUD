import app from "./index.js";

import {
  getFirestore,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

const db = getFirestore(app);

const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDes = document.getElementById("task-description");

const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), {
    title,
    description
  });

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskTitle.value;
  const description = taskDes.value;
  console.log(title, description);

  if (!editStatus) {
    await saveTask(title, description);
  } else {
    await updateTask(id, {
      title: title,
      description: description
    });

    editStatus = false;
    id = "";
    taskForm["btn-task-form"].innerText = "Save";
  }

  await getTasks();

  taskForm.reset();
  taskTitle.focus();
});
