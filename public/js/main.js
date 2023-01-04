let perso1 = {
    nom : "François",
    panier : ['tomates', 'oignon', 'persil'],
    derober(){
        perso1.panier.push(perso2.panier[0]);
        perso1.panier.push(perso2.panier[2]);
        perso2.panier.splice(0, 2);
    }
}
let perso2 = {
    nom : "Sergio",
    panier : ['concombre', 'pain', 'grenade'],
}

perso1.derober();
console.log(perso1.panier);
console.log(perso2.panier);
