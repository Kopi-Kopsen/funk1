input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("RLF")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    radio.setGroup(89)
})
