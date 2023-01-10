import {describe, expect, test} from '@jest/globals';
import { toRomanNumerals, fromRomanNumerals } from "./roman_numerals";

const romanNumeralTestCaseBase = [
    { roman: "I", arabic: 1},
    { roman:"XII", arabic: 12},
    { roman:"CXXIII", arabic: 123},
    { roman:"MCCXXXIV", arabic: 1234},
    { roman:"MMCCCXLV", arabic: 2345},
    { roman:"MMMCDLVI", arabic: 3456},
    { roman:"DLXVII", arabic: 567},
    { roman:"DCLXXVIII", arabic: 678},
    { roman:"DCCLXXXIX", arabic: 789},
    { roman:"DCCCXC", arabic: 890},
    { roman:"CM", arabic: 900},
    { roman:"DCCCXI", arabic: 811},
    { roman:"DLVI", arabic: 556},
    { roman:"DCXIV", arabic: 614},
    { roman:"CMXXXIX", arabic: 939},
    { roman:"CCLXV", arabic: 265},
    { roman:"CCCXCIX", arabic: 399},
    { roman:"CMLXXIII", arabic: 973},
    { roman:"CDLXXXIII", arabic: 483},
    { roman:"DCCLII", arabic: 752},
    { roman:"CCCXXX", arabic: 330},
    { roman:"DCLXXXI", arabic: 681},
    { roman:"CXLVII", arabic: 147},
    { roman:"CCLXXXVI", arabic: 286},
    { roman:"CCCLX", arabic: 360},
    { roman:"DXXII", arabic: 522},
    { roman:"DCCLVIII", arabic: 758},
    { roman:"MMMDCCCLXXXVIII", arabic: 3888},
    { roman:"CXIV", arabic: 114},
    { roman:"CDXCVI", arabic: 496},
    { roman:"CMLVII", arabic: 957},
    { roman:"DCCXCII", arabic: 792},
    { roman:"DCXXXVI", arabic: 636},
    { roman:"DCCLXXVI", arabic: 776},
    { roman:"CCC", arabic: 300},
    { roman:"CXXXII", arabic: 132},
    { roman:"DCCCLXV", arabic: 865},
    { roman:"CCCXXVI", arabic: 326},
    { roman:"DCCVII", arabic: 707},
    { roman:"CLXII", arabic: 162},
    { roman:"MMCMIII", arabic: 2903},
    { roman:"MMMCMXCIX", arabic: 3999},
]

// romanFromDecimal tests

describe("toRomanNumerals", () => {

    test(`Test cases`, () => 
        romanNumeralTestCaseBase.forEach(({arabic, roman}) => 
            expect(toRomanNumerals(arabic)).toBe(roman))
    );
    
    // not required in typescript
    /*
    test("Non-numeric parameter, throws error", () => {
        expect(() => toRomanNumerals()).toThrow("Numeric required");
        expect(() => toRomanNumerals("hello!")).toThrow("Numeric required");
        expect(() => toRomanNumerals([1, 2])).toThrow("Numeric required");
        expect(() => toRomanNumerals({a:0})).toThrow("Numeric required");
    });
    */

    test("With parameter outside range 1.. 3999, throws error", () => {
        expect(() => toRomanNumerals(4000)).toThrowError("Out of range");
        expect(() => toRomanNumerals(12301)).toThrow("Out of range");
        expect(() => toRomanNumerals(-1)).toThrow("Out of range");
        expect(() => toRomanNumerals(0)).toThrow("Out of range");
        expect(() => toRomanNumerals(-2130)).toThrow("Out of range");
    });

    test("With non-integer, throws error", () => {
        expect(() => toRomanNumerals(3.243)).toThrow("Integer required");
        expect(() => toRomanNumerals(1233.001)).toThrow("Integer required");
    });
});

describe("fromRomanNumerals", () => {
    
    test(`Test cases`, () => romanNumeralTestCaseBase.forEach(({arabic, roman}) => expect(fromRomanNumerals(roman)).toBe(arabic)) );

    /*
    test("String of roman numerals required", () => {
        expect(() => fromRomanNumerals(123)).toThrow("String of roman numerals required");
        expect(() => fromRomanNumerals(["V", "L"])).toThrow("String of roman numerals required");
        expect(() => fromRomanNumerals({"V":"L"})).toThrow("String of roman numerals required");
        expect(() => fromRomanNumerals("")).toThrow("String of roman numerals required");
    })
    */

    test("Invalid characters in parameter / out of range", () => {
        expect(() => fromRomanNumerals("a")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("MMMM")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("CCCC")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("LL")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("VV")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("DD")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("IIII")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("XXXX")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("VIV")).toThrow("Invalid characters in parameter / out of range");
        expect(() => fromRomanNumerals("LCL")).toThrow("Invalid characters in parameter / out of range");

    })

});

