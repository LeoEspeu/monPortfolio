/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer2").addEventListener("click", function () {
        var prime = 0;
        var ancienneté = window.document.querySelector("#i_ancien").value;
        var km = window.document.querySelector("#i_kmparcours").value;
        var nbacc = window.document.querySelector("#i_nbaccidents").value;
        if (ancienneté > 3) {
            prime = (ancienneté - 4) * 30 + 300 + prime;
        }
        if (km < 90000) {
            prime = km * 0.01 + prime;
        } else {
            prime = prime + 900;
        }
        if (nbacc === 1) {
            prime = prime / 2;
        }
        if (nbacc === 2) {
            prime = prime / 3;
        }
        if (nbacc === 3) {
            prime = prime / 4;
        }
        if (nbacc > 3) {
            prime = 0;
        }
        alert("Les valeurs ne doivent pas être négative");
        window.document.querySelector("#i_prime").value = prime;
    }, false);
}, false);
