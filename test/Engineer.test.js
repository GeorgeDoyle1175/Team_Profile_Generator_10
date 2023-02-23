// Import the Engineer and Employee classes
const { Engineer } = require('../index');
const { Employee } = require('../index');

// Define the test suite
describe('Engineer', () => {
  // Define the test case for the constructor
  describe('constructor', () => {
    it('should create an instance of Engineer with name, id, email, and github properties', () => {
      // Arrange
      const name = 'John';
      const id = 123;
      const email = 'john@example.com';
      const github = 'johndoe';

      // Act
      const engineer = new Engineer(name, id, email, github);

      // Assert
      expect(engineer).toBeDefined();
      expect(engineer.name).toBe(name);
      expect(engineer.id).toBe(id);
      expect(engineer.email).toBe(email);
      expect(engineer.github).toBe(github);
    });
  });

  // Define the test case for the getGithub method
  describe('getGithub', () => {
    it('should return the Github username of the engineer', () => {
      // Arrange
      const github = 'johndoe';
      const engineer = new Engineer('John', 123, 'john@example.com', github);

      // Act
      const result = engineer.getGithub();

      // Assert
      expect(result).toBe(github);
    });
  });

  // Define the test case for the getRole method
  describe('getRole', () => {
    it('should return the role of the engineer', () => {
      // Arrange
      const engineer = new Engineer('John', 123, 'john@example.com', 'johndoe');

      // Act
      const result = engineer.getRole();

      // Assert
      expect(result).toBe('Engineer');
    });
  });

  // Define the test case to check if the Engineer class properly extends the Employee class
  describe('extends Employee', () => {
    it('should properly extend the Employee class', () => {
      // Arrange
      const engineer = new Engineer('John', 123, 'john@example.com', 'johndoe');

      // Act
      const result = engineer instanceof Employee;

      // Assert
      expect(result).toBe(true);
    });
  });
});
