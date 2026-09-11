var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const count = new Array(26).fill(0);
  for (let char of s1) {
    count[char.charCodeAt(0) - 97]++;
  }

  let left = 0;
  let right = 0;
  let required = s1.length;

  while (right < s2.length) {
    const index = s2.charCodeAt(right) - 97;

    if (count[index] > 0) {
      required--;
    }

    count[index]++;
    right++;

    if (right - left > s1.length) {
      const leftIndex = s2.charCodeAt(left) - 97;

      if (count[leftIndex] > 0) {
        required++;
      }

      count[leftIndex]--;
      left++;
    }

    if (required === 0) {
      return true;
    }
  }

  return false;
};
// console.log(checkInclusion("ab", "eidbaooo"));
