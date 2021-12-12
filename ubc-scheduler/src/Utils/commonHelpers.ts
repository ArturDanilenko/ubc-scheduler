export const firstDigit = (num: number) => {
    return Math.floor( num / 100 ) % 10; 
};