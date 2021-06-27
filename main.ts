namespace SpriteKind {
    export const LeftArrow = SpriteKind.create()
    export const DownArrow = SpriteKind.create()
    export const RightArrow = SpriteKind.create()
    export const UpArrow = SpriteKind.create()
    export const Barrier = SpriteKind.create()
    export const BarrierP2 = SpriteKind.create()
    export const LeftArrowP2 = SpriteKind.create()
    export const DownArrowP2 = SpriteKind.create()
    export const UpArrowP2 = SpriteKind.create()
    export const RightArrowP2 = SpriteKind.create()
}
function ReleaseRight () {
    if (levelPlaying == 1) {
        arrowRight.setImage(img`
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 1 1 f f . . . . 
            . . . . . . . f 1 d 1 1 f . . . 
            . . . . . . . . f d d d 1 f . . 
            f f f f f f f f f d d d 1 f . . 
            f 1 1 1 1 1 1 1 1 d d d d 1 f . 
            f 1 d d d d d d d d d d d d 1 f 
            f 1 d d d d d d d d d d d d b f 
            f 1 d d d d d d d d d d d d b f 
            f 1 d d d d d d d d d d d d b f 
            f 1 b b b b b b b d d d d b f . 
            . f f f f f f f f d d d d f . . 
            . . . . . . . . f d d d b f . . 
            . . . . . . . f b d b b f . . . 
            . . . . . . . f b b f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (levelPlaying == 1) {
        PressUp()
    }
})
function PressLeft () {
    arrowLeft.setImage(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 1 a f . . . . . . . 
        . . . f 1 1 3 a f . . . . . . . 
        . . f 1 3 3 3 f . . . . . . . . 
        . . f 1 3 3 3 f f f f f f f f f 
        . f 1 3 3 3 3 3 3 3 3 3 3 3 a f 
        f 1 3 3 3 3 3 3 3 3 3 3 3 3 a f 
        f a 3 3 3 3 3 3 3 3 3 3 3 3 a f 
        f a 3 3 3 3 3 3 3 3 3 3 3 3 a f 
        f a 3 3 3 3 3 3 3 3 3 3 3 3 a f 
        . f a 3 3 3 3 a a a a a a a a f 
        . . f 3 3 3 3 f f f f f f f f . 
        . . f a 3 3 3 f . . . . . . . . 
        . . . f a a 3 a f . . . . . . . 
        . . . . f f a a f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    if (arrowLeft.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        healthBar.value += -3
        score += -50
        misses += 1
    } else if (arrowLeft.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        score += 200
        tiles.setTileAt(tiles.getTileLocation(6, arrowLeft.y / 16), assets.tile`transparency16`)
        healthBar.value += 2
        notesHit += 1
    }
}
function PressDown () {
    arrowDown.setImage(img`
        . . . . . f f f f f f f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 9 9 9 9 9 f . . . . 
        . . . . f 1 9 9 9 9 9 f . . . . 
        . . . . f 1 9 9 9 9 9 f . . . . 
        . . . . f 1 9 9 9 9 9 f . . . . 
        . . . . f 1 9 9 9 9 9 f . . . . 
        f f f . f 1 9 9 9 9 9 f . f f f 
        f 1 1 f f 1 9 9 9 9 9 f f 6 6 f 
        f 1 9 1 1 9 9 9 9 9 9 9 9 9 6 f 
        . f 6 9 9 9 9 9 9 9 9 9 9 6 f . 
        . f 6 9 9 9 9 9 9 9 9 9 9 6 f . 
        . . f 6 6 9 9 9 9 9 9 6 6 f . . 
        . . . f f 6 9 9 9 9 6 f f . . . 
        . . . . . f 6 6 6 6 f . . . . . 
        . . . . . . f f f f . . . . . . 
        `)
    if (arrowDown.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        healthBar.value += -3
        score += -50
        misses += 1
    } else if (arrowDown.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        score += 200
        tiles.setTileAt(tiles.getTileLocation(7, arrowDown.y / 16), assets.tile`transparency16`)
        healthBar.value += 2
        notesHit += 1
    }
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    ReleaseDown()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (levelPlaying == 1) {
        PressLeft()
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    ReleaseRight()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    ReleaseLeft()
})
scene.onOverlapTile(SpriteKind.Barrier, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    score += -50
    healthBar.value += -2
    notesPassed += 1
    misses += 1
})
function ReleaseLeft () {
    if (levelPlaying == 1) {
        arrowLeft.setImage(img`
            . . . . . . f f f . . . . . . . 
            . . . . f f 1 b f . . . . . . . 
            . . . f 1 1 d b f . . . . . . . 
            . . f 1 d d d f . . . . . . . . 
            . . f 1 d d d f f f f f f f f f 
            . f 1 d d d d d d d d d d d b f 
            f 1 d d d d d d d d d d d d b f 
            f b d d d d d d d d d d d d b f 
            f b d d d d d d d d d d d d b f 
            f b d d d d d d d d d d d d b f 
            . f b d d d d b b b b b b b b f 
            . . f d d d d f f f f f f f f . 
            . . f b d d d f . . . . . . . . 
            . . . f b b d b f . . . . . . . 
            . . . . f f b b f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
}
scene.onOverlapTile(SpriteKind.Barrier, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    score += -50
    healthBar.value += -2
    notesPassed += 1
    misses += 1
})
function SongInitialization () {
    songRunning = 0
    healthBar = statusbars.create(150, 4, StatusBarKind.Health)
    healthBar.setColor(7, 2)
    healthBar.max = 120
    healthBar.value = 60
    healthBar.setBarBorder(1, 15)
    healthBar.positionDirection(CollisionDirection.Bottom)
    healthBar.setStatusBarFlag(StatusBarFlag.InvertFillDirection, true)
    healthBar.y = 115
    if (song == 1) {
        if (difficulty == 3) {
            scrollSpeed = 100
            scene.setBackgroundImage(img`
                eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
                222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
                222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
                222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
                e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
                eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
                2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
                2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
                2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
                eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
                eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
                eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
                eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
                eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
                eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
                eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
                eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
                eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
                eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
                eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
                eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
                eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
                eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
                eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
                eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
                eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
                eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
                eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
                eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
                ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
                ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
                eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
                eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
                eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
                eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
                eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
                eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
                eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
                ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
                ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
                e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
                e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
                eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
                eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
                ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
                ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
                e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
                e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
                22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
                22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
                222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
                2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
                2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
                222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
                222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
                222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
                22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
                22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
                22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
                2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
                2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
                2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
                2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
                ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
                ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
                eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
                eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
                2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
                222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
                22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
                222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
                eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
                222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
                222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
                222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
                222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
                222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
                222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
                222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
                222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
                222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
                222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
                222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
                222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
                222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
                2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
                2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
                2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
                2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
                2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
                222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
                222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
                2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
                222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
                222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
                222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
                222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
                2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
                22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
                22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
                22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
                22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
                22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
                22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
                22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
                22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
                222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
                222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
                222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
                222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
                222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
                222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
                `)
            tiles.setTilemap(tilemap`level1`)
        }
    }
    late = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        9999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Barrier)
    arrowLeft = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 1 b f . . . . . . . 
        . . . f 1 1 d b f . . . . . . . 
        . . f 1 d d d f . . . . . . . . 
        . . f 1 d d d f f f f f f f f f 
        . f 1 d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        . f b d d d d b b b b b b b b f 
        . . f d d d d f f f f f f f f . 
        . . f b d d d f . . . . . . . . 
        . . . f b b d b f . . . . . . . 
        . . . . f f b b f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.LeftArrow)
    arrowDown = sprites.create(img`
        . . . . . f f f f f f f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        f f f . f 1 d d d d d f . f f f 
        f 1 1 f f 1 d d d d d f f b b f 
        f 1 d 1 1 d d d d d d d d d b f 
        . f b d d d d d d d d d d b f . 
        . f b d d d d d d d d d d b f . 
        . . f b b d d d d d d b b f . . 
        . . . f f b d d d d b f f . . . 
        . . . . . f b b b b f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.DownArrow)
    arrowUp = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 b f . . . . . 
        . . . f f 1 d d d d b f f . . . 
        . . f 1 1 d d d d d d b b f . . 
        . f 1 d d d d d d d d d d b f . 
        . f 1 d d d d d d d d d d b f . 
        f 1 d d d d d d d d d d d d b f 
        f b b f f b d d d d d f f b b f 
        f f f . f b d d d d d f . f f f 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.UpArrow)
    arrowRight = sprites.create(img`
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 1 1 f f . . . . 
        . . . . . . . f 1 d 1 1 f . . . 
        . . . . . . . . f d d d 1 f . . 
        f f f f f f f f f d d d 1 f . . 
        f 1 1 1 1 1 1 1 1 d d d d 1 f . 
        f 1 d d d d d d d d d d d d 1 f 
        f 1 d d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f 1 b b b b b b b d d d d b f . 
        . f f f f f f f f d d d d f . . 
        . . . . . . . . f d d d b f . . 
        . . . . . . . f b d b b f . . . 
        . . . . . . . f b b f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.RightArrow)
    lateP2 = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        9999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.BarrierP2)
    arrowLeftP2 = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 1 b f . . . . . . . 
        . . . f 1 1 d b f . . . . . . . 
        . . f 1 d d d f . . . . . . . . 
        . . f 1 d d d f f f f f f f f f 
        . f 1 d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        f b d d d d d d d d d d d d b f 
        . f b d d d d b b b b b b b b f 
        . . f d d d d f f f f f f f f . 
        . . f b d d d f . . . . . . . . 
        . . . f b b d b f . . . . . . . 
        . . . . f f b b f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.LeftArrowP2)
    arrowDownP2 = sprites.create(img`
        . . . . . f f f f f f f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        . . . . f 1 d d d d d f . . . . 
        f f f . f 1 d d d d d f . f f f 
        f 1 1 f f 1 d d d d d f f b b f 
        f 1 d 1 1 d d d d d d d d d b f 
        . f b d d d d d d d d d d b f . 
        . f b d d d d d d d d d d b f . 
        . . f b b d d d d d d b b f . . 
        . . . f f b d d d d b f f . . . 
        . . . . . f b b b b f . . . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.DownArrowP2)
    arrowUpP2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 b f . . . . . 
        . . . f f 1 d d d d b f f . . . 
        . . f 1 1 d d d d d d b b f . . 
        . f 1 d d d d d d d d d d b f . 
        . f 1 d d d d d d d d d d b f . 
        f 1 d d d d d d d d d d d d b f 
        f b b f f b d d d d d f f b b f 
        f f f . f b d d d d d f . f f f 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b d d d d d f . . . . 
        . . . . f b b b b b b f . . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.UpArrowP2)
    arrowRightP2 = sprites.create(img`
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 1 1 f f . . . . 
        . . . . . . . f 1 d 1 1 f . . . 
        . . . . . . . . f d d d 1 f . . 
        f f f f f f f f f d d d 1 f . . 
        f 1 1 1 1 1 1 1 1 d d d d 1 f . 
        f 1 d d d d d d d d d d d d 1 f 
        f 1 d d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f 1 d d d d d d d d d d d d b f 
        f 1 b b b b b b b d d d d b f . 
        . f f f f f f f f d d d d f . . 
        . . . . . . . . f d d d b f . . 
        . . . . . . . f b d b b f . . . 
        . . . . . . . f b b f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.RightArrowP2)
    arrowLeft.setPosition(104, 31)
    arrowDown.setPosition(120, 31)
    arrowUp.setPosition(136, 31)
    arrowRight.setPosition(152, 31)
    late.setPosition(128, 0)
    arrowLeft.z = -100
    arrowDown.z = -100
    arrowUp.z = -100
    arrowRight.z = -100
    arrowLeft.setVelocity(0, scrollSpeed)
    arrowDown.setVelocity(0, scrollSpeed)
    arrowUp.setVelocity(0, scrollSpeed)
    arrowRight.setVelocity(0, scrollSpeed)
    late.setVelocity(0, scrollSpeed)
    arrowLeftP2.setPosition(8, 31)
    arrowDownP2.setPosition(24, 31)
    arrowUpP2.setPosition(40, 31)
    arrowRightP2.setPosition(56, 31)
    lateP2.setPosition(32, 0)
    arrowLeftP2.z = -100
    arrowDownP2.z = -100
    arrowUpP2.z = -100
    arrowRightP2.z = -100
    arrowLeftP2.setVelocity(0, scrollSpeed)
    arrowDownP2.setVelocity(0, scrollSpeed)
    arrowUpP2.setVelocity(0, scrollSpeed)
    arrowRightP2.setVelocity(0, scrollSpeed)
    lateP2.setVelocity(0, scrollSpeed)
    scoreCounterDisplay = textsprite.create("Score:0")
    scoreCounterDisplay.setPosition(25, 115)
    scoreCounterDisplay.setVelocity(0, scrollSpeed)
    missesCounterDisplay = textsprite.create("Misses:0")
    missesCounterDisplay.setPosition(83, 115)
    missesCounterDisplay.setVelocity(0, scrollSpeed)
    levelPlaying = 1
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (levelPlaying == 1) {
        PressRight()
    }
})
function StartMenu () {
    levelPlaying = 0
    menu = 0
    toggleDownscroll = "OFF"
    toggleFlashingMenu = "ON"
    toggleFPSCounter = "OFF"
    difficulty = 0
    blockMenu.showMenu(["Story mode", "Freeplay", "Options", "Credits"], MenuStyle.List, MenuLocation.BottomHalf)
    blockMenu.setColors(1, 15)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    ReleaseUp()
})
function ReleaseDown () {
    if (levelPlaying == 1) {
        arrowDown.setImage(img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 d d d d d f . . . . 
            . . . . f 1 d d d d d f . . . . 
            . . . . f 1 d d d d d f . . . . 
            . . . . f 1 d d d d d f . . . . 
            . . . . f 1 d d d d d f . . . . 
            f f f . f 1 d d d d d f . f f f 
            f 1 1 f f 1 d d d d d f f b b f 
            f 1 d 1 1 d d d d d d d d d b f 
            . f b d d d d d d d d d d b f . 
            . f b d d d d d d d d d d b f . 
            . . f b b d d d d d d b b f . . 
            . . . f f b d d d d b f f . . . 
            . . . . . f b b b b f . . . . . 
            . . . . . . f f f f . . . . . . 
            `)
    }
}
function PressRight () {
    arrowRight.setImage(img`
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 1 1 f f . . . . 
        . . . . . . . f 1 2 1 1 f . . . 
        . . . . . . . . f 2 2 2 1 f . . 
        f f f f f f f f f 2 2 2 1 f . . 
        f 1 1 1 1 1 1 1 1 2 2 2 2 1 f . 
        f 1 2 2 2 2 2 2 2 2 2 2 2 2 1 f 
        f 1 2 2 2 2 2 2 2 2 2 2 2 2 4 f 
        f 1 2 2 2 2 2 2 2 2 2 2 2 2 4 f 
        f 1 2 2 2 2 2 2 2 2 2 2 2 2 4 f 
        f 1 4 4 4 4 4 4 4 2 2 2 2 4 f . 
        . f f f f f f f f 2 2 2 2 f . . 
        . . . . . . . . f 2 2 2 4 f . . 
        . . . . . . . f 4 2 4 4 f . . . 
        . . . . . . . f 4 4 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    if (arrowRight.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        healthBar.value += -3
        score += -50
        misses += 1
    } else if (arrowRight.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        score += 200
        tiles.setTileAt(tiles.getTileLocation(9, arrowRight.y / 16), assets.tile`transparency16`)
        healthBar.value += 2
        notesHit += 1
    }
}
scene.onOverlapTile(SpriteKind.Barrier, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    score += -50
    healthBar.value += -2
    notesPassed += 1
    misses += 1
})
function PressUp () {
    arrowUp.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 6 f . . . . . 
        . . . f f 1 7 7 7 7 6 f f . . . 
        . . f 1 1 7 7 7 7 7 7 6 6 f . . 
        . f 1 7 7 7 7 7 7 7 7 7 7 6 f . 
        . f 1 7 7 7 7 7 7 7 7 7 7 6 f . 
        f 1 7 1 1 7 7 7 7 7 7 6 6 7 6 f 
        f 1 1 f f 1 7 7 7 7 6 f f 6 6 f 
        f f f . f 1 7 7 7 7 6 f . f f f 
        . . . . f 1 7 7 7 7 6 f . . . . 
        . . . . f 1 7 7 7 7 6 f . . . . 
        . . . . f 1 7 7 7 7 6 f . . . . 
        . . . . f 1 7 7 7 7 6 f . . . . 
        . . . . f 1 7 7 7 7 6 f . . . . 
        . . . . f 1 6 6 6 6 6 f . . . . 
        . . . . . f f f f f f f . . . . 
        `)
    if (arrowUp.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        healthBar.value += -3
        score += -50
        misses += 1
    } else if (arrowUp.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        score += 200
        tiles.setTileAt(tiles.getTileLocation(8, arrowUp.y / 16), assets.tile`transparency16`)
        healthBar.value += 2
        notesHit += 1
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (levelPlaying == 1) {
        PressDown()
    }
})
function ReleaseUp () {
    if (levelPlaying == 1) {
        arrowUp.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . . f 1 1 1 b f . . . . . 
            . . . f f 1 d d d d b f f . . . 
            . . f 1 1 d d d d d d b b f . . 
            . f 1 d d d d d d d d d d b f . 
            . f 1 d d d d d d d d d d b f . 
            f 1 d 1 1 d d d d d d b b d b f 
            f 1 1 f f 1 d d d d b f f b b f 
            f f f . f 1 d d d d b f . f f f 
            . . . . f 1 d d d d b f . . . . 
            . . . . f 1 d d d d b f . . . . 
            . . . . f 1 d d d d b f . . . . 
            . . . . f 1 d d d d b f . . . . 
            . . . . f 1 d d d d b f . . . . 
            . . . . f 1 b b b b b f . . . . 
            . . . . . f f f f f f f . . . . 
            `)
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (index == 0) {
        if (menu == 0) {
            game.splash("Not available yet", "Coming soon")
        } else if (menu == 1) {
            menu = 4
            blockMenu.showMenu(["Easy", "Normal", "Hard", "Back"], MenuStyle.List, MenuLocation.BottomLeft)
        } else if (menu == 2) {
            menu = 3
            blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + "ON", "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 3) {
            if (toggleDownscroll == "OFF") {
                toggleDownscroll = "ON"
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + "ON", "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(0)
            } else if (toggleDownscroll == "ON") {
                toggleDownscroll = "OFF"
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + "ON", "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(0)
            }
        } else if (menu == 4) {
            difficulty = 1
            game.splash("Not available", "Please play on Hard")
        }
    } else if (index == 1) {
        if (menu == 0) {
            menu = 1
            blockMenu.showMenu(["test_0", "Back"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 1) {
            menu = 0
            blockMenu.showMenu(["Story mode", "Freeplay", "Options", "Credits"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 2) {
            game.splash("Not available yet", "Coming soon")
        } else if (menu == 3) {
            if (toggleFlashingMenu == "OFF") {
                toggleFlashingMenu = "ON"
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + toggleFlashingMenu, "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(1)
            } else if (toggleFlashingMenu == "ON") {
                toggleFlashingMenu = "OFF"
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + toggleFlashingMenu, "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(1)
            }
        } else if (menu == 4) {
            difficulty = 2
            game.splash("Not available", "Please play on Hard")
        }
    } else if (index == 2) {
        if (menu == 0) {
            menu = 2
            blockMenu.showMenu(["Preferences", "Controls", "Back"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 2) {
            menu = 0
            blockMenu.showMenu(["Story mode", "Freeplay", "Options", "Credits"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 3) {
            if (toggleFPSCounter == "OFF") {
                toggleFPSCounter = "ON"
                stats.turnStats(true)
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + "ON", "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(2)
            } else if (toggleFPSCounter == "ON") {
                toggleFPSCounter = "OFF"
                stats.turnStats(false)
                blockMenu.showMenu(["Downscroll: " + toggleDownscroll, "Flashing menu: " + "ON", "FPS Counter: " + toggleFPSCounter, "Back"], MenuStyle.List, MenuLocation.BottomHalf)
                blockMenu.setSelectedIndex(2)
            }
        } else if (menu == 4) {
            difficulty = 3
            song = 1
            levelPlaying = 1
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            SongInitialization()
        }
    } else if (index == 3) {
        if (menu == 0) {
            game.splash("Not available yet", "Coming soon")
        } else if (menu == 3) {
            menu = 2
            blockMenu.showMenu(["Preferences", "Controls", "Back"], MenuStyle.List, MenuLocation.BottomHalf)
        } else if (menu == 4) {
            menu = 1
            blockMenu.showMenu(["test_0", "Back"], MenuStyle.List, MenuLocation.BottomHalf)
        }
    }
})
scene.onOverlapTile(SpriteKind.Barrier, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    score += -50
    healthBar.value += -2
    notesPassed += 1
    misses += 1
})
let statusHealth = 0
let missesCounter = ""
let scoreCounter = ""
let arrowPos = 0
let notesCurrentTotal = 0
let toggleFPSCounter = ""
let toggleFlashingMenu = ""
let toggleDownscroll = ""
let menu = 0
let missesCounterDisplay: TextSprite = null
let scoreCounterDisplay: TextSprite = null
let arrowRightP2: Sprite = null
let arrowUpP2: Sprite = null
let arrowDownP2: Sprite = null
let arrowLeftP2: Sprite = null
let lateP2: Sprite = null
let arrowUp: Sprite = null
let late: Sprite = null
let scrollSpeed = 0
let difficulty = 0
let song = 0
let songRunning = 0
let notesPassed = 0
let arrowDown: Sprite = null
let notesHit = 0
let misses = 0
let score = 0
let healthBar: StatusBarSprite = null
let arrowLeft: Sprite = null
let arrowRight: Sprite = null
let levelPlaying = 0
StartMenu()
game.onUpdateInterval(20, function () {
    if (levelPlaying == 1) {
        notesCurrentTotal = notesPassed + notesHit
        arrowPos = late.y
        scene.centerCameraAt(0, arrowPos + 70)
        scoreCounter = convertToText(score)
        scoreCounterDisplay.setText("|Score:" + scoreCounter + "|")
        missesCounter = convertToText(misses)
        missesCounterDisplay.setText("Missed:" + missesCounter + "|")
        if (misses < 10) {
            missesCounterDisplay.x = scoreCounterDisplay.width + 32
        } else if (misses > 9 && misses < 100) {
            missesCounterDisplay.x = scoreCounterDisplay.width + 35
        } else if (misses > 99 && misses < 1000) {
            missesCounterDisplay.x = scoreCounterDisplay.width + 38
        }
        statusHealth = healthBar.value
        if (statusHealth == 0) {
            pause(200)
            game.over(false)
        }
    }
})
forever(function () {
    pause(230)
    if (songRunning == 1) {
        music.playMelody("A4 - D4 F4 A4 - D4 F4 G4 A4 G4 F4 G4 - D4 F4", 280)
        music.playMelody("A5 - D5 F5 A5 - D5 F5 G5 A5 G5 F5 G5 - D5 F5", 280)
        music.playMelody("D5 - A4 G4 F4 - E4 - D4 - ", 280)
        music.playMelody("D4 D4 D4 D4 D4 D4", 310)
        music.playMelody("D6 - A5 G5 F5 - E5 - D5 - ", 280)
        music.playMelody("D5 D5 D5 D5 D5 D5", 320)
        music.playMelody("- F4", 280)
        music.playMelody("- D4 D4 D4 D4 D4", 360)
        music.playMelody("- D4 E4", 300)
        music.playMelody("- C4 C4 C4 C4 C4", 360)
        music.playMelody("- A4 G4 - G4 A4 A#4 A#4 A4 G4", 280)
        music.playMelody("A4 A4 A4 A4 A4", 360)
        music.playMelody("- F5", 280)
        music.playMelody("- D5 D5 D5 D5 D5", 360)
        music.playMelody("- D5 E5", 300)
        music.playMelody("- C5 C5 C5 C5 C5 - - ", 360)
        music.playMelody("- A5 G5 - G5 A5 A#5 A#5 A5 G5", 280)
        music.playMelody("A5 A5 A5 A5 A5", 360)
        music.playMelody("- A4 G4 F4 G4 - A4", 280)
        music.playMelody("- - A4 G4 F4 G4 - A#4 - A4 - G4 - F4 - E4 - D4 - C4", 280)
        music.playMelody("- G3 G3 G3 G3", 280)
        music.playMelody("- A4 A4 F4 G4 A4 G4", 260)
        music.playMelody("- G4 A4 G4 F4", 320)
        music.playMelody("G4 A4 G4 -", 280)
        music.playMelody("- A4 A4 F4 G4 A4 G4 F4", 280)
        music.playMelody("F4 E4 F4 G4 A4 G4 F4 E4", 280)
        music.playMelody("- A5 G5 F5 G5 - A5", 280)
        music.playMelody("- - A5 G5 F5 G5 - A#5 - A5 - G5 - F5 - E5 - D5 - C5", 280)
        music.playMelody("- G4 G4 G4 G4", 280)
        music.playMelody("- A5 A5 F5 G5 A5 G5", 260)
        music.playMelody("- G5 A5 G5 F5", 320)
        music.playMelody("G5 A5 G5", 280)
        music.playMelody("- A5 A5 F5 G5 A5 G5 F5", 280)
        music.playMelody("A#5 A#5 A5 G5 A5 F5", 280)
        music.playMelody("- A4 - D4 F4 A4 - D4 F4 G4 A4 G4 F4 G4 - G4", 280)
        music.playMelody("- A5 - D5 F5 A5 - D5 F5 G5 A5 G5 F5 G5 - G5", 280)
        music.playMelody("- - D5 - A4 G4 F4 - E4 - D4 - D4 - D4", 280)
        music.playMelody("- - D6 - A5 G5 F5 - E5 - D5 - D5 - D5", 280)
        songRunning = 0
    }
})
