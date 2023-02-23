const { Intern } = require('../index');
const { Employee } = require('../index');


describe('Intern', () => {
  describe('constructor', () => {
    it('should create an instance of Intern with name, id, email, and school properties', () => {
      const intern = new Intern('John Doe', 123, 'johndoe@test.com', 'University of Testing');

      expect(intern.name).toBe('John Doe');
      expect(intern.id).toBe(123);
      expect(intern.email).toBe('johndoe@test.com');
      expect(intern.school).toBe('University of Testing');
    });
  });

  describe('getSchool', () => {
    it('should return the school of the intern', () => {
      const intern = new Intern('John Doe', 123, 'johndoe@test.com', 'University of Testing');
      const result = intern.getSchool();

      expect(result).toBe('University of Testing');
    });
  });

  describe('getRole', () => {
    it('should return the role of the intern', () => {
      const intern = new Intern('John Doe', 123, 'johndoe@test.com', 'University of Testing');
      const result = intern.getRole();

      expect(result).toBe('Intern');
    });
  });

  describe('extends Employee', () => {
    it('should properly extend the Employee class', () => {
      const intern = new Intern('John Doe', 123, 'johndoe@test.com', 'University of Testing');

    // Act
    const result = intern instanceof Employee;

    // Assert
    expect(result).toBe(true);
  });
});
});
