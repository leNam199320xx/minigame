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
    drawCenterPoint
    this.curve.draw(this.graphics);
}

function drawCircle(listOfItem){
    if(typeof(listOfItem) == "object"){
        this.graphics.lineStyle(4, 0xff00ff, 1);

        //  Without this the arc will appear closed when stroked
        this.graphics.beginPath();

        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        this.graphics.arc(400, 300, 100, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

        this.graphics.strokePath();

        //  Without this the arc will appear closed when stroked
        this.graphics.beginPath();

        this.graphics.lineStyle(4, 0x0000ff, 1);
        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        this.graphics.arc(400, 300, 100, Phaser.Math.DegToRad(180), Phaser.Math.DegToRad(90), true);
        //  Uncomment this to close the path before stroking
        // graphics.closePath();

        this.graphics.strokePath();
    }
  
}

function drawCenterPoint(x, y){
    this.graphics.fillStyle(0xff0000, 1);
    this.graphics.fillCircle(x, y, 16);
}
