interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

console.log(student1);
console.log(student2);

const studentsList: Student[] = [student1, student2];

// Create the table
const table = document.createElement("table");

// Create table header
const tableHeader = document.createElement("thead");
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// Create table body
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
