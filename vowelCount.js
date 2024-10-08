// MOST EFFICIENT SOLUTION
function getCount(str) {
  return [...str.toLowerCase()].reduce((total, char) => total + (['a', 'e', 'i', 'o', 'u'].includes(char) ? 1 : 0), 0);
}


// SOLUTION 2
function getCount(str) {
  // Create a string containing all applicable vowels
  const vowels = 'aeiou';
  // Initialize a starting sum to be compounded
  let total = 0;
  
  for (let i = 0; i < str.length; i++) {
    // Use the .includes() method to see if the vowels string includes str[i]. If it is use the addition increment operator on total.
    if (vowels.includes(str[i].toLowerCase())) {
      total++;
    }
  }
  return total;
}

