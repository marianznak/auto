input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(70, 30)
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 10)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.freestyle(30, 70)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.forever(function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
