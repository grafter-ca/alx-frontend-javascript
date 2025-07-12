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

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface describing the constructor signature
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
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

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

// Class 
////////////////////////////////////////////////
// implementing the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass({ firstName: 'Caleb', lastName: 'Habyarimana' });

console.log(student1.displayName());     // Output: Caleb
console.log(student1.workOnHomework()); // Output: Currently working
console.log(teacher3);
console.log(director1);
console.log(printTeacher('John', 'Doe'));

