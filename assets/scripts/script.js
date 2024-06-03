// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [
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

  while (window.confirm("Do you want to add an employee?")) {

    let employee = {
      firstName: "",
      lastName: "",
      salary: 0
    };

    employee.firstName = window.prompt(`First name: `, `First name...`);
    employee.lastName = window.prompt(`Last name: `, `Last name...`);

    function salaryNumber(x) {
      if (isNaN(x)) {
        return 0;
      } else {
        return x;
      }
    }
    const salaryNaN = salaryNumber(window.prompt(`Salary: `, `Amount...`));

    employee.salary = parseInt(salaryNaN);

    //salaryNumber(employee.salary);

    employeesArray.push(employee);
  }

  console.log(`---`);
  
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function () {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;

  for (let employee of employeesArray) {
    const employeeSalary = employee.salary;
    
    totalSalary = (totalSalary + employeeSalary);
  }

  const salaryAverage = Math.floor(totalSalary / employeesArray.length);

  console.log(`The average salary from our ${employeesArray.length} employees is $${salaryAverage}.00`);

}


// Select a random employee
const getRandomEmployee = function () {
  // TODO: Select and display a random employee
  let empIndex = 0;

  const setEmpIndex = function() {
    empIndex =  Math.floor(Math.random() * employeesArray.length);
    return empIndex;
  }

  setEmpIndex();
  
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
