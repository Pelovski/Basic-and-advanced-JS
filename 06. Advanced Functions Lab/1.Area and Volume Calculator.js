function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let cordinations = JSON.parse(input);
    let output = [{}];
    let count = 0;

    for (const cordination of cordinations) {
        
        cordination.area = area;
        cordination.vol = vol;

        output[count] = {};

        output[count].area = cordination.area();
        output[count].vol = cordination.vol();
        count++;
        
    }
    output.forEach(element => {
        console.log(element);
        
    });
    
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);

