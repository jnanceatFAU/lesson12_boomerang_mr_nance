let Boomerang = sprites.create(img`
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
