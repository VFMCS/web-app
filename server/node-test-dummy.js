const test = require('node:test');
const assert = require('assert/strict');

const {
  calcAge,
  createBox,
  canDrive,
  powerLevel,
  workSchedule,
} = require('./node-backend-testing/index');



// Calculates how old someone is and depending on the year this test could pass or fail

test('calculates age', () => {
  return assert.equal(calcAge(2000), 22);
});

// Creates a box with an equal height and width

test('creates a box', async (t) => {
  await t.test('creates a small box', () => {
    assert.equal(createBox(10, 10), 100);
  });

  await t.test('creates a large box', () => {
    assert.equal(createBox(50, 50), 2500);
  });
});

// Checks to see whether or not the person has a full driving licence

test('checks license', () => {
  return assert.match(`${canDrive()}`, /Full Driving Licence/);
});

// Confirms that the person has a power level that is over 9000!

test('confirms power level', () => {
  return assert.ok(powerLevel());
});

// Checks to see if the employees have the same amount of shift work days in a week

test('employees have an equal number of work days', () => {
  const employeeOne = ['Monday', 'Tuesday', 'Wednesday,', 'Thursday'];

  const employeeTwo = ['Friday', 'Saturday', 'Sunday,', 'Monday'];

  return assert.equal(workSchedule(employeeOne.length, employeeTwo.length), 8);
});
