/**
 * @author: LASME Ayou Emeline
 */

// demander au joueur 1 de choisir un mot
const mot = prompt("choisissez un mot d'au moins 8 lettres:");

// s'assurer que le mot a au moins 8 lettres
if (mot.length < 8) {
    console.log("Le mot doit avoir au moins 8 lettres !");
} else {
    // masquer le mot en utilisant des étoiles
    let motCache = '';
    for (let i = 0; i < mot.length; i++) {
        motCache += '*';
    }
console.log(motCache); // afficher le mot masqué dans la console

 // initialiser le compteur du nombre de chances et la liste des suppositions
let nombreChances = 10;
let lettreDevinee = [];

// boucle tant que le joueur a encore des chances et n'a pas deviné le mot
while (nombreChances > 0 && motCache.indexOf('*') !== -1) {
    // demander au joueur 2 de deviner une lettre
    let lettre = prompt("Joueur 2, devinez une lettre :");
    // vérifier si la lettre a déjà été devinée
    if (lettreDevinee.indexOf(lettre) !== -1) {
        console.log("Vous avez déjà deviné cette lettre !");
    } else {
        // ajouter la lettre aux suppositions
        lettreDevinee.push(lettre);
        console.log("Suppositions :", lettreDevinee);
        // vérifier si la lettre se trouve dans le mot
        if (mot.indexOf(lettre) !== -1) {
            console.log("Bonne supposition !");
            // afficher la lettre aux bons endroits dans le mot masqué
            let temp = '';
                for (let i = 0; i < mot.length; i++) {
                    if (mot[i] === lettre) {
                        temp += lettre;
                    } else {
                        temp += motCache[i];
                    }
                }
                motCache = temp;
                console.log(motCache); // afficher le mot masqué avec la lettre visible
            } else {
                console.log("Mauvaise supposition !");
                nombreChances--; // décrémenter le compteur de chances
                console.log("Chances restantes :", nombreChances);
            }
        }
    }

    // afficher un message en fonction de la fin de la partie
    if (motCache.indexOf('*') === -1) {
        console.log("CONGRATS YOU WIN !");
    } else {
        console.log("YOU LOSE !");
    }
}