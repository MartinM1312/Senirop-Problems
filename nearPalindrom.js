class NearPalindromsDiv1 {
  constructor(s) {
    this.s = s;
  }

  solve(s) {
    let charactersOccurrences = {};
    let length = s.length;
    let isNearPalindrome = false;
    let repeatingNumberCount = 0;
    let nonEvenCharacters = [];
    let nonEvenCharactersToNumber = [];
    let numberOfOperations = 0;

    //generate alphabet
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

    //count characters recurrency
    for (let i of s) charactersOccurrences[`${i}`] = 0;
    for (let i of s) charactersOccurrences[`${i}`] += 1;

    //check if it's already near palindrome/////////////////////
    if (length % 2 == 0) {
      for (let i in charactersOccurrences) {
        if (charactersOccurrences[i] % 2 == 0) {
          isNearPalindrome = true;
        } else {
          isNearPalindrome = false;
          break;
        }
      }
    } else {
      for (let i in charactersOccurrences) {
        if (charactersOccurrences[i] % 2 == 0) {
          isNearPalindrome = true;
        } else {
          repeatingNumberCount += 1;
        }
      }
      if (repeatingNumberCount == 1) {
        isNearPalindrome = true;
      } else {
        isNearPalindrome = false;
      }
    }
    console.log(`Is Near Palindrome: ${isNearPalindrome}`);

    //////////////////////////////////

    if (!isNearPalindrome) {
      //extract the characters that are not repeated an even number of times
      for (let i in charactersOccurrences) {
        if (charactersOccurrences[i] % 2 != 0) {
          for (let j = 0; j < charactersOccurrences[i]; j++) {
            nonEvenCharacters.push(i);
          }
        }
      }

      nonEvenCharacters.sort();

      //transform the characters into their equivalent number
      for (let i of nonEvenCharacters) {
        if (alphabet.includes(i)) {
          nonEvenCharactersToNumber.push(alphabet.indexOf(i) + 1);
        }
      }

      // get number of operations for a string with an even length
      if (nonEvenCharactersToNumber.length % 2 == 0) {
        for (let i = 0; i < nonEvenCharactersToNumber.length; i += 2) {
          if (
            Math.abs(
              nonEvenCharactersToNumber[i] - nonEvenCharactersToNumber[i + 1]
            ) > 13
          ) {
            numberOfOperations += Math.abs(
              26 +
                nonEvenCharactersToNumber[i] -
                nonEvenCharactersToNumber[i + 1]
            );
          } else {
            numberOfOperations += Math.abs(
              nonEvenCharactersToNumber[i] - nonEvenCharactersToNumber[i + 1]
            );
          }
        }
      } else {
        //check if the last item is closer to the first one than the second item.
        if (
          Math.abs(
            26 +
              nonEvenCharactersToNumber[0] -
              nonEvenCharactersToNumber[nonEvenCharactersToNumber.length - 1]
          ) <
          Math.abs(nonEvenCharactersToNumber[0] - nonEvenCharactersToNumber[1])
        ) {
          nonEvenCharactersToNumber.unshift(nonEvenCharactersToNumber.pop());
        }

        //get number of operations for a string with an odd length
        for (let i = 0; i < nonEvenCharactersToNumber.length - 1; i += 2) {
          if (
            Math.abs(
              nonEvenCharactersToNumber[i] - nonEvenCharactersToNumber[i + 1]
            ) > 13
          ) {
            numberOfOperations += Math.abs(
              26 +
                nonEvenCharactersToNumber[i + 1] -
                nonEvenCharactersToNumber[i]
            );
          } else {
            numberOfOperations += Math.abs(
              nonEvenCharactersToNumber[i] - nonEvenCharactersToNumber[i + 1]
            );
          }
        }
      }
    }
    console.log(`Number of Operations: ${numberOfOperations}`);
    return numberOfOperations;
  }
}

// var s = 'dggio';

// a c d e f g
// a a d d f f ---> 2 1 1
// a c c e e a ----> 6 1 1

//d g g i o
// d i o
// o d i
// i i o
// i g g i o -> gioig

test = new NearPalindromsDiv1();

console.log(test.solve("abc"));

// h
// a  --->d: 3  c: 2
// b  --->d: 2  c: 1
// c  --->d: 1
// d            c: 1
// h

// 1 2 3 4 5 6 7 8
//         4 3 2 1
//         1 3 5 7

// 1 2 3 4 5 6 7 8
//         1 2 3 4
//

//a b c d e f g h
//b b c c e e g g

//d a d d y
//a d d d y
//a a d d y --> dayad

//a g h o p r q
//a g h o p q r
//a a h h p p r ---> 6 7 1 : pahrhap
//g g o o q q r ---> 6 7 1

//Order the remaining characters from smallest to largest and then
//find the difference between every 2 characters.

// 26 letras ----13 es la mitad
// 13 - 1 = 12
// 27 - 13 = 14
// 14 - 1 = 13
// 27 - 14 = 13
// 15 - 1 = 14
// 27 - 15 = 12
// indice de numero + 26
// if the diference between 2 numbers is > 13 then the operation should be
// (26 + index of the smallest number) - the largest number.
