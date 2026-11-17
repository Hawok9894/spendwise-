document.getElementById("startBtn").addEventListener("click", function() {
  // 1. Weydii income-ka
  let income = Number(prompt("Waa imisa dakhligaaga bishan?"));
  if (!income || income <= 0) {
    alert("Fadlan geli dakhli sax ah");
    return;
  }

  // 2. Weydii inta kharash ee uu leeyahay
  let count = Number(prompt("Imisa kharash ayaad rabtaa inaad geliso? (tusaale: 3)"));
  if (!count || count <= 0) {
    alert("Fadlan geli tiro sax ah");
    return;
  }

  // 3. Array - halkan ayaan ku kaydinaynaa kharashyada
  let expenses = [];

  for (let i = 0; i < count; i++) {
    let name = prompt("Kharashka " + (i + 1) + " magaciisa? (tusaale: Lunch)");
    let amount = Number(prompt("Imisa ayuu ahaa " + name + "?"));
    if (name && amount) {
      expenses.push({ name: name, amount: amount });
    }
  }

  // 4. Loop - xisaabi total-ka
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  let balance = income - total;

  // 5. Conditionals - ma over budget baa mise under?
  let status = "";
  if (total > income) {
    status = "⚠️ Over Budget! Waxaad dhaaftay dakhligaaga.";
  } else if (total === income) {
    status = "⚖️ Exactly on Budget!";
  } else {
    status = "✅ Under Budget! Si fiican ayaad u maamushay.";
  }

  // 6. DOM Manipulation - ku shub #results
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  // Income
  resultsDiv.innerHTML += `<div class="result-item"><strong>Income:</strong> $${income}</div>`;
  
  // Loop mar kale si loo muujiyo kharash kasta
  expenses.forEach(function(exp) {
    resultsDiv.innerHTML += `<div class="result-item">${exp.name}: $${exp.amount}</div>`;
  });

  resultsDiv.innerHTML += `<div class="result-item"><strong>Total Expenses:</strong> $${total}</div>`;
  resultsDiv.innerHTML += `<div class="result-item"><strong>Balance:</strong> $${balance}</div>`;
  resultsDiv.innerHTML += `<div class="result-item"><strong>Status:</strong> ${status}</div>`;

  // 7. Muuji resultCard-ka qarsoon
  document.getElementById("resultCard").style.display = "block";
});
