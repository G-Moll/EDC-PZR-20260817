// DOM
let paper = document.getElementById( "paper" );
let scissor = document.getElementById( "scissor" );
let rock = document.getElementById( "rock" );

let matches = document.getElementsByClassName( "match" );

// Event listeners
paper.addEventListener( "click", optionClickHandler );
scissor.addEventListener( "click", optionClickHandler );
rock.addEventListener( "click", optionClickHandler );

matches[ 0 ].addEventListener( "click", matchClickHandler );
matches[ 1 ].addEventListener( "click", matchClickHandler );
matches[ 2 ].addEventListener( "click", matchClickHandler );
matches[ 3 ].addEventListener( "click", matchClickHandler );


// Event handlers
function optionClickHandler( e ) {
    let option = e.target.getAttribute( "data-option" );
    console.log( "Escogiste " + option + "..!" );
}

function matchClickHandler( e ) {
    let description = e.target.innerText;
    console.log( description );
}




