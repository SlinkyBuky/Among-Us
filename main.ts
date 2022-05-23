controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`amongus-red-facing-backward`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(myButton)) {
        controller.moveSprite(myButton)
        mySprite.setImage(assets.image`invisible-amongus`)
        mySprite.setPosition(1000, 10000000)
        myButton.setPosition(1000, 10000000)
        myEnemy2.setPosition(1000, 10000000)
        scene.setBackgroundImage(assets.image`ejection-space-background`)
        game.showLongText("Red was the Imposter.", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`win-crewmates-background`)
    } else {
        if (mySprite.overlapsWith(myEnemy2)) {
            game.showLongText("Dead Body Reported!", DialogLayout.Full)
            scene.setBackgroundImage(assets.image`voting-screen-background`)
            myEnemy2.setPosition(80, 100)
            myButton.setPosition(25, 35)
            game.showLongText("Who is the Imposter?", DialogLayout.Top)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(myEnemy)) {
        myEnemy2.setPosition(150, 60)
        myEnemy.setPosition(1500, 60)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Amongus-red-facing-left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`amongus-red-facing-right`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`amongus-red-facing-foreward-2`)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let myEnemy2: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let myButton: Sprite = null
scene.setBackgroundImage(assets.image`Background-skeld`)
myButton = sprites.create(assets.image`Amongus-red-voting-button`, SpriteKind.Food)
myButton.setPosition(1500, 100)
mySprite = sprites.create(assets.image`amongus-red-facing-foreward`, SpriteKind.Player)
controller.moveSprite(mySprite)
myEnemy = sprites.create(assets.image`amongus-blue-facing-foreward`, SpriteKind.Enemy)
myEnemy2 = sprites.create(assets.image`amongus-blue-killed`, SpriteKind.Enemy)
let mySprite2 = sprites.create(assets.image`unused-asset`, SpriteKind.Enemy)
myEnemy.setPosition(150, 60)
myEnemy2.setPosition(1500, 60)
mySprite2.setPosition(1500, 60)
mySprite.setStayInScreen(true)
