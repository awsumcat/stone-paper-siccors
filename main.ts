input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . # # #
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    opponent = randint(0, 2)
    if (opponent == scissors) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        game.addScore(1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == paper) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        game.addScore(-1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
    opponent = randint(0, 2)
    if (opponent == paper) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        game.addScore(1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == paper) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
        game.addScore(-1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
    opponent = randint(0, 2)
    if (opponent == scissors) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        game.addScore(-1)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (opponent == stone) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # # #
            . . . . .
            `)
        game.addScore(1)
        music.playTone(131, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    basic.pause(2000)
    basic.clearScreen()
    basic.showNumber(game.score())
    basic.pause(2000)
    basic.clearScreen()
})
let opponent = 0
let scissors = 0
let paper = 0
let stone = 0
game.setScore(0)
stone = 0
paper = 1
scissors = 2
basic.forever(function () {
    if (game.score() == 10) {
        game.gameOver()
    }
})
