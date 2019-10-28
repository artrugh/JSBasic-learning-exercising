// Question 1
// Given a string and the position of an open parentheses bracket, return the position of the matching closing parentheses bracket.

// findClose("He(ll(o) Wor)ld", 2) // returns 12
// findClose("(()())", 1) // returns 2
// Question 2
// Write a function that receives a string and outputs whether the string is a valid IPv4 address. Anything between 0.0.0.0 and 255.255.255.255 would return true. Bonus: What is an IPv4 address?

// isIPValid("195.2.43.5") // returns true
// isIPValid("0.4.521.3") // returns false
// Question 3
// Write a function that receives a year as an argument and returns an array with the 10 closest subsequent years that meet the following condition: the first two digits summed with the last two digits are equal to the middle two digits.

// Year is a four digit integer Examples: 1978 => 19 + 78 = 97 2307 => 23 + 07 = 30

// Question 4
// There are 100 open lockers. You close every 2nd locker (so the 2nd, 4th, 6th, ... 100th are all closed). Then, you go to every third locker and open it if it is closed and close it if it is open. You proceed to toggle every nth locker on pass number n. So, for example, on pass number 16 – you will toggle every 16th locker. After your hundredth pass of the hallway, in which you toggle only locker number 100, what lockers are open?

// Question 5
// Let's write a function that will receive a string as parameter. It should return a compressed version of the string, but only if the compressed string is shorter than the original.

// For example, for the string 'aabccccccaaa' it should return 'a2b1c5a3'. For the string 'abc' it should still return 'abc' as it is shorter than the compressed version 'a1b1c1'.

// Question 6
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()" Output: true

// Example 2:

// Input: "()[]{}" Output: true

// Example 3:

// Input: "(]" Output: false

// Example 4:

// Input: "([)]" Output: false

// Example 5:

// Input: "{[]}" Output: true