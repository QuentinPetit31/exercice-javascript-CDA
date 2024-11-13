import "./style.css";

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

let Allume = document.querySelector("#Allume");
Allume.addEventListener("click", () => {
  titre.classList.add("titre");
});

let Eteindre = document.querySelector("#Eteindre");
Eteindre.addEventListener("click", () => {
  titre.classList.remove("titre");
});

let Interrupteur = document.querySelector("#Interrupteur");
Interrupteur.addEventListener("click", () => {
  titre.classList.toggle("titre");
});

document.addEventListener("keyup", function (eventClavier) {
  console.log("Yes Moi ECRIRE");
  console.log(eventClavier);
  console.log(eventClavier.key);
});

document.addEventListener("click", (eventClicke) => {
  console.log(eventClicke);
});

const images = ["diddy1.jpg", "diddy2.avif", "diddy3.jpeg"];

// Fonction pour afficher une image aléatoire à la position du clic
function afficherImageAleatoire(x, y) {
  // Sélectionne une image aléatoire dans le tableau
  const imageAleatoire = images[Math.floor(Math.random() * images.length)];

  const imgElement = document.createElement("img");
  imgElement.src = imageAleatoire;
  imgElement.alt = "Image aléatoire";
  imgElement.style.width = "200px";
  imgElement.style.position = "absolute";
  imgElement.style.left = `${x}px`;
  imgElement.style.top = `${y}px`;

  document.body.appendChild(imgElement);
}

document.addEventListener("click", (eventClicke) => {
  console.log(eventClicke);

  afficherImageAleatoire(eventClicke.clientX, eventClicke.clientY);
});

VANTA.FOG({
  el: "#app",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xffffff,
  lowlightColor: 0xffffff,
  baseColor: 0xff0000,
  blurFactor: 0.35,
  speed: 2.1,
  zoom: 2.1,
});

const laBar = document.querySelector(".bar");
document.addEventListener("scroll", function (event) {
  console.log(event);
  //Le scrollMax = hauteur de la page - hauteur de affichage
  const scrollMax = document.body.scrollHeight - window.innerHeight;
  // On fait un pourcentage du scroll de l'utilisateur
  const onEstOu = (window.scrollY / scrollMax) * 100;
  //Enfin on assigne ce pourcentage de scroll
  //à la width(%) du style de la bar.
  laBar.style.width = onEstOu + "%";
  console.log(`
      Hauteur page : ${document.body.scrollHeight}
      Hauteur affichage : ${window.innerHeight}
      Scroll Position : ${window.scrollY}
      pourcentage de scroll :${onEstOu} %`);
});
