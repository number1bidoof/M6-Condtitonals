let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

document.getElementById("startGame").addEventListener("click", startGame)
function startGame(){
    while (true){
        userGuess = prompt("Guess a number between 1 and 10, type 999 to exit");
        userGuess = Number(userGuess);
        if (userGuess === 999){
            alert("Goodbye :D");
            break
        } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("What you entered is invalid, please try again");
            attempts++;
            continue;
        } else if (userGuess < randomNumber) {
            alert("Your number is too low, try again");
            attempts++;
        } else if (userGuess > randomNumber) {
            alert("Your number is too high, try again")
            attempts++;
        } else if (userGuess === randomNumber) {
            alert(`Congrats!!! you took ${attempts} attempts and the number is ${randomNumber}`)
            break
        }
    }
}