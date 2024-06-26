// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [

  // adding some objects outside of the collect employees function to make sure it's constructing correctly outside of the function.
  {
    firstName: "Alexander",
    lastName: "The Average",
    salary: 50
  },

  {
    firstName: "Alejandro",
    lastName: "The Mediocre",
    salary: 75
  }
];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  // Start the loop of window API prompts for filling the employeesArray
  while (window.confirm("Do you want to add an employee?")) {

    // creating the object to be filled later
    let employee = {
      firstName: "",
      lastName: "",
      salary: 0
    };

    // have the user input the first and last name
    employee.firstName = window.prompt(`First name: `, `First name...`);
    employee.lastName = window.prompt(`Last name: `, `Last name...`);

    // make a function to make sure the salary number is in fact a number.
    function salaryNumber(x) {
      if (isNaN(x)) {
        return 0;
      } else {
        return x;
      }
    }

    // grab the salary number from the user, while simultaneously checking to make sure it is actually a number. If it isn't, default the salary to zero.
    const salaryNaN = salaryNumber(window.prompt(`Salary: `, `Amount...`));

    employee.salary = parseInt(salaryNaN);

    // push the newly created object into the array.
    employeesArray.push(employee);
  }
  
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function () {
  // TODO: Calculate and display the average salary

  // declare/define a variable to hold the total of all salary properties.
  let totalSalary = 0;

  // run through the employeesArray and grab each objects salary
  for (let employee of employeesArray) {
    const employeeSalary = employee.salary;
    
    // calculating.... calculating....
    totalSalary = (totalSalary + employeeSalary);
  }

  // using math.floor to round down the average to a whole number.
  const salaryAverage = Math.floor(totalSalary / employeesArray.length);

  console.log(`The average salary from our ${employeesArray.length} employees is $${salaryAverage}.00`);

}


// Select a random employee
const getRandomEmployee = function () {
  // TODO: Select and display a random employee

  // declare/define the variable that we'll use for passing into the employeesArray call
  let empIndex = 0;

  // making a function for randomizing the empIndex
  const setEmpIndex = function() {
    empIndex =  Math.floor(Math.random() * employeesArray.length);
    return empIndex;
  }

  setEmpIndex();
  
  // pass the randomized employee into the console. Congrats!
  console.log(`Huzzah to ${employeesArray[empIndex].firstName} ${employeesArray[empIndex].lastName} for winning our random drawing!`);
  
  return empIndex;
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
