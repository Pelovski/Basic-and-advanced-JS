function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let textAreaElement = document.querySelector('#inputs textarea');
     let splitedText = JSON.parse(textAreaElement.value);

     let restaurants = {};

     for (const text of splitedText) {
      let data = text.split(' - ');
      let restorantName = data[0];
      let workers = data[1].split(',');
      let allSalaries = 0;
      let bestSalary = 0;
     
      if(!restaurants[restorantName]){
         restaurants[restorantName] = {};
         restaurants[restorantName].workers = [];
      }

      for (const worker of workers) {
         let [name, salary] = worker.trim().split(' ');
         
         restaurants[restorantName].workers.push({
            name,
            salary: Number(salary)});

            if(bestSalary < salary){
               bestSalary = Number(salary);
            }

         allSalaries += Number(salary);
      }

      restaurants[restorantName].avrageSalary = (allSalaries / restaurants[restorantName].workers.length).toFixed(2);
      restaurants[restorantName].bestSalary = bestSalary;

     }

     let currentBestValue = Object.values(restaurants)[0].avrageSalary;
     let bestValueKey = Object.keys(restaurants)[0];
     let length = Object.keys(restaurants).length;

     for (let i = 1; i < length; i++) {
      let currentAvrageValue = Object.values(restaurants)[i].avrageSalary;

      if(currentBestValue < currentAvrageValue){
         currentBestValue = currentAvrageValue;
         bestValueKey = Object.keys(restaurants)[i];
      }
     }

     let bestRestaurantElement = document.querySelector('#bestRestaurant p');
     let bestWorkersElemet = document.querySelector('#workers p');
     let sortedWorkers = restaurants[bestValueKey].workers.sort((a, b) => b.salary - a.salary);
     let bestWorkers = ``;

     for (const worker of sortedWorkers) {
      bestWorkers += `Name: ${worker.name} With Salary: ${worker.salary} `;
     }

    
     bestRestaurantElement.textContent = `Name: ${bestValueKey} Average Salary: ${restaurants[bestValueKey].avrageSalary} Best Salary: ${restaurants[bestValueKey].bestSalary.toFixed(2)}`;
     bestWorkersElemet.textContent = bestWorkers;
     
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
