// const btnAdd = document.getElementById("btn-ajouter");
const btnAdd = document.querySelector("#btn-ajouter");
const btnEffacer = document.querySelector("#btn-effacer");
const inputIntitule = document.getElementById("intitule");
const inputSomme = document.getElementById("somme");
const listeDepenses = document.getElementById("dep-list");
const spanTotal = document.getElementById("total-dep");

let somme = 0;

btnAdd.addEventListener("click", () => {
  console.log(inputIntitule.value, inputSomme.value);
  const newLi = document.createElement("li");
  newLi.textContent = `${inputIntitule.value} : ${inputSomme.value} €`;
  newLi.classList.add("list-group-item");
  listeDepenses.appendChild(newLi);

  //somme = somme + inputSomme.value;
  // somme += parseFloat(inputSomme.value);
  // somme += Number(inputSomme.value);
  somme += +inputSomme.value;
  spanTotal.textContent = `${somme} €`;
  effacer();
});

btnEffacer.addEventListener("click", effacer);

function effacer() {
  inputIntitule.value = "";
  inputSomme.value = "";
}
