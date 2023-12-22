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
    this.graphics = this.add.graphics();
}

function update ()
{        
    this.graphics.clear();
    this.graphics.lineStyle(1, 0x00ff00, 1);
    this.curve = drawCircle(["test1", "test2"]);
    this.curve.draw(this.graphics);
}

function drawCircle(listOfItem){
    if(typeof(listOfItem) == "object"){
        //draw item

        const startPoint = new Phaser.Math.Vector2(100, 500);
        const controlPoint1 = new Phaser.Math.Vector2(50, 100);
        const controlPoint2 = new Phaser.Math.Vector2(600, 100);
        const endPoint = new Phaser.Math.Vector2(700, 500);

        return new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
    }
  
}
