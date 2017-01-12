playerHP = 50;
playerAtk = 10;
monHP = 0;
monAtk = 0;

function setPlayer(name, hp, atk) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("hp").innerHTML = hp;
    document.getElementById("atk").innerHTML = atk;
}

function newMonster() {
    monHP = 25;
    monAtk = 15;
    document.getElementById("m-name").innerHTML = "Test";
    document.getElementById("m-hp").innerHTML = monHP;
    document.getElementById("m-atk").innerHTML = monAtk;
    document.getElementById("btn-new").disabled = true;
    document.getElementById("btn-atk").disabled = false;
}

function update() {
    document.getElementById("m-hp").innerHTML = monHP;
}

function atack() {
    monHP -= playerAtk;
    update();
    if (monHP <= 0) {
        document.getElementById("btn-new").disabled = false;
        document.getElementById("btn-atk").disabled = true;
    }
}

function load() {
    setPlayer("Test", playerHP, playerAtk);
}
load();
