/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Interfaces
// Classes implementing the interfaces
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee function
function createEmployee(salary) {
    // If salary is string, convert to number (removing $ if present)
    var numericSalary;
    if (typeof salary === "string") {
        numericSalary = Number(salary.replace(/\$/g, ""));
    }
    else {
        numericSalary = salary;
    }
    if (numericSalary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Type predicate function
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// executeWork function
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Function teachClass accepting only Subjects type
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
// Test
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
// Test calls
executeWork(createEmployee(200)); // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks
// Testing
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludGVyZmFjZXNcclxuXHJcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIENsYXNzZXMgaW1wbGVtZW50aW5nIHRoZSBpbnRlcmZhY2VzXHJcblxyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XHJcbiAgfVxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XHJcbiAgfVxyXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcclxuICB9XHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcclxuICB9XHJcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjcmVhdGVFbXBsb3llZSBmdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gIC8vIElmIHNhbGFyeSBpcyBzdHJpbmcsIGNvbnZlcnQgdG8gbnVtYmVyIChyZW1vdmluZyAkIGlmIHByZXNlbnQpXHJcbiAgbGV0IG51bWVyaWNTYWxhcnk6IG51bWJlcjtcclxuXHJcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIG51bWVyaWNTYWxhcnkgPSBOdW1iZXIoc2FsYXJ5LnJlcGxhY2UoL1xcJC9nLCBcIlwiKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG51bWVyaWNTYWxhcnkgPSBzYWxhcnk7XHJcbiAgfVxyXG5cclxuICBpZiAobnVtZXJpY1NhbGFyeSA8IDUwMCkge1xyXG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVHlwZSBwcmVkaWNhdGUgZnVuY3Rpb25cclxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xyXG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vIGV4ZWN1dGVXb3JrIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcclxuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3RyaW5nIGxpdGVyYWwgdHlwZSBhbGxvd2luZyBvbmx5ICdNYXRoJyBvciAnSGlzdG9yeSdcclxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5JztcclxuXHJcbi8vIEZ1bmN0aW9uIHRlYWNoQ2xhc3MgYWNjZXB0aW5nIG9ubHkgU3ViamVjdHMgdHlwZVxyXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcclxuICBpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XHJcbiAgICByZXR1cm4gJ1RlYWNoaW5nIE1hdGgnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVGVzdFxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpOyAgICAvLyBUZWFjaGluZyBNYXRoXHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIFRlYWNoaW5nIEhpc3RvcnlcclxuXHJcblxyXG4vLyBUZXN0IGNhbGxzXHJcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgIC8vIE91dHB1dDogR2V0dGluZyB0byB3b3JrXHJcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgIC8vIE91dHB1dDogR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xyXG5cclxuLy8gVGVzdGluZ1xyXG5cclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAgLy8gVGVhY2hlclxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7ICAvLyBEaXJlY3RvclxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZShcIiQ1MDBcIikpOyAvLyBEaXJlY3RvclxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=