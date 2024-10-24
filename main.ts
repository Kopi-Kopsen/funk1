input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("L")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendString("F")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("R")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("B")
})
radio.onReceivedString(function (receivedString) {
    if ("R" == receivedString) {
        basic.showString("R")
        MotionKit.turnRight(30)
    } else if ("L" == receivedString) {
        basic.showString("L")
        MotionKit.turnLeft(30)
    } else if ("F" == receivedString) {
        basic.showString("F")
        MotionKit.driveForwards(50)
    } else if ("B" == receivedString) {
        basic.showString("B")
        MotionKit.driveBackwards(50)
    }
})
basic.forever(function () {
    radio.setGroup(27)
})
