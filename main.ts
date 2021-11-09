let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * 10 + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
        angle += index * -5 + 10
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
})
