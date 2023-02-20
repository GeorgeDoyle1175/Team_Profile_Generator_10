// Import the Employee class
const Employee = require('./Employee');

// Define the test suite
describe('Employee', () => {
  // Define the test case for the constructor
  describe('constructor', () => {
    it('should create an instance of Employee with name, id, and email properties', () => {
      // Arrange
      const name = 'John';
      const id = 123;
      const email = 'john@example.com';

      // Act
      const employee = new Employee(name, id, email);

      // Assert
      expect(employee).toBeDefined();
      expect(employee.name).toBe(name);
      expect(employee.id).toBe(id);
      expect(employee.email).toBe(email);
    });
  });

  // Define the test case for the getName method
  describe('getName', () => {
    it('should return the name of the employee', () => {
      // Arrange
      const name = 'John';
      const employee = new Employee(name, 123, 'john@example.com');

      // Act
      const result = employee.getName();

      // Assert
      expect(result).toBe(name);
    });
  });

  // Define the test case for the getID method
  describe('getID', () => {
    it('should return the ID of the employee', () => {
      // Arrange
      const id = 123;
      const employee = new Employee('John', id, 'john@example.com');

      // Act
      const result = employee.getID();

      // Assert
      expect(result).toBe(id);
    });
  });

  // Define the test case for the getEmail method
  describe('getEmail', () => {
    it('should return the email of the employee', () => {
      // Arrange
      const email = 'john@example.com';
      const employee = new Employee('John', 123, email);

      // Act
      const result = employee.getEmail();

      // Assert
      expect(result).toBe(email);
    });
  });

  // Define the test case for the getRole method
  describe('getRole', () => {
    it('should return the role of the employee', () => {
      // Arrange
      const employee = new Employee('John', 123, 'john@example.com');

      // Act
      const result = employee.getRole();

      // Assert
      expect(result).toBe('Employee');
    });
  });
});
