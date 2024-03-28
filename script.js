let pHealth = 100;
let oppHealth = 100;

function tossCoin() {
    const cointoss = document.getElementById("coinhort");
    const result = Math.random() < 0.5 ? "head" : "tail";
    const plChoice = cointoss.value;

    if (result === plChoice) {
        document.getElementById("message").innerText = `Coin is ${result}. You chose ${plChoice}!`;
        document.getElementById("attackbtn").disabled = false;
        document.getElementById("defendbtn").disabled = true;
    } else {
        document.getElementById("message").innerText = `Coin is ${result}. You chose ${plChoice}!`;
        document.getElementById("attackbtn").disabled = false;
        document.getElementById("defendbtn").disabled = false;
    }
}

function calculateDamage() {
    return Math.floor(Math.random() * 5) + 1;
}

function pAttack() {
    document.getElementById("message").innerText = "You will attack!";
    const damage = calculateDamage(); 
    oppHealth -= damage; 
    document.getElementById("opphealth").innerText = oppHealth; 
    if (oppHealth <= 0) { 
        document.getElementById("message").innerText = "Player wins!";
        disableButtons();
    }
}

function pDefend() {
    document.getElementById("message").innerText = "You will defend!";
    const damage = 1;
    pHealth -= damage; 
    document.getElementById("phealth").innerText = pHealth; 
    if (pHealth <= 0) { 
        document.getElementById("message").innerText = "Opponent wins!";
        disableButtons();
    }
}

function rGame() {
    pHealth = 100; 
    oppHealth = 100; 
    document.getElementById("phealth").innerText = pHealth; 
    document.getElementById("opphealth").innerText = oppHealth; 
    document.getElementById("message").innerText = "";
    document.getElementById("attackbtn").disabled = true; 
    document.getElementById("defendbtn").disabled = true; 
    document.getElementById("resetbtn").disabled = true; 
}

function disableButtons() {
    document.getElementById("attackbtn").disabled = true; 
    document.getElementById("defendbtn").disabled = true; 
    document.getElementById("resetbtn").disabled = false; 
}

function startGame() {
    document.getElementById("loadscreen").style.display = "none"; 
    document.getElementById("gamescreen").style.display = "block"; 
}
