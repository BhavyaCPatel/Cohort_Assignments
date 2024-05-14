/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  } else {
    // Converting the strings to lower case
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    console.log(str1, str2);
    // Sorting the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    console.log(str1, str2);
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = isAnagram;
