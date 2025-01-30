function set_animation () {
    start_animation = [
    images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `),
    images.createImage(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        `),
    images.createImage(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `),
    images.createImage(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . # # # #
        `),
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `),
    images.createImage(`
        . # # # #
        . . . . #
        . . . . .
        # . . . .
        # # # # .
        `)
    ]
}
function show_animation (anim: any[]) {
    for (let index = 0; index < anim.length; index++) {
        anim[0].showImage(0)
        basic.pause(100)
    }
}
let start_animation: Image[] = []
set_animation()
show_animation(start_animation)
basic.forever(function () {
	
})
