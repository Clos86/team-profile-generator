const Employee = require("../lib/Employee");

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});