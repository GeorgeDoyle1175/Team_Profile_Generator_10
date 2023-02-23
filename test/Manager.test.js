// Import the Manager and Employee classes
const { Manager } = require('../index');
const { Employee } = require('../index');

// Define the test suite
describe('Manager', () => {
  // Define the test case for the constructor
  describe('constructor', () => {
    it('should create an instance of Manager with name, id, email, and officeNumber properties', () => {
      // Arrange
      const name = 'John';
      const id = 123;
      const email = 'john@example.com';
      const officeNumber = '101';

      // Act
      const manager = new Manager(name, id, email, officeNumber);

      // Assert
      expect(manager).toBeDefined();
      expect(manager.name).toBe(name);
      expect(manager.id).toBe(id);
      expect(manager.email).toBe(email);
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });

  // Define the test case for the getOfficeNumber method
  describe('getOfficeNumber', () => {
    it('should return the office number of the manager', () => {
      // Arrange
      const officeNumber = '101';
      const manager = new Manager('John', 123, 'john@example.com', officeNumber);

      // Act
      const result = manager.getOfficeNumber();

      // Assert
      expect(result).toBe(officeNumber);
    });
  });

  // Define the test case for the getRole method
  describe('getRole', () => {
    it('should return the role of the manager', () => {
      // Arrange
      const manager = new Manager('John', 123, 'john@example.com', '101');

      // Act
      const result = manager.getRole();

      // Assert
      expect(result).toBe('Manager');
    });
  });

  // Define the test case to check if the Manager class properly extends the Employee class
  describe('extends Employee', () => {
    it('should properly extend the Employee class', () => {
      // Arrange
      const manager = new Manager('John', 123, 'john@example.com', '101');

      // Act
      const result = manager instanceof Employee;

      // Assert
      expect(result).toBe(true);
    });
  });
});
