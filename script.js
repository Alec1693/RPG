let xp = 0;
let health = 100;
let gold = 50; 
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations = []

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {

}

function goTown() {
    button1.innerHTML = "Go to Store";
    button2.innerHTML = "Go to Cave";
    button3.innerHTML = "Fight Dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerHTML = "You are in the town square. You see a sign that says \"store\"."
}

function goStore() {
    button1.innerHTML = "Buy 10 health (10 gold)";
    button2.innerHTML = "Buy weapon (30 gold)";
    button3.innerHTML = "Go to town.";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerHTML = "You enter the store."
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting Dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}