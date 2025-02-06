////////////HTML/////////////////
  ////create html elements
  const body = document.querySelector("body");
  const section = document.createElement("section");
  const container = document.createElement("div");
  const jobColumn = document.createElement("div");
  const todoColumn = document.createElement("div");
  const taskApp = document.createElement("main");
  const inputContainer = document.createElement("div");
  const todoBtn = document.createElement("a");
  const input = document.createElement("input");

inputContainer.classList.add("inputContainer");
  taskApp.classList.add("todoAppContainer");
  todoColumn.appendChild(taskApp)
  taskApp.appendChild(inputContainer)
  input.setAttribute("placeholder", "Enter your task")
    todoBtn.innerText = "ADD";
  inputContainer.appendChild(input)
  inputContainer.appendChild(todoBtn)


 
 ///EVENT LISTENERS////////////////////////////
  todoBtn.addEventListener("click", ()=>{
        todoApp.addTodo-
        todoApp.addTodo(input.value)
        input.value=''
    })

  //add classes to html elements
  container.classList.add("container");
  jobColumn.classList.add("jobCol","col");
  todoColumn.classList.add("todoCol","col");

  //add html elements to the DOM
  body.appendChild(section);
  section.appendChild(container);
  container.appendChild(jobColumn);
  container.appendChild(todoColumn);



/////////////TODO APPLICATION//////////////////////////
const todoApp = {};
todoApp.memory = [];

///Add a todo to the array
todoApp.addTodo = function (todo) {
  let count =0;
  this.memory.push({
    todoText: todo,
    complete: false,
  });
  ;
  let task = document.createElement("div");
    task.classList.add("task")
    task.innerHTML= `${this.memory.length}. ${this.memory[this.memory.length -1].todoText} <br> completed:${this.memory[this.memory.length -1].completed ? "[x]" : "[ ]"}`

    taskApp.appendChild(task)

  console.log(`Your todo: "${todo}" has been added to the memory`);
};

//Display all todos
// todoApp.displayTodos = function () {
//   this.memory.forEach((todo, index) => {
//     let task = document.createElement("div");
//     task.classList.add("task")
//     task.innerText= `${index + 1}. ${todo.todoText} completed:${todo.completed ? "[x]" : "[ ]"}`  
//       taskApp.appendChild(task)
//   });
// };

//Toggle the complete button
todoApp.toggleComplete = function (position) {
  const todo = this.memory[position - 1];
  todo.completed = !todo.completed;
  console.log(`Todo status toggled: ${todo.todoText}`);
};

//Delete a Todo by index
todoApp.delete = function (position) {
  const deleted = this.memory[position - 1].todoText;
  console.log(`The task: "${deleted}" has been removed.`);
};
//Update a Todo by index
todoApp.updateTodo = function (position, newTodo) {
  const todo = this.memory[position - 1];
  const oldTodo = todo.todoText;
  todo.todoText = `${newTodo}`;
  console.log(`The task "${oldTodo}": has been updated to: "${todo.todoText}"`);
};




/////////////JOBS STREAM LOGIC/////////////////////////

const getRemoteJobs = async () => {
  ///fetch our data
  const response = await fetch(
    "https://jobicy.com/api/v2/remote-jobs?count=50&geo=usa&industry=dev"
  );
  const data = await response.json();


  ///iterate through the data
  data.jobs.forEach((job) => {
    ///parsed API data
    let compLogo = job.companyLogo;
    let compName = job.companyName;
    let jobTitle = job.jobTitle;
    let jobType = job.jobType;
    let shortJobDesc = job.jobExcerpt;
    let jobLink= job.url;
    let salaryMax = job.annualSalaryMax;
    ///create the card elements
    const card = document.createElement("div");
    card.classList.add("card");
    const companyImg = document.createElement("img");
    companyImg.classList.add("company_logo");
    const cardContent = document.createElement("div");
    cardContent.classList.add("card_content");
    let coName = document.createElement("h2")
    let title = document.createElement("h3");
    let type = document.createElement("h4");
    let salary = document.createElement("span");
    let description = document.createElement("div");
    let fullDescBtn = document.createElement("a");
    fullDescBtn.classList.add("more");
    fullDescBtn.setAttribute("target","_blank")
    fullDescBtn.setAttribute("href",jobLink)
    fullDescBtn.innerText = "MORE";
    salary.classList.add("salary");
    ///put the card 
    card.appendChild(companyImg);
    companyImg.setAttribute("src", compLogo);
    cardContent.appendChild(coName);
    cardContent.appendChild(title);
    cardContent.appendChild(type);
    cardContent.appendChild(description);
    cardContent.appendChild(fullDescBtn);
    cardContent.appendChild(salary);
    coName.innerText = compName;
    title.innerText = jobTitle;
    type.innerText = jobType;
    description.innerHTML = shortJobDesc;
    // salary.innerText = salaryMax;
    //add the cards to the DOM
    card.appendChild(cardContent);
    jobColumn.appendChild(card);
  });
};

getRemoteJobs();
