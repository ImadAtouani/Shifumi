let score = { joueur: 0, ordinateur: 0, egalite: 0 };
let manche = 1;
const manchesMax = 3;
const iconesChoix = { Pierre: "🪨", Feuille: "📄", Ciseaux: "✂️" };

function jouer(choixJoueur) {
  if (manche > manchesMax) return;
  const choixPossibles = ["Pierre", "Feuille", "Ciseaux"];
  const choixOrdinateur = choixPossibles[Math.floor(Math.random() * 3)];
  let resultat = "";

  document.getElementById(
    "affichageChoix"
  ).innerHTML = `Vous : <b>${iconesChoix[choixJoueur]} ${choixJoueur}</b> | Ordinateur : <b>${iconesChoix[choixOrdinateur]} ${choixOrdinateur}</b>`;

  if (choixJoueur === choixOrdinateur) {
    score.egalite++;
    resultat = "🤝 Égalité !";
  } else if (
    (choixJoueur === "Pierre" && choixOrdinateur === "Ciseaux") ||
    (choixJoueur === "Feuille" && choixOrdinateur === "Pierre") ||
    (choixJoueur === "Ciseaux" && choixOrdinateur === "Feuille")
  ) {
    score.joueur++;
    resultat = "🎉 Vous gagnez !";
  } else {
    score.ordinateur++;
    resultat = "🤖 L'ordinateur gagne !";
  }

  document.getElementById("resultat").textContent = resultat;
  document.getElementById(
    "scoreJeu"
  ).textContent = `🏆 Victoires: ${score.joueur} | 🤖 Défaites: ${score.ordinateur} | 🤝 Egalités: ${score.egalite}`;

  manche++;
  if (manche <= manchesMax) {
    document.getElementById(
      "manche"
    ).textContent = `🕹️ Manche ${manche} / ${manchesMax}`;
  } else {
    document.getElementById("manche").textContent = `🚩 Partie terminée !`;
    document.getElementById("rejouer").style.display = "inline-block";
    afficherResultatFinal();
  }
}

function afficherResultatFinal() {
  let final = "";
  if (score.joueur > score.ordinateur) {
    final = "🏅 Vous êtes le meilleur !";
  } else if (score.joueur < score.ordinateur) {
    final = "🤖 L'ordinateur est le meilleur !";
  } else {
    final = "🤝 Egalité sur l'ensemble des manches !";
  }
  document.getElementById("resultat").innerHTML += `<br><b>${final}</b>`;
}

function rejouer() {
  score = { joueur: 0, ordinateur: 0, egalite: 0 };
  manche = 1;
  document.getElementById("manche").textContent = `🕹️ Manche 1 / ${manchesMax}`;
  document.getElementById(
    "scoreJeu"
  ).textContent = `🏆 Victoires: 0 | 🤖 Défaites: 0 | 🤝 Egalités: 0`;
  document.getElementById("resultat").textContent = "";
  document.getElementById("affichageChoix").textContent = "";
  document.getElementById("rejouer").style.display = "none";
}
