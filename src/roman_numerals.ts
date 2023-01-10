export { fromRomanNumerals, toRomanNumerals };

const fromRomanNumerals = (roman: string): number => {

    const value = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
     } as const;

     type ValueKey  = keyof typeof value;

    if (roman === undefined || typeof roman !== 'string' || roman ==="" ) throw new Error("String of roman numerals required");
    if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman)) throw new Error("Invalid characters in parameter / out of range");

    

    return [...roman]
        .reduce((total:number, numeral:string, position:number, wholeRomanNumber:string[]):number => 
            total + (value[numeral as ValueKey] < value[wholeRomanNumber[position + 1] as ValueKey] ? -value[numeral as ValueKey] : value[numeral as ValueKey])
        ,0);
};

function toRomanNumerals( num: number ) :string { 

    if( num < 1 || num > 3999 ) throw new Error("Out of range");

    if( !Number.isInteger(num) ) throw new Error("Integer required");

    const mapToRoman = [
        ["","I","II","III","IV","V","VI","VII","VIII","IX"] as const,
        ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"] as const,
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"] as const,
        ["","M", "MM", "MMM", "MMM"] as const,
    ] as const; 

    return [...String(num)].reverse().reduce((roman:string, digit:string, position:number):string => mapToRoman[position][+digit]+roman , "");
}