const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UCF');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UCF');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Dave', '1', 'dave@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
}); 