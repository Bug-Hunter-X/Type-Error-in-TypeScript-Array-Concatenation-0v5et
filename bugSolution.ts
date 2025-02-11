function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2: number[] = [4, 5, 6]; //Corrected type

const combined = combine(arr1, arr2); 
console.log(combined); //[1,2,3,4,5,6] 

//Alternative solution to handle potential type mismatches using type assertion or type guards
function combineSafe(arr1: number[], arr2: (number | string)[]): number[]{
  return arr1.concat(arr2.filter(item => typeof item === 'number') as number[]);
}
const arr3 = [1,2,3];
const arr4 = [4,5,"6"];
const combinedSafe = combineSafe(arr3,arr4); // [1,2,3,4,5]
console.log(combinedSafe);