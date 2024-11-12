function calculator() {
    let firstNumberElement;
    let secondNumberElement;
    let resultElement;

    function init(fisrtSelector, secoundSelector, resultSelector){
        firstNumberElement = document.querySelector(fisrtSelector);
        secondNumberElement=  document.querySelector(secoundSelector);
        resultElement = document.querySelector(resultSelector);
    }

    function add(){
        console.log('test');
        
        resultElement.value = Number(firstNumberElement.value) + Number(secondNumberElement.value);
    }

    function subtract(){
        resultElement.value = Number(firstNumberElement.value) - Number(secondNumberElement.value);
    }

    firstNumberElement = '';
    secondNumberElement = '';

    return {
        init,
        add,
        subtract,
    };

}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





