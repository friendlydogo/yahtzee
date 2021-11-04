let SD3 = 0
let d3 = 0
let SD1 = 0
let d1 = 0
let SD5 = 0
let d5 = 0
let SD2 = 0
let d2 = 0
let SD4 = 0
let d4 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    SD3 = d3
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    SD1 = d1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    SD5 = d5
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    SD2 = d2
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    SD4 = d4
})
input.onGesture(Gesture.Shake, function () {
    d1 = randint(1, 6)
    d2 = randint(1, 6)
    d3 = randint(1, 6)
    d4 = randint(1, 6)
    d5 = randint(1, 6)
})
basic.forever(function () {
    basic.showString("D#1:")
    basic.showNumber(d1)
    basic.showString("D#2:")
    basic.showNumber(d2)
    basic.showString("D#3:")
    basic.showNumber(d3)
    basic.showString("D#4:")
    basic.showNumber(d4)
    basic.showString("D#5:")
    basic.showNumber(d5)
})
