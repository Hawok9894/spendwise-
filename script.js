let expenses = JSON.parse(localStorage.getItem("expenses") || "[]");

function render(){
  let list = document.getElementById("list");
  list.innerHTML = "";
  let total = 0;
  expenses.forEach((e,i)=>{
    total += Number(e.amount);
    list.innerHTML += `<li>${e.name} - ${e.category} - $${e.amount} <button class="delete" onclick="removeExpense(${i})">X</button></li>`;
  });
  document.getElementById("total").textContent = total;
}

function addExpense(){
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let category = document.getElementById("category").value;
  if(!name || !amount) return alert("Fadlan buuxi magaca iyo lacagta");
  expenses.push({name, amount, category});
  localStorage.setItem("expenses", JSON.stringify(expenses));
  document.getElementById("name").value="";
  document.getElementById("amount").value="";
  render();
}

function removeExpense(i){
  expenses.splice(i,1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  render();
}

render();
