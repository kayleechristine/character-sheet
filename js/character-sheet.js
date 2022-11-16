"use strict";
(function() {

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

    function renderChar(char) {
        let html = '<div className="name-div">' +
            '           <strong>Character Name: </strong>' +
            '           <p className="name">' + char.name + '</p>' +
            '       </div>';
        html += '<div className="char-div">\n' +
            '        <strong>Race: </strong>' +
            '        <p className="race">' + char.race + '</p>\n' +
            '        <strong>Background: </strong>' +
            '        <p className="background">' + char.background + '</p>\n' +
            '        <strong>Alignment: </strong>' +
            '        <p className="alignment">' + char.alignment + '</p>\n' +
            '        <strong>Exp: </strong>' +
            '        <p className="exp-points">' + char.exp + '</p>\n' +
            '    </div>';
        html += '<div className="class-div">\n' +
            '        <strong>Class: </strong>' +
            '        <p className="class">' + char.class + '</p>\n' +
            '        <strong>Subclass: </strong>' +
            '        <p className="subclass">' + char.subclass + '</p>\n' +
            '    </div>';

        return html;
    }

    // function renderCoffees(coffees) {
    //     let html = '';
    //     for(let i = 0; i < coffees.length; i++) {
    //         html += renderCoffee(coffees[i]);
    //     }
    //     return html;
    // }

    let headerDiv = document.querySelector('#header');
    headerDiv.innerHTML = renderChar(character);

})();