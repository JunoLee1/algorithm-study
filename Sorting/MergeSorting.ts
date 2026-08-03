function mergeSorting(nums: number[]) {
  const n = nums.length;
  if (n === 1) {
    return nums;
  }
  const mid = Math.floor(n / 2);
  const leftNums = nums.slice(0, mid);
  const rightNums = nums.slice(mid);
  console.log("leftNums: ", leftNums, "rightNums: ", rightNums);

  const sortedLeft = mergeSorting(leftNums);
  const sortedRight = mergeSorting(rightNums);

  let result: number[] = [];
  let index_l = 0;
  let index_r = 0;
  while (index_l < sortedLeft.length || index_r < sortedRight.length) {
    if (index_l === sortedLeft.length) {
      result.push(sortedRight[index_r]);
      index_r += 1;
      console.log("1st if test: ", result);
      continue;
    } else if (index_r === sortedRight.length) {
      result.push(sortedLeft[index_l]);
      index_l += 1;
      console.log("2nd if test: ", result);
      continue;
    } else if (sortedRight[index_r] <= sortedLeft[index_l]) {
      result.push(sortedRight[index_r]);
      index_r += 1;
      console.log("test: ", result);
    } else {
      result.push(sortedLeft[index_l]);
      index_l += 1;
    }
  }
  return result;
}
console.log(mergeSorting([5, 3, 4, 2, 8, 7, 9, 1]));
