controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        Boomerang.x += 5
        pause(200)
        Boomerang.image.flipX()
    }
    for (let index = 0; index < 10; index++) {
        Boomerang.x += -5
        pause(200)
        Boomerang.image.flipX()
    }
})
let Boomerang: Sprite = null
let mySprite = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Player)
Boomerang = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 e . . . . . . . . . 
    . . . . . 4 4 4 e . . . . . . . 
    . . . . . e e 4 4 . . . . . . . 
    . . . . . . e e 4 . . . . . . . 
    . . . . . . . e 4 e . . . . . . 
    . . . . . . . e 4 4 . . . . . . 
    . . . . . . . e 4 4 . . . . . . 
    . . . . . . . e 4 e . . . . . . 
    . . . . . . e e 4 . . . . . . . 
    . . . . . e e 4 4 . . . . . . . 
    . . . . . 4 4 e . . . . . . . . 
    . . . . 4 4 e . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
