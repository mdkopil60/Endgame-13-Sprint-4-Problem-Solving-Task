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
console.log(wordPattern("abba", "dog cat cat dog"));