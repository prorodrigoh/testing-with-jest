import sut from '../src/index.js';

describe("The tests for sum", () => {
    it('Should subtract 2 numbers if a < b', () => {
        // ARRANGE - setup the input and the expected output
        const a = 2
        const b = 3
        const expected = 1
        // ACT - call the function to be tested
        const actual = sut.sum(a,b)
        // ASSERT - is the result what we expected
        expect(actual).toBe(expected)
    });

    it('Should add 2 numbers if a > b', () => {
        // ARRANGE - setup the input and the expected output
        const c = 3
        const d = 2
        const expected = 5
        // ACT - call the function to be tested
        const actual = sut.sum(c,d)
        // ASSERT - is the result what we expected
        expect(actual).toBe(expected)
    });

    it('Should fail with a string input', () => {
        const a = 'str'
        const b = 3
        const expected = 'Bad input'
        //
        const actual = sut.sum(a,b)
        //
        expect(actual).toBe(expected)
    })
})

describe("The tests for num at third power", () => {

    it('Should elevate a number to third power', () => {
        // arrange
        const a = 3
        const expected = 27
        // act
        const actual = sut.numToPower3(a)
        // assert
        expect(actual).toBe(expected)
    })

    it('Should fail with a string input', () => {
        const a = 'str'
        const expected = 'Bad input'
        //
        const actual = sut.numToPower3(a)
        //
        expect(actual).toBe(expected)
    })

})

// ➜  testing-with-jest git:(main) ✗ npm test

// > testing-with-jest@1.0.0 test
// > jest

//  PASS  test/index.test.js
//   The tests for sum
//     ✓ Should add 2 numbers (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.205 s, estimated 1 s
// Ran all test suites.


// ➜  testing-with-jest git:(main) ✗ npm test

// > testing-with-jest@1.0.0 test
// > jest

//  FAIL  test/index.test.js
//   The tests for sum
//     ✓ Should add 2 numbers (1 ms)
//     ✕ Should fail with a string input (2 ms)

//   ● The tests for sum › Should fail with a string input

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Bad input"
//     Received: "str3"

//       20 |         const actual = sut(a,b)
//       21 |         //
//     > 22 |         expect(actual).toBe(expected)
//          |                        ^
//       23 |     })
//       24 | })
//       25 |

//       at Object.toBe (test/index.test.js:22:24)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.223 s, estimated 1 s
// Ran all test suites.


// -------------------------------------------------------

// one liner without description

// test('Should add 2 numbers', () => {
//     // ARRANGE - setup the input and the expected output
//     const c = 2
//     const d = 3
//     const expected = 5
//     // ACT - call the function to be tested
//     const actual = sut(c,d)
//     // ASSERT - is the result what we expected
//     expect(actual).toBe(expected)

// });

// result of the test

// ➜  testing-with-jest git:(main) ✗ npx jest
//  PASS  test/index.test.js
//   ✓ Should add 2 numbers (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.146 s
// Ran all test suites.

// ➜  testing-with-jest git:(main) ✗ npm test

// > testing-with-jest@1.0.0 test
// > jest

//  PASS  test/index.test.js
//   ✓ Should add 2 numbers (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.108 s, estimated 1 s
// Ran all test suites.
