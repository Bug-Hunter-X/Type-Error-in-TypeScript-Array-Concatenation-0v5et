# Type Error in TypeScript Array Concatenation

This repository demonstrates a common type error in TypeScript when concatenating arrays of different types.  The `combine` function attempts to concatenate two number arrays, but `arr2` contains a string element, causing a type error.

The solution demonstrates how to properly type the arrays to avoid the error and how to handle potential type mismatches during array combination.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` to see the code that produces the type error.
3. Compile the code with TypeScript compiler: `tsc bug.ts`
4. Observe the type error reported by the compiler.
5. View `bugSolution.ts` to see the corrected version.

## Solution
The solution involves type checking and handling of potential type mismatches. In this case, you need to ensure all elements in `arr2` are of type number.