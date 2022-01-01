function check(text) {
  reverse = text.split("").reverse().join("");
  if (reverse !== text) {
    return "not palindrome";
  }
  return "palindrome";
}
