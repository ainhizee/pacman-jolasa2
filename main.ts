let mamua = game.createSprite(2, 2)
let janaria = game.createSprite(4, 4)
let pacman = game.createSprite(0, 0)
basic.pause(400)
mamua.set(LedSpriteProperty.Brightness, 40)
mamua.set(LedSpriteProperty.Blink, 50)
janaria.set(LedSpriteProperty.Brightness, 40)
basic.forever(function () {
    if (pacman.isTouching(mamua)) {
        game.gameOver()
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        pacman.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < -200) {
        pacman.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
