import {expect} from "@jest/globals";
import MathOperations from "../src/mathOperations";



describe("Positive jest tests", () => {

    test("1. Check exponentiation of two positive digits", () => {
        const result = MathOperations.power(4, 3);
        expect(result).toBe(64);
    });
    test("2. Check square root of positive digit", () => {
        const result = MathOperations.sqrt(4);
        expect(result).toBe(2);
    });
    test("3. Check square root of zero", () => {
        const result = MathOperations.sqrt(0);
        expect(result).toBe(0);
    });
    test("4. Check if number is even", () => {
        const result = MathOperations.isEven(234);
        expect(result).toBe(true);
    });
    test("5. Check if number is odd", () => {
        const result = MathOperations.isOdd(-234);
        expect(result).toBe(false);
    });
    test("6. Check the absolute value of a number", () => {
        const result = MathOperations.abs(-234);
        expect(result).toBe(234);
    });
    test("7. Check greatest common divisor of two numbers", () => {
        const result = MathOperations.gcd(16, 8);
        expect(result).toBe(8);
    });
    test("8. Check greatest common divisor of one number", () => {
        const result = MathOperations.gcd(-90);
        expect(result).toBe(-90);
    });
    test("9. Check the least common multiple of two numbers", () => {
        const result = MathOperations.lcm(90, 80);
        expect(result).toBe(720);
    });
    test("10. Check the maximum value in an array of numbers", () => {
        const result = MathOperations.max([5, 47, 89, 0, -123]);
        expect(result).toBe(89);
    });
    test("11. Check the minimum value in an array of numbers", () => {
        const result = MathOperations.min([5, 47, 89, 0, -123]);
        expect(result).toBe(-123);
    });
    test("12. Check the arithmetic mean of an array of numbers", () => {
        const result = MathOperations.average([5, 47, 89, 0, -123]);
        expect(result).toBe(3.6);
    });
    test("13. Check if a number is prime", () => {
        const result = MathOperations.isPrime(13);
        expect(result).toBe(true);
    });
    test("14. Check sum of digits", () => {
        const result = MathOperations.sumOfDigits(13);
        expect(result).toBe(4);
    });
    test("15. Check reverse Number", () => {
        const result = MathOperations.reverseNumber(13);
        expect(result).toBe(31);
    });
});


describe("Negative jest tests", () => {
    const mathOperations = new MathOperations();

    test("1. Check exponentiation with one variable", () => {
        const result = MathOperations.power(4);
        expect(result).toBe(NaN);
    });
    test("2. Check square root of negative digit", () => {
        const result = () => MathOperations.sqrt(-45);
        expect(result).toThrowError("Square root of negative number");
    });
    test("3. Check square root of string", () => {
        const result = MathOperations.sqrt("two");
        expect(result).toBe(NaN);
    });
    test("4. Check if NaN is even", () => {
        const result = MathOperations.isEven(NaN);
        expect(result).toBe(false);
    });
    test("5. Check if array is odd", () => {
        const result = MathOperations.isOdd([1,2,3]);
        expect(result).toBe(true);
    });
    test("6. Check the absolute value of object", () => {
        const result = MathOperations.abs({cat: 'Tom'});
        expect(result).toBe(NaN);
    });
    test("7. Check greatest common divisor without arguments", () => {
        const result = MathOperations.gcd();
        expect(result).toBe(undefined);
    });
    test("8. Check greatest common divisor of two strings", () => {
        const result = MathOperations.gcd('hehe', 'omg');
        expect(result).toBe('omg');
    });
    test("9. Check the least common multiple of two inconsistent variables", () => {
        const result = MathOperations.lcm( Boolean, undefined);
        expect(result).toBe(NaN);
    });
    test("10. Check the least common multiple of one number", () => {
        const result = MathOperations.lcm(90);
        expect(result).toBe(NaN);
    });
    test("11. Check the least common multiple of one number and space", () => {
        const result = MathOperations.lcm('', 90);
        expect(result).toBe(0);
    }); 
    test("12. Check the maximum value in an empty array", () => {
        const result = () => MathOperations.max([]);
        expect(result).toThrowError("Array is empty");
    });
    test("13. Check the minimum value in an array of strings", () => {
        const result = MathOperations.min(['argentina', 'spain', 'france']);
        expect(result).toBe(NaN);
    });
    test("14. Check sum of digits without values", () => {
        const result = () => MathOperations.sumOfDigits();
        expect(result).toThrowError("Cannot read properties of undefined (reading 'toString')");
    });
    test("15. Check reverse Number of _", () => {
        const result = MathOperations.reverseNumber("_");
        expect(result).toBe(NaN);
    });
}); 