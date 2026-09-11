var findAnagrams = function(s, p) {
  const result = [];

  if (p.length > s.length) {
    return result;
  }

  const count = new Array(26).fill(0);
  for (let char of p) {
    count[char.charCodeAt(0) - 97]++;
  }

  let left = 0;
  let right = 0;
  let required = p.length;

  while (right < s.length) {
    const rightIndex = s.charCodeAt(right) - 97;

    if (count[rightIndex] > 0) {
      required--;
    }

    count[rightIndex]++;
    right++;
    if (right - left > p.length) {
      const leftIndex = s.charCodeAt(left) - 97;

      if (count[leftIndex] > 0) {
        required++;
      }

      count[leftIndex]--;
      left++;
    }
    if (required === 0) {
      result.push(left);
    }
  }

  return result;
};
console.log(findAnagrams("cbaebabacd", "abc"));