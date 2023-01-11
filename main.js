let childrenParts, parts, tranche, montant, message;
let netImposable = Number(prompt("Veuillez saisir le revenu net imposable de votre foyer :"));
let adults = Number(prompt("Veuillez saisir le nombre d'adultes constituant votre foyer :"));
let children = Number(prompt("Veuillez saisir le nombre d'adultes constituant votre foyer :"));


if (children <= 2) {
    childrenParts = children/2
} else {
    childrenParts = children -1
};

parts = adults + childrenParts;

netImposable = netImposable/parts;

if (netImposable <= 10777) {
    tranche = 1
} else if (netImposable <= 27478) {
    tranche = 2
} else if (netImposable <= 78570) {
    tranche = 3
} else if (netImposable <= 168994) {
    tranche = 4
} else if (netImposable > 168994) {
    tranche = 5
};

switch (tranche) {
    case 1 :
        montant = 0;
        break;
    case 2 :
        montant =  Math.round((netImposable-10777)*0.11*parts);
        break;
    case 3 : 
        montant =  Math.round(((27478-10777)*0.11 + (netImposable-27477)*0.3)*parts);
        break
    case 4 :
        montant =  Math.round(((27478-10777)*0.11 + (78570-27477)*0.3 + (netImposable-78570)*0.41)*parts);
        break
    case 5 : 
        montant = Math.round(((27478-10777)*0.11 + (78570-27477)*0.3 + (168994-78570)*0.41 + (netImposable-168994)*0.45)*parts);
};

message = `Le montant de votre impôt sur le revenu s'élève à ${montant}€.`;

alert(message);
