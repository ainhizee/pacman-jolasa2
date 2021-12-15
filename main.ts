input.onGesture(Gesture.LogoUp, function () {
    pacman.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    pacman.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    pacman.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    pacman.change(LedSpriteProperty.Y, 1)
})
let pacman: game.LedSprite = null
let janaria: game.LedSprite = null
let mamua: game.LedSprite = null
mamua.set(LedSpriteProperty.Brightness, 40)
janaria.set(LedSpriteProperty.Blink, 50)
pacman.set(LedSpriteProperty.Brightness, 1000)
basic.forever(function () {
    if (mamua.isTouching(pacman)) {
        game.gameOver()
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
    }
})
