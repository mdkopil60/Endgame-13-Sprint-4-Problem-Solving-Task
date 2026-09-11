var searchRange = function(nums, target) {
  function findFirst() {
    let left = 0;
    let right = nums.length - 1;
    let answer = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        answer = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return answer;
  }

  function findLast() {
    let left = 0;
    let right = nums.length - 1;
    let answer = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        answer = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return answer;
  }

  return [findFirst(), findLast()];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));