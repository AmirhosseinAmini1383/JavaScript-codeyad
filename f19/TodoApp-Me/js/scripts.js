const themeSwitcherBtn = document.getElementById("theme-switcher");
const bodyTag = document.querySelector("body");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("addt");
const ul = document.querySelector(".todos");
const filter = document.querySelector(".filter");
const BtnFilter = document.querySelector("#clear-completed")

function main() {
  // Theme-Switcher
  themeSwitcherBtn.addEventListener("click", () => {
    bodyTag.classList.toggle("light");
    const themeImg = themeSwitcherBtn.children[0];
    themeImg.setAttribute(
      "src",
      themeImg.getAttribute("src") === "./assets/images/icon-sun.svg" ?
      "./assets/images/icon-moon.svg" :
      "./assets/images/icon-sun.svg"
    );
  });


  makeTodoElement(JSON.parse(localStorage.getItem("Todos")));


  ul.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("card") &&
      !e.target.classList.contains("dragging")) {
      const draggingCard = document.querySelector(".dragging");
      const Cards = [...ul.querySelectorAll(".card")];
      const currentPos = Cards.indexOf(draggingCard);
      const newPos = Cards.indexOf(e.target);
      console.log(`currentPos ${currentPos} newPos ${newPos}`);
      // console.log(Cards.indexOf(draggingCard));
      if (currentPos > newPos) {
        ul.insertBefore(draggingCard, e.target);
      } else {
        ul.insertBefore(draggingCard, e.target.nextSibling);
      }
      const todos = JSON.parse(localStorage.getItem("Todos"));
      const removed = todos.splice(currentPos, 1);
      todos.splice(newPos, 0, removed[0]);
      localStorage.setItem("Todos", JSON.stringify(todos));
    }


    // console.log(e.target);
  })


  //Add Todo In LocalStorage
  addBtn.addEventListener("click", () => {
    const item = todoInput.value.trim();
    if (item) {
      todoInput.value = "";
      const todos = !localStorage.getItem("Todos") ? [] :
        JSON.parse(localStorage.getItem("Todos"));

      const currentTodo = {
        item: item,
        isCompleted: false,
      };

      todos.push(currentTodo);
      localStorage.setItem("Todos", JSON.stringify(todos));
      makeTodoElement([currentTodo]);
    }
  });


  todoInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      addBtn.click();
    }
  })


  filter.addEventListener("click", (e) => {
    const id = e.target.id;
    if (id) {
      document.querySelector(".on").classList.remove("on");
      document.getElementById(id).classList.add("on");
      document.querySelector(".todos").className = `todos ${id}`
    }
  })

  BtnFilter.addEventListener("click", () => {
    var deleteIndexes = [];
    document.querySelectorAll(".card.checked").forEach((card) => {
      deleteIndexes.push(
        [...document.querySelectorAll(".todos .card")].indexOf(card)
      )
      card.classList.add("fall");
      card.addEventListener("animationend", () => {
        card.remove();
      });
    });
    removeMultipleTodos(deleteIndexes);
  })


}

function removeMultipleTodos(indexes) {
  var todos = JSON.parse(localStorage.getItem("Todos"));
  todos = todos.filter((todo, index) => {
    return !indexes.includes(index);
    // return indexes.includes(index);
  })
  // console.log(todos);
  localStorage.setItem("Todos", JSON.stringify(todos));

}


function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("Todos"));
  todos.splice(index, 1);
  localStorage.setItem("Todos", JSON.stringify(todos));
}

function stateTodo(index, isComplete) {
  const todos = JSON.parse(localStorage.getItem("Todos"));
  todos[index].isCompleted = isComplete;
  localStorage.setItem("Todos", JSON.stringify(todos));
}



function makeTodoElement(todoArray) {
  if (!todoArray) {
    return null;
  }

  const ItemsLeft = document.querySelector("#items-left")

  todoArray.forEach((todoObject) => {
    //Create Html Elements Of Todo
    const card = document.createElement("li");
    const cbContainer = document.createElement("div");
    const cbInput = document.createElement("input");
    const checkSpan = document.createElement("span");
    const item = document.createElement("p");
    const clearBtn = document.createElement("button");
    const img = document.createElement("img");

    //Add Classes
    card.classList.add("card");
    cbContainer.classList.add("cb-container");
    cbInput.classList.add("cb-input");
    checkSpan.classList.add("check");
    item.classList.add("item");
    clearBtn.classList.add("clear");
    //Add Attributes
    card.setAttribute("draggable", true);
    cbInput.setAttribute("type", "checkbox");
    img.setAttribute("src", "./assets/images/icon-cross.svg");
    img.setAttribute("alt", "Clear It");
    item.textContent = todoObject.item;
    if (todoObject.isCompleted) {
      card.classList.add("checked");
      cbInput.setAttribute("checked", "checked");
    }
    //Add EventListener
    card.addEventListener("dragstart", () => {
      card.classList.add("dragging");
    })

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    })

    cbInput.addEventListener("click", (e) => {
      const currentCard = cbInput.parentElement.parentElement;
      const checked = cbInput.checked;
      const currentCardIndex = [...document.querySelectorAll(".todos .card")]
        .indexOf(currentCard);
      stateTodo(currentCardIndex, checked);
      checked ? currentCard.classList.add("checked") : currentCard.classList.remove("checked");
      ItemsLeft.textContent = document.querySelectorAll(
        ".todos .card:not(.checked)"
      ).length;

    })

    clearBtn.addEventListener("click", (e) => {
      const currentCard = clearBtn.parentElement;
      currentCard.classList.add("fall");
      const indexOfCurrentCard = [...document.querySelectorAll(".todos .card")].indexOf(currentCard);
      removeTodo(indexOfCurrentCard);

      currentCard.addEventListener("animationend", () => {
        //Todos Set New Value Of Items Left

        setTimeout(() => {
          currentCard.remove();
          ItemsLeft.textContent = document.querySelectorAll(
            ".todos .card:not(.checked)"
          ).length;
        }, 100)

      })

    })
    //Set Element by Parent Child
    clearBtn.appendChild(img);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(checkSpan);
    card.appendChild(cbContainer);
    card.appendChild(item);
    card.appendChild(clearBtn);

    document.querySelector(".todos").appendChild(card);
  });
  ItemsLeft.textContent = document.querySelectorAll(
    ".todos .card:not(.checked)"
  ).length;

}

document.addEventListener("DOMContentLoaded", main);