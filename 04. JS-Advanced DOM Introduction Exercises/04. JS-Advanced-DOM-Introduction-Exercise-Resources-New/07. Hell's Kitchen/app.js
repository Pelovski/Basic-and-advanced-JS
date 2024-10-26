function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let textAreaElement = document.querySelector('#inputs textarea');
     let splitedText = textAreaElement.value.split('","').map(item => item.replace(/["\[\]]/g, ''));

     let restorants = {};

     for (const text of splitedText) {
      let data = text.split(' - ');
      let restorantName = data[0];
      let workers = data[1].split(',');
      let allSalaries = 0;
      let bestSalary = 0;
     
      if(!restorants[restorantName]){
         restorants[restorantName] = {};
         restorants[restorantName].workers = [];
      }

      for (const worker of workers) {
         let [name, salary] = worker.trim().split(' ');
         
         restorants[restorantName].workers.push({
            name,
            salary: Number(salary)});

            if(bestSalary < salary){
               bestSalary = Number(salary);
            }

         allSalaries += Number(salary);
      }

      restorants[restorantName].avrageSalary = (allSalaries / restorants[restorantName].workers.length).toFixed(2);
      restorants[restorantName].bestSalary = bestSalary;

     }
     
     console.log(highestSalaryRestaurant);
     
      
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
