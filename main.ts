input.onPinPressed(TouchPin.P0, function () {
    opponent = randint(0, 2)
    if (opponent == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (opponent == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(2000)
    if (opponent == 2) {
        game.addScore(-1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == 0) {
        game.addScore(1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    opponent = randint(0, 2)
    if (opponent == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (opponent == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(2000)
    if (opponent == 1) {
        game.addScore(-1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == 2) {
        game.addScore(1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    opponent = randint(0, 2)
    if (opponent == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (opponent == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(2000)
    if (opponent == 0) {
        game.addScore(-1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == 1) {
        game.addScore(1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(1000)
    basic.clearScreen()
})
let opponent = 0
game.setScore(0)
