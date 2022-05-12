// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.

// find the sum of array
// divide by array length

const arr = [1, 4, 7, 10];
sum = 0;

arr.forEach(function (num) { sum += num })

average = sum / arr.length;

console.log(average);


// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
// Arrays to aid in working through this problem.

function findIndex(nums, target) {
    return nums.indexOf(target)
}

console.log(findIndex([4, 5, 6, 7, 0, 1, 2], 4));

// HARD: Create two buttons, one that when clicked turns the background of the body red. The 
// other, when clicked, turns the body's background color white. Each of the background colors 
// should be defined as class styles and when the buttons are pushed the body's classList is 
// updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to 
// ONLY include that className



// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

var coinChange = function (coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potentialAmt = table[idx] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(coinChange([1, 2, 5], 11));