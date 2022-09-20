//Object Literal

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log("draw");
//     }
// }

// const circle2 = {
//     radius: 2,
//     location: {
//         x: 2,
//         y: 2
//     },
//     draw: function () {
//         console.log("draw");
//     }
// }

// circle.draw();
// circle2.draw();




//Object Factory
function CreateCircle(radius, x, y) {
    return {
        radius: radius,
        location: {
            x: x,
            y: y
        },
        draw: function () {
            console.log("draw");
        }
    }
}

const circle1 = CreateCircle(2, 1, 1);
const circle2 = CreateCircle(1, 2, 3);

circle1.draw();
circle2.draw();