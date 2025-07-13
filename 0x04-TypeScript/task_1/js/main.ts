export interface Teacher  {
  readonly firstName: String
  readonly lastName: String
  fullTimeEmployee: boolean
  yearsOfExperience?: number
  location: String
  contract: boolean
  [TeacherId: string]: any; 
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// export Interface describing the constructor signature
export interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// export Interface describing the class
export interface StudentClassInterface {
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

