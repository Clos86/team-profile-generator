
const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Dave', '1', 'dave@gmail.com', '4');
    
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const manager = new Manager('Dave', '1', 'dave@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 