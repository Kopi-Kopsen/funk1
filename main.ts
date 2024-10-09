input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendValue("Ludo", 9)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
})
basic.forever(function () {
    radio.setGroup(89)
})
