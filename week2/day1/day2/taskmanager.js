// taskManager.js

let tasks = [];

// ----------------------------
// 1️⃣ Callback Version
// ----------------------------
const addTaskCallback = (task, callback) => {
  setTimeout(() => {
    tasks.push(task);
    callback(`Task "${task}" added (Callback).`);
  }, 1000);
};

// ----------------------------
// 2️⃣ Promise Version
// ----------------------------
const addTaskPromise = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Task "${task}" added (Promise).`);
    }, 1000);
  });
};

// ----------------------------
// 3️⃣ Async/Await Version
// ----------------------------
const addTaskAsync = async (task) => {
  return await addTaskPromise(task);
};

const deleteTask = async (taskName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.filter(task => task !== taskName);
      resolve(`Task "${taskName}" deleted.`);
    }, 1000);
  });
};

const listTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`
📋 Task List
--------------
${tasks.map((task, index) =>
  `${index + 1}. ${task}`).join("\n")}
`);
    }, 1000);
  });
};

// ----------------------------------
// 🔥 CALL FUNCTIONS TO SEE OUTPUT
// ----------------------------------

const runTaskManager = async () => {

  // Callback version
  addTaskCallback("Learn ES6", (message) => {
    console.log(message);
  });

  // Wait a bit before next execution
  await new Promise(r => setTimeout(r, 1500));

  // Promise version
  console.log(await addTaskPromise("Practice Promises"));

  // Async/Await version
  console.log(await addTaskAsync("Master Async/Await"));

  console.log(await listTasks());

  console.log(await deleteTask("Learn ES6"));

  console.log(await listTasks());
};

runTaskManager();