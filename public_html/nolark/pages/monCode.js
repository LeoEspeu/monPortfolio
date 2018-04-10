/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", function () {
        var vrai = 0;
        var fixe = 1100;
        var salaire = fixe;
        var nbAncien = window.document.querySelector("#i_ancienneté").value;
        var cas20 = window.document.querySelector("#i_nom").value;
        var spirit = window.document.querySelector("#i_prenom").value;
        var multitec = window.document.querySelector("#i_email").value;
        var km = window.document.querySelector("#i_km").value;
        if (nbAncien === "" || cas20 === "" || spirit === "" || multitec === "" || km==="") {
            alert("Les case ne doivent pas êtres vide ou remplis par des valeurs non numérique");
            vrai = 1;
        }
        if (nbAncien < 0 || cas20 < 0 || spirit < 0 || multitec < 0 || km < 0) {
            alert("Les valeurs ne doivent pas être négative");
            vrai = 1;
        }
        if (nbAncien > 4 && nbAncien < 10) {
            salaire = salaire * 1.03;
        }
        if (nbAncien > 9) {
            salaire = salaire * 1.06;
        }
        salaire = salaire + (cas20 * 140 * 0.02);
        if (spirit > 50) {
            salaire = salaire + (spirit * 350 * 0.06);
        }
        if (multitec < 20) {
            salaire = salaire + (multitec * 180 * 0.04);
        }
        if (multitec > 20 && multitec < 51) {
            salaire = salaire + (multitec * 180 * 0.06);
        }
        if (multitec > 50) {
            salaire = salaire + (multitec * 180 * 0.1);
        }
        if (km < 351) {
            salaire = salaire + (km * 0.15);
        }
        if (km > 350) {
            salaire = salaire + (350 * 0.15);
        }
        if (vrai === 0) {
            window.document.querySelector("#i_url").value = salaire;
        }
    },false);
}, false);
