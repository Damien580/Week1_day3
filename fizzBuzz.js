//Write your solution below this line
//for loop: (declaration; condition; increment).
for (let i = 1; i <= 50; i++) {
// if/else statement: conditions run first to last. if fizz and/or buzz 
//run before fizzbuzz, fizzbuzz will not display because its conditions are
//met prior to it running.
if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
} else if (i % 3 === 0) {
    console.log("Fizz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(i)
}
}