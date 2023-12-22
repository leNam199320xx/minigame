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
var degree = 360;
function preload ()
{
}

function create ()
{
    game.graphics = game.add.graphics();
}

function update ()
{        
    game.graphics.clear();
    game.graphics.lineStyle(1, 0x00ff00, 1);
    drawCircle(["test1", "test2"]);
    game.curve.draw(game.graphics);
}

function drawCircle(listOfItem){
    if(typeof(listOfItem) == "object"){
        //draw item

        const startPoint = new Phaser.Math.Vector2(100, 500);
        const controlPoint1 = new Phaser.Math.Vector2(50, 100);
        const controlPoint2 = new Phaser.Math.Vector2(600, 100);
        const endPoint = new Phaser.Math.Vector2(700, 500);

        game.curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
    }
  
}
