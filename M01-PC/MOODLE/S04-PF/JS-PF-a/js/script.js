// DOM
let paper = document.getElementById( "paper" );
let scissor = document.getElementById( "scissor" );
let rock = document.getElementById( "rock" );
// Modules ES6
// Functions
paper.addEventListener( "click", optionClickHandler );
scissor.addEventListener( "click", optionClickHandler );
rock.addEventListener( "click", optionClickHandler );

function optionClickHandler( e ) {
    let option = e.target.getAttribute( "data-option" );
    console.log( "Escogiste " + option + "..!" );
}


