    let Task_content = document.querySelector("#Task_content");
    let Task_date = document.querySelector("#Task_date");
    let task_table = document.querySelector(".task_table");

function taskAdd() {
  if (Task_content.value === "") {
    alert("please add some task");
  } else 
  {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");
    

    let checkbox = document.createElement("div");
    checkbox.setAttribute("class", "checkbox");
    

    let inputCheck = document.createElement("input");
    inputCheck.setAttribute("type", "checkbox");
    inputCheck.setAttribute("class", "chkbox");
    

    let span = document.createElement("span");
    span.setAttribute("class", "spanTag");
    
    checkbox.appendChild(inputCheck);
    checkbox.appendChild(span);
    taskDiv.appendChild(checkbox);
    

    let delet = document.createElement("div");
    delet.setAttribute("class", "delete");
    

    let delImg = document.createElement("img");
    delImg.setAttribute("src", "./images/bin.png");
    delet.appendChild(delImg);
    taskDiv.appendChild(delet);
    

    span.textContent = `${Task_content.value} (${Task_date.value})`;
    span.style.color = "#00A3FF";
    task_table.appendChild(taskDiv);
    

    let count = 1

    function checked(){
        if(count%2 === 0)
        {
          span.style.textDecoration = "none"
          
        }else if(count%2 !== 0)
        {
          span.style.textDecoration = "line-through"
        }
        
    }
    
    inputCheck.addEventListener("click",()=>{
          checked()
          count++
      })
      delet.addEventListener("click",(e)=>{
        taskDiv.remove()
      })
  }
  Task_content.value = ""
  Task_date.value = ""
  
}

let check = document.querySelector("#check");

check.addEventListener("click", () => {
  taskAdd();
});

//--------------------text change------------------

const text = document.querySelector(".changer");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Event";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Vacation";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Travel";
  }, 12000);
};
textLoad();
setInterval(textLoad, 12000);

//-------------------toogle-----------------------

const toogle = document.querySelector("body");
const btn = document.querySelector("#flexSwitchCheckChecked");
const white = document.querySelector(".changer");
const css_before = window.getComputedStyle(white, ":before");

btn.addEventListener("click", () => {
  toogle.classList.toggle("toogle");
  white.classList.toggle("white");

  if (css_before.backgroundColor === "rgb(217, 246, 255)") {
    white.style.setProperty("--afterDark", "#212121");
  } else if (css_before.backgroundColor === "rgb(33, 33, 33)") {
    white.style.setProperty("--afterDark", "rgb(217, 246, 255)");
  }
});
