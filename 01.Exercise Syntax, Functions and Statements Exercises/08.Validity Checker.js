
// Write a program that receivesa total of 4 parameters in the format x1, y1, x2, y2. 
// Check if the distance between each point (x, y) and (0, 0)
// A distance between two points is considered valid if it is an integer value.
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.

// In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`


function isValidDistance(x1, y1, x2, y2) {

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    function isIntegerDistance(d) {
        return Number.isInteger(d);
    }

    let dist1 = distance(x1, y1, 0, 0);
    if (isIntegerDistance(dist1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let dist2 = distance(x2, y2, 0, 0);
    if (isIntegerDistance(dist2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // Third comparison: {x1, y1} to {x2, y2}
    let dist3 = distance(x1, y1, x2, y2);
    if (isIntegerDistance(dist3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

 isValidDistance(3, 0, 0, 4);
