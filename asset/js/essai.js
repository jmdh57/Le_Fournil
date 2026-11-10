const input = document.getElementById("Surnom");
const bouton = document.getElementById("monBouton");

bouton.addEventListener("click", () => {
  const valeur = input.value;  
  console.log(valeur);
});