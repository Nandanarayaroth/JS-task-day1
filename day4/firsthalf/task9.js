function Anagram(str1, str2) {
  let firstStr = str1.split("");
  let secondStr = str2.split("");

  if(secondStr.length !== firstStr.length){
    return false
  }

  for (let i = 0; i < firstStr.length; i++) {
    if (!secondStr.includes(firstStr[i])) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(Anagram("vbn", "nbvm"));

//
