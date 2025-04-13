# TwoTasks

Two programming tasks to solve before the interview.

## Task 1: DRY Refactoring Challenge

Refactor the code below to adhere to the DRY (Don't Repeat Yourself) principle without changing its logic.

The original code is located in `task1.js`. It contains duplicated patterns for iterating through object keys and setting/getting properties. Your task is to identify these repetitions and create a more maintainable structure.

## Task 2: Function Currying Implementation

Implement a universal `curry` function that transforms a regular function into a curried version.

Your implementation should:

- Take any function as an input
- Return a curried function that collects arguments one by one
- Return the final result when all arguments have been collected
- Work with functions of various arities (as shown in the examples)

The skeleton and test cases are available in `task2.js`.

## Requirements

- Do not change the business logic of the code
- For Task 1, focus on removing duplication while maintaining functionality
- For Task 2, make sure the curry function works with any number of arguments

Good luck! :)
