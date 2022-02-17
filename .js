function palindrome(str) {
  let ourRegex = /[0-9a-z!@#$%^&*()+\-=\[\]{};':"\\|<>\/?]|/gi
  let newStrArray = str.match(ourRegex);
  let newStrOnly = newStrArray.join('');
  let lowNewStrOnly = newStrOnly.toLowerCase();

  var backwards = '';
  for (let i = lowNewStrOnly.length-1; i >= 0; i--) {
    backwards += lowNewStrOnly[i];
  }
  
  if (lowNewStrOnly === backwards ) {
    return true
  } else return false

}

//returns true if input str is palindrome
//returns false if input str not palindrome
