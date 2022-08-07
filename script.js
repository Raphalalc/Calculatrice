const touches = [...document.querySelectorAll('.bouton, .boutonOrange')];
const listKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

/* Event sur les touches */
document.addEventListener('keydown',(e)=>{
    const valeur = e.keyCode.toString();
    calculer(valeur)

});
/* Event sur les click */
document.addEventListener('click', (e)=>{
    const valeur= e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) => {
    if (listKeycode.includes(valeur)){
        switch(valeur){
            /* keycode 8 pour effacer */
            case '8':
                ecran.textContent ="";
                break;
           /*  keycode 13 pour calculer */
            case '13':
             /*    La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères. */
           /*   La propriété Node.textContent représente le contenu textuel d'un nœud et de ses descendants. */
                const calcul = eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur);
                const touche = touches [indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error',(e)=>{
    alert('Une erreur est survenue dans votre calcul : \n'+ e.message);
}
);