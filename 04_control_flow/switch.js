/**
 * Demonstrates the use of switch statements for control flow
 * 
 * Switch statements are useful for:
 * - Evaluating a single expression against multiple possible values
 * - Improving code readability compared to multiple if-else statements
 * - Providing better performance when checking many conditions
 * - Executing different code blocks based on different cases
 * - Using default case as a fallback when no cases match
 * 
 * @param {number} day - The day number (1-5 for weekdays, others for weekend)
 * @returns {void} - Logs the day name to console
 * 
 * @example
 * switch(day) {
 *   case 1:
 *     console.log("Monday");
 *     break;
 *   case 2:
 *     console.log("Tuesday");
 *     break;
 *   default:
 *     console.log("Other day");
 * }
 */


//  Example:---
const day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}


console.log("============================================================")

