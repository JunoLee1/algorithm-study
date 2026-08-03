function selectQuick(nums: number[], k: number) {
  const n = nums.length;
  let mid = Math.floor(n / 2);
  let piv = nums[mid];
  const less = [];
  const greater = [];
  const equal = [];

  for (const num of nums) {
    if (num < piv) {
      less.push(num);
    } else if (num > piv) {
        greater.push(num)
    }
    else {
        equal.push(num)
    };
  }
  if (k <= greater.length) {
    return selectQuick(greater, k);
  } else if (k <= greater.length + equal.length) {
    return piv;
  }
  return selectQuick(less, k - greater.length - equal.length);
}

console.log(selectQuick([1, 3, 8, 2, 4, 6, 5, 7, 9], 3));
