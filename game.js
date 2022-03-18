

var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.setBaseURL('http://labs.phaser.io');
    //đạn
    this.load.image('bullet', 'assets/sprites/bullet.png');
    //đạn địch
    this.load.image('enemyBullet', 'assets/sprites/enemy-bullet.png');
    //địch
    this.load.spritesheet('invader', 'https://samme.github.io/phaser-examples-mirror/assets/games/invaders/invader32x32x4.png', {
        frameWidth: 32,
        frameHeight: 32
    });
    //phi thuyền
    this.load.image('ship', 'assets/sprites/player.png');
    //hiệu ứng lửa
    this.load.spritesheet('kaboom', 'assets/sprites/explosion.png', {
        frameWidth: 128,
        frameHeight: 128
    });
    this.load.image('starfield', 'assets/skies/starfield.png');
    //nền
    // this.load.image('background', 'https://examples.phaser.io/assets/games/starstruck/background2.png');

}

var ship;
var aliens;
var bullets;
var bulletTime = 0;
var cursors;
var fireButton;
var explosions;
var starfield;
var score = 0;
var scoreString = '';
var scoreText;
var lives;
var enemyBullet;
var firingTimer = 0;
var stateText;
var livingEnemies = [];

var speed;
var lastFired = 0;
var grid;
var gridOption = {
    x: 60,
    y: 80,
    minX: 0,
    minY: 0,
    maxX: 120,
    maxY: 120,
    stepX: 0.1,
    stepY: 0.0
}
function create() {
    var Bullet = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize: function Bullet(scene) {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');

            this.speed = Phaser.Math.GetSpeed(400, 1);
        },

        fire: function (x, y) {
            this.setPosition(x, y - 50);

            this.setActive(true);
            this.setVisible(true);
        },

        update: function (time, delta) {
            this.y -= this.speed * delta;

            if (this.y < -50) {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    bullets = this.add.group({
        classType: Bullet,
        maxSize: 10,
        runChildUpdate: true
    });

    ship = this.add.sprite(240, 700, 'ship');
    ship.setScale(3);

    cursors = this.input.keyboard.createCursorKeys();

    speed = Phaser.Math.GetSpeed(300, 1);

    const invader1 = {
        key: 'invader1',
        frames: "invader",
        frameRate: 4,
        repeat: -1
    };

    this.anims.create(invader1);

    const group = this.add.group();
    group.createMultiple({ key: 'invader', frame: 0, repeat: 39 });

    grid = Phaser.Actions.GridAlign(group.getChildren(), { width: 10, height: 4, cellWidth: 40, x: gridOption.x, y: gridOption.y });

    this.anims.staggerPlay('invader1', group.getChildren(), 0);

}

function update(time, delta) {
    gridUpdate();
    if (cursors.left.isDown) {
        ship.x -= speed * delta;
    }
    else if (cursors.right.isDown) {
        ship.x += speed * delta;
    }

    if (cursors.up.isDown && time > lastFired) {
        var bullet = bullets.get();

        if (bullet) {
            bullet.fire(ship.x, ship.y);

            lastFired = time + 50;
        }
    }
}

function gridUpdate() {
    for (var i = 0; i < grid.length; i++) {
        var oldX = grid[i].x;
        var oldY = grid[i].y;
        var newX = oldX + gridOption.stepX;
        var newY = oldY + gridOption.stepY;
        grid[i].x = newX;
        grid[i].y = newY;

        gridOption.x += gridOption.stepX;
        gridOption.y += gridOption.stepY;

        if (gridOption.x >= gridOption.maxX || gridOption.x <= gridOption.minX) {
            gridOption.stepX = -gridOption.stepX;
            console.log("back");
        }
        if (gridOption.y >= gridOption.maxY || gridOption.y <= gridOption.minY) {
            gridOption.stepY = -gridOption.stepY;
        }
    }
}
