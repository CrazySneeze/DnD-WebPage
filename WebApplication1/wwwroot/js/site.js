var profBonus = [
    ["1-4", "2"],
    ["5-8", "3"],
    ["9-12", "4"],
    ["13-16", "5"],
    ["17-20", "6"]
];




function makeSaveCheckVis() {
    var saveCheckBox = document.querySelectorAll('[data="box"]');
    for (var i = 0; i < saveCheckBox.length; i++) {
        if (saveCheckBox[i].style.display === "none") {
            saveCheckBox[i].style.display = "block";
        } else {
            saveCheckBox[i].style.display = "none";
        }
    }

    var saveCheckP = document.querySelectorAll('[data="disp"]');
    for (var i = 0; i < saveCheckP.length; i++) {
        if (saveCheckP[i].style.display === "none") {
            saveCheckP[i].style.display = "block";
        } else {
            saveCheckP[i].style.display = "none";
        }
    }
    updateSaveScore();
    setProfBonus();
    setHitDiceNum();
}

function updateSaveScore() {
    var abs = getABS();
    console.log(abs);
    for (var key in abs) {
        var saveCheckP = document.getElementById(key + "Disp");
        var saveCheckBox = document.getElementById(key + "Box");
        if (saveCheckBox.checked) {
            saveCheckP.innerHTML = Math.floor((abs[key] - 10) / 2) + getProfBonus();
        } else {
            saveCheckP.innerHTML = Math.floor((abs[key] - 10) / 2);
        }
    }
}

function getABS() {
    abilityScores = {
        "str": 8,
        "dex": 8,
        "con": 8,
        "int": 8,
        "wis": 8,
        "cha": 8,
    };
    for (var key in abilityScores) {
        abilityScores[key] = parseInt(document.getElementById(key + "ABS").value);
    }

    return abilityScores;
}

function getProfBonus() {
    var level = document.getElementById("level").innerHTML;
    for (var i = 0; i < profBonus.length; i++) {
        var a = parseInt(profBonus[i][0].split("-")[0]);
        var b = parseInt(profBonus[i][0].split("-")[1]);
        if (level >= a && level <= b) {
            return parseInt(profBonus[i][1]);
        }
    }
}

function setProfBonus() {
    document.getElementById("profBon").innerHTML = getProfBonus();
}

function setHitDiceNum() {
    document.getElementById("hitDiceNum").innerHTML = document.getElementById("level").innerHTML;
}