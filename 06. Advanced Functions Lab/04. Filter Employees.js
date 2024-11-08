// You will receive a string with all the employees, and criteria by which you should sort the employees. 
// If the criteria are "all" print all the employees in the given format.
// Output
// The output should be printed on the console. 
// For more information check the examples.


function employeesFilter(data, criteria){
  JSON.parse(data)
  .filter(employee => criteria === 'all' || employee[criteria.split('-')[0]] === criteria.split('-')[1])
  .map((employee, index) => console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`));
}


employeesFilter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)
