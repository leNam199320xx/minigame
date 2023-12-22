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
function preload ()
{
}

function create ()
{
    graphics = this.add.graphics();
}

function update ()
{        
    graphics.clear();
    drawCircle(["test1", "test2"]);
}

function drawCircle(listOfItem){
    if(typeof(listOfItem) == "object"){
        graphics.lineStyle(4, 0xff00ff, 1);

        //  Without this the arc will appear closed when stroked
        graphics.beginPath();

        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        graphics.arc(400, 300, 100, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

        graphics.strokePath();

        //  Without this the arc will appear closed when stroked
        graphics.beginPath();

        graphics.lineStyle(4, 0x0000ff, 1);
        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        graphics.arc(400, 300, 100, Phaser.Math.DegToRad(180), Phaser.Math.DegToRad(90), true);
        //  Uncomment this to close the path before stroking
        // graphics.closePath();

        graphics.strokePath();
    }
  
}
