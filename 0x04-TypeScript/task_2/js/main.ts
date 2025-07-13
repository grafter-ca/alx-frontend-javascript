// Interfaces

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes implementing the interfaces

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function

export function createEmployee(salary: number | string): Director | Teacher {
  // If salary is string, convert to number (removing $ if present)
  let numericSalary: number;

  if (typeof salary === "string") {
    numericSalary = Number(salary.replace(/\$/g, ""));
  } else {
    numericSalary = salary;
  }

  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}



// Type predicate export function
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork export function
export function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// String literal type allowing only 'Math' or 'History'
export type Subjects = 'Math' | 'History';

// export Function teachClass accepting only Subjects type
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History


// Test calls
executeWork(createEmployee(200));   // Output: Getting to work
executeWork(createEmployee(1000));  // Output: Getting to director tasks

// Testing

console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee("$500")); // Director
