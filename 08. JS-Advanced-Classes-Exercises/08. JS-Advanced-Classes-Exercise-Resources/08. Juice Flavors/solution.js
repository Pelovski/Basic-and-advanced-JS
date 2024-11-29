class JuiceMachine {
    constructor() {
        this.juices = {}; 
        this.bottles = [];
    }

    addJuice(juice, quantity) {
        if (!this.juices[juice]) {
            this.juices[juice] = 0;
        }
        this.juices[juice] += quantity;

        while (this.juices[juice] >= 1000) {
            this.bottles.push(juice);
            this.juices[juice] -= 1000;
        }
    }

    printBottles() {

        const bottleCount = {};

        for (let juice of this.bottles) {
            if (!bottleCount[juice]) {
                bottleCount[juice] = 0;
            }
            bottleCount[juice]++;
        }


        for (let [juice, count] of Object.entries(bottleCount)) {
            console.log(`${juice} => ${count}`);
        }
    }
}

function produceBottles(input) {
    const juiceMachine = new JuiceMachine();

    for (let line of input) {
        let [juice, quantity] = line.split(" => ");
        quantity = Number(quantity);

        juiceMachine.addJuice(juice, quantity);
    }

    juiceMachine.printBottles();
}

produceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
    );
    
