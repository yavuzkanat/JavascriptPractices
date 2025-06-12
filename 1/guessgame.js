function guesser(){
    let rdm = Math.round(Math.random());
    let guess = document.getElementById("num");
    if( parseInt(guess.options[guess.selectedIndex].text) == rdm){
        document.getElementById("result").innerHTML = "well done";
    }else{
        document.getElementById("result").innerHTML = "try again";
    }
    rdm = Math.round(Math.random());
}
