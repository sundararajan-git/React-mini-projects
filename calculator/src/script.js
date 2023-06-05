let btn = document.querySelectorAll(".box");
let p = document.getElementById("output");
let ac = document.getElementById("ac");
let cancel = document.getElementById("cancel");
let ope = document.getElementById("ope");
let equal = document.getElementById("equal");
let t = document.getElementById("top");

// print the text bord
btn.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (p.textContent == "Calculate....") {
      p.textContent = "";
    }
    p.innerHTML += btn.textContent;
  })
);

// all clear button
ac.addEventListener("click", allClear);
function allClear() {
  if (p.textContent != "") {
    p.innerHTML = "Calculate....";
  }
  if (c.textContent != "") {
    c.innerHTML = "";
  }
}

// cancel button
cancel.addEventListener("click", cancelButton);
function cancelButton() {
  let del = p.textContent;
  let arr = del.split("");
  if (arr.length == 1) {
    p.textContent = "Calculate....";
  } else if (p.textContent == "Calculate....") {
  } else if (c.textContent != "") {
    c.innerHTML = "";
  } else if (p.textContent != "") {
    arr.pop();
    p.textContent = arr.join("");
  }
}

let c = document.createElement("p");
t.appendChild(c);
c.innerHTML = "";
equal.addEventListener("click", () => {
  c.style.color = "orangered";
  try {
    t.appendChild(c);
    c.innerHTML = eval(p.textContent);
  } catch {
    alert("check valid calculation");
  }
});
