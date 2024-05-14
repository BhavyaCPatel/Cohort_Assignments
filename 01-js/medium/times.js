/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
let startTime = new Date().getTime();
let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
let endTime = new Date().getTime();
let timeTaken = (endTime - startTime) / 1000;
console.log(`Time taken to calculate sum from 1 to ${n}: ${timeTaken} seconds`);
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let current_second = new Date().getMilliseconds();
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    let end_second = new Date().getMilliseconds()

    console.log(end_second - current_second)
}
calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);