// 01. Isomorphic Strings
 
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapST[charS] && mapST[charS] !== charT) ||
      (mapTS[charT] && mapTS[charT] !== charS)
    ) {
      return false;
    }
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }
  return true;
};



// 02. Word Pattern

var wordPattern = function(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWord = {};
  const wordToPattern = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (
      (patternToWord[char] && patternToWord[char] !== word) ||
      (wordToPattern[word] && wordToPattern[word] !== char)
    ) {
      return false;
    }

    patternToWord[char] = word;
    wordToPattern[word] = char;
  }

  return true;
};



// 03. Find the Difference

var findTheDifference = function(s, t) {
  let result = 0;

  for (let char of s) {
    result ^= char.charCodeAt(0);
  }

  for (let char of t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
};


//  04. Reverse Linked List

var reverseList = function(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;

    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
};


// 05. Middle of the Linked List

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};



// 06. Product of Array Except Self
 
var productExceptSelf = function(nums) {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};



// 07. Remove Nth Node From End of List
 
var removeNthFromEnd = function(head, n) {
  const dummy = {
    next: head
  };

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};



//  08. Find First and Last Position of Element in Sorted Array
 
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



// 09. Permutation in String
 
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



// 10. Find All Anagrams in a String

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