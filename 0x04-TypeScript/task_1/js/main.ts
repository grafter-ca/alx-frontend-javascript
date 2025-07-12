interface Teacher  {
  firstName: String
  fullTimeEmployee: boolean
  lastName: String
  location: String
  contract: boolean
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: false
};

console.log(teacher3);
console.log(director1);

