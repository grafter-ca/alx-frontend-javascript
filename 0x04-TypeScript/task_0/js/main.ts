interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};


console.log(student1);
console.log(student2);

const studentsList: student[] = [student1, student2];

/*
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
*/
const table = document.createElement("table");
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    table.appendChild(row);
    });