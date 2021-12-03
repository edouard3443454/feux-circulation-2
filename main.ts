let piéton = 0
function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function pétion () {
    blanche()
    basic.pause(5000)
    blanche2()
    for (let index = 0; index < 4; index++) {
        orange()
        basic.pause(1000)
        orange2()
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function blanche2 () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function orange2 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function feux_de_circulation () {
    orange()
    vert()
    basic.pause(5000)
    jaune()
    basic.pause(2000)
    rouge()
    basic.pause(2000)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blanche () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
basic.forever(function () {
    feux_de_circulation()
    if (input.buttonIsPressed(Button.A)) {
        piéton = 1
    }
    if (piéton == 1) {
        pétion()
    }
})
