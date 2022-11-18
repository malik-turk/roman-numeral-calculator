/**
 * Convert integers to roman numerals
 * @param number the number to be converted
 */
export const converter = (number: number): string|undefined => {
    if (number > 1000 || number < 1) {
        return;
    }

    let result = '';
    const romanNumeralsMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    Object.entries(romanNumeralsMap).forEach(([letter, i]) => {
        result += letter.repeat(Math.floor(number / i));
        number %= i;
    });

    return result;
};
