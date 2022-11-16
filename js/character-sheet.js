"use strict";
$(function() {

    let character = {
        name: "Nix",
        gender: "Female",
        level: "10",
        race: "Kobold",
        class: "Rogue",
        subclass: "Arcane Trickster",
        dualclass: null,
        background: "Fearful",
        alignment: "Chaotic Neutral",
        exp: null,
    }

    $('#name').html(character.name);
    $('#race').html(character.race);
    $('#class').html(character.class);
    $('#subclass').html(character.subclass);
    $('#background').html(character.background);
    $('#alignment').html(character.alignment);
    $('#exp').html(character.exp);

    // let headerDiv = document.querySelector('#header');
    // headerDiv.innerHTML = renderChar(character);

})();