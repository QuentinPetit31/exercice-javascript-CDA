import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    </a>
    <h1>"La Pizza Rafinata"</h1>
  </div>
  
`;
let adresse = "15 rue du colonel moutarde";
let ananas = "Jamais";
let prenom = "GONTRAND";
let age = 38;
let blague =
  "Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre? 'Arrête de me trancher la route !'";
let sumUpOrderPhrase =
  "Bonjour " +
  prenom +
  ", tu as " +
  age +
  " ans today. Tu aimes " +
  ananas +
  " ? Alors tu as le droit à une blague : " +
  blague;
"Tu seras livré au" + adresse + ".";

console.log(sumUpOrderPhrase);
let notes = [15, 18, 17];
let moyenne = calculerMoyenne(notes);

function calculerMoyenne(notes) {
  let somme = 0;
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }
  let moyenne = somme / notes.length;
  return moyenne;
}

// Affiche la moyenne et le message correspondant
console.log("Moyenne :", moyenne);
if (moyenne > 15) {
  console.log("Très bien !");
} else {
  console.log("Lâche rien.");
}

const titre = document.getElementById("monTitre");

titre.addEventListener("click", () => {
  if (titre.textContent === "D.O.M Events") {
    titre.textContent = "-- :D --";
  } else {
    titre.textContent = "D.O.M Events";
  }
});
