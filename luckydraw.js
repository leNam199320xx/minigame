import "./phaser.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var graphics;
var degree = 360;
var isStart = false;
var count = 1;

function preload() {
    game.load.image('button', 'btn-start-80.png');
}

function create() {
    game.stage.backgroundColor = "#4488AA";
    graphics = this.add.graphics();

    button = game.add.button(0, 80, 'button', actionOnClick, this, 'over', 'out', 'down');

}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick() {
    isStart = true;
}

function update() {
    graphics.clear();
    if (isStart) {
        drawCircle(["test1", "test2"]);
        drawClockWise();
    }
    else {
        button.visible = false;
    }
}

function drawCircle(listOfItem) {
    if (typeof (listOfItem) == "object") {
        count = listOfItem.length;
        var startCorner = 0;
        //  Without this the arc will appear closed when stroked
        for(var i =0; i < count; i++){
            var corner = 360 / count;
            graphics.lineStyle(4, 0xff00ff, 1);
            graphics.beginPath();
            graphics.slice(400, 300, 100, Phaser.Math.DegToRad(startCorner), Phaser.Math.DegToRad(corner), true);
            graphics.strokePath();
            startCorner += corner;
        }
    }

}

function drawClockWise() {

}