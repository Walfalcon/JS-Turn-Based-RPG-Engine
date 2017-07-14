/*CHANGE ME */
var startingLevel = 0;
var startingHP = 0;
var levelUpHP = 0;
var refillHPOnLevelUp = 0;
var startingStage = 0;

window.onload = function () {
    var contentPane = document.getElementById('content');
    var game = new Game();
    var renderer = new Renderer(contentPane);
    game.start();

    document.getElementById("loadBtn").onclick = function () {
        game.load();
    };
    document.getElementById("saveBtn").onclick = function () {
        game.save();
    };
};

function Game () {
    this.stageNumber = startingStage;
    this.character = new Character();
    this.start = function () {
    };
    this.save = function () {
    };
    this.load = function () {
    };
    this.setStage = function (nextStage) {
    };
}

function Character () {
    this.level = startingLevel;
    this.maxHitpoints = this.hitpoints = startingHP;
    this.equippedWeap = 0;
    this.equippedArmor = 0;
    this.inventory = new Array();
    this.levelUp = function () {
        this.level++;
        this.maxHitpoints += levelUpHP;
        if (refillHPOnLevelUp) {
            this.hitpoints = this.maxHitpoints;
        } else {
            this.hitpoints += levelUpHP;
        }
    };
}

function Item (name, ID, type, desc, str) {
    if (!name) { name = "consumable" };
    if (!type) { type = "consumable" };
    if (!str) { str = 0 };
    this.itemName = name;
    this.itemID = ID;
    this.itemType = type;
    this.itemDesc = desc;
    this.itemStrength = str;
    this.use = function (character) {
        switch (this.itemType) {
            case "weapon":
                character.equippedWeap = this;
                break;
            case "armor":
                character.equippedArmor = this;
                break;
            case "consumable":
                switch (this.itemID) {
                    case 1:
                        character.hitpoints += this.itemStrength;
                        break;
                    /* ADD YOUR OWN */
                };
                break;
            default:
                throw "Unsupported item type";
        }
    };
}

function mapItem (xLoc, yLoc, ID) {
}

function Renderer (div) {
    this.draw = function (game) {
    };
}
