sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 10))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . f f 4 4 f 3 3 . 3 3 . 
. . . . f 5 4 5 5 4 3 3 3 3 3 . 
. . . f e 4 5 5 5 5 3 3 f 3 3 . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e 3 . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
. . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
. . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
. . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . 3 . 
`, SpriteKind.Food)
for (let index = 0; index < 1.2345678901234567e+84; index++) {
    music.playMelody("D C D C E D E D ", 143)
}
