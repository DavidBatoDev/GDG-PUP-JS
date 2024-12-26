# Functions and Scope Tutorial

## Description of the Problem

In this assignment, you’ll learn about functions and the different types of scope in JavaScript. Scope determines where variables, constants, and functions are accessible in your code. You’ll practice creating a few variables with different scopes and write functions that demonstrate how scope works.

---

## Provided Files

### `script.js`

This file contains an example solution to help you understand the task. Use it as a reference only after you’ve tried solving the problem yourself. Practice is key to learning!

---

## Instructions

1. **Create Global Variables:**

   - Create two global variables named `globalVar` and `anotherGlobalVar`.
   - Assign any values to them (e.g., strings or numbers).

2. **Create a Function:**

   - Define a function named `demoFunctionScope`.
   - Inside this function, create a local variable named `localVar`.
   - Log both the global variable `globalVar` and the local variable `localVar` to the console.
   - Return a string that includes both variables.

3. **Block Scope Demonstration:**

   - Write an `if` statement that always executes (e.g., `if (true) { ... }`).
   - Inside this block, use `let` to declare a variable named `blockVar`. Assign any value to it.
   - Log `blockVar` inside the block.
   - Try logging `blockVar` outside the block and observe the result in the browser console.

4. **Test Your Code:**

   - Call the `demoFunctionScope` function and use `console.log()` to display its return value.
   - Observe which variables are accessible globally, within the function, and within the block.

---

## Tips

- **Global Scope:** Variables defined outside of any function or block are accessible anywhere in your code (unless shadowed by a local variable).
- **Function Scope:** Variables declared inside a function are only accessible within that function.
- **Block Scope:** Variables declared with `let` or `const` inside a block (`{ ... }`) are only accessible inside that block.
- **Shadowing:** If you use the same variable name in different scopes, the local version takes precedence in its scope.

---

### Example Output

Suppose you have the following outputs in your console:

Inside demoFunctionScope, globalVar: I am global
Inside demoFunctionScope, localVar: I am local to demoFunctionScope
blockVar inside block: I exist only in this block
ReferenceError: blockVar is not defined
Function returned: Global: I am global, Local: I am local to demoFunctionScope


(Your exact values may differ based on the variable names and assignments you choose.)

---

You’ve got this! Take your time to experiment with scope. If you need help, refer to the `script.js` file for guidance.
