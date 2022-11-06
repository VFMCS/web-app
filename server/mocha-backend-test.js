const { expect } = require('chai'); 
describe('Subtract numbers', () => { 
    if ('should subtract two numbers correctly', () => { 
        const sub = 1 - 2; 
        const expectedResult = 1; 
        expect(sub).to.equal(expectedResult); 
    });
});
