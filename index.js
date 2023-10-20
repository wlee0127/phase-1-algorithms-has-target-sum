function hasTargetSum(array, target) {
  // Write your algorithm here
boo = false;
/*
for(i=0; i<=array.length-1; i++){
  if (array[i] >= target){
    array.splice(i,1);
  }
}
*/

for(i=0; i<array.length-1; i++){
  for(j=i+1; j<=array.length-1; j++){
    if(array[i]+array[j]===target){
      boo = true;
      return boo;
    }else {
      continue;
    }
  }
}

return boo;
}

hasTargetSum([-3, 8, 12, 4, 13, 8], 10)
console.log(boo)

/* 
  Write the Big O time complexity of your function here
  O(n+(n^2))
*/

/* 
  Add your pseudocode here
  
  boo = false;
  
  //this removes all numbers equal or greater than 10 and mutates our original array.
  for i=0; i<=array length-1; i++
    if array[i] >= target
     splice array[i]
    
  //takes the sum or every pair combination of numbers in array and compare to target   
  for i=0; i<array length-1;i++
    for j=i+1; j<=array length-1; j++
      if array[i]+array[j]===target
      boo = true;
      return boo
      else
      continue
  
  return boo;
*/

/*
  Add written explanation of your solution here
  remove all numbers equal or greater than target number from array.
  Take the sum of every possible pair of remaining numbers within 
  array and compare it to target number.  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
