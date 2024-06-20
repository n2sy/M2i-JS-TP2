const btnAdd = document.getElementById("btn-ajouter");
const inputIntitule = document.getElementById("intitule");
const inputSomme = document.getElementById("somme");

btnAdd.addEventListener("click", () => {
  console.log(inputIntitule.value, inputSomme.value);
});
