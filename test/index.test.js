const sum = require("../index.js").sum,
    subtract = require("../index.js").subtract;

test('state of 0 is increased by 3 to equal 3', () => {
   expect(sum(0, {
       type: 'ADDS_NUMBER',
       number: 3
   })).toBe(3);
});

test('state of 3 is decreased by 3 to equal 0', () => {
   expect(subtract(3, {
       type: 'SUBTRACTS_NUMBER',
       number: 0
   })).toBe(0);
});