// Write a class Company, which following these requirements:
// The constructor takes no parameters:
//     You could initialize an object:
// •	departments - empty object
// addEmployee({name}, {salary}, {position}, {department})
// This function should add a new employee to the department with the given name.
// •	If one of the passed parameters is an empty string (""), undefined or null, this function should 
// throw an error with the following message: "Invalid input!"
// •	If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
// •	If the new employee is hired successfully, you should add him into the departments
// object with the current name of the department and return the following message: `New employee is hired. Name: {name}. 
 //Position: {position}`
// bestDepartment()
// This function should return the department with the highest average salary rounded to the second digit 
// after the decimal point and its employees sorted by their salary by descending order and by their name in ascending 
// order as a second criterion:
// `Best Department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}
// …`
// Submission
// Submit only the Company class definition.

class Employee{
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    get name(){
        return this._name;
    }

    set name(newValue){
        if(!newValue) {
            throw new Error('Invalid input!');
        }

        this._name = newValue;
    }

    get salary(){
        return this._salary;
    }

    set salary(newValue){
        if(!newValue || this.newValue < 0) {
            throw new Error('Invalid input!');
        }

        this._salary = newValue;
    }

    get position(){
        return this._position;
    }

    set position(newValue){
        if(!newValue) {
            throw new Error('Invalid input!');
        }

        this._position = newValue;
    }

    get department(){
        return this._department;
    }

    set department(newValue){
        if(!newValue) {
            throw new Error('Invalid input!');
        }

        this._department = newValue;
    }
}

class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        let employee = new Employee(name,salary,position,department);
        
        if(!this.departments[department]){
            this.departments[department] = [];
        }
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment() {
        let bestDepartment = null;
        let highestAverageSalary = 0;

        for (const department in this.departments) {
            const employees = this.departments[department];
            const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
            const averageSalary = totalSalary / employees.length;

            if (averageSalary > highestAverageSalary) {
                highestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        const employees = this.departments[bestDepartment].slice();
        employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        const result = [];
        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${highestAverageSalary.toFixed(2)}`);
        employees.forEach(e => {
            result.push(`${e.name} ${e.salary.toFixed(2)} ${e.position}`);
        });

        return result.join("\n");
    }

}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


 



