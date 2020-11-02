const HashMap = require('./hashMap')

function main() {

  const lotr = new HashMap()

  lotr.set('Hobbit', 'Bilbo')
  lotr.set(lotr._findSlot('Hobbit'), 'Frodo')
  lotr.set('Wizard', 'Gandalf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set(lotr._findSlot('Maiar'), 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElvan', 'Awren')
  lotr.set('Ent', 'Treebeard')
  // console.log(lotr)
  console.log(lotr.get('Maiar'), lotr.get('Hobbit'))



}

// main()

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log('string 1', map1.get(str1));
    console.log('string 2', map1.get(str2));
    console.log('string 3', map2.get(str3));
    console.log('string 4', map2.get(str4));
}

// WhatDoesThisDo()

function removeDuplicates(str) {
    const mapStr = new HashMap()
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        try {
            mapStr.get(str[i])
            // mapStr.add(str[i])
        }
        catch(e) {
            mapStr.set(str[i], true)
            newStr += str[i]
        }
    }
    return console.log(newStr)

}

// removeDuplicates("google all that you think can think of")

const palindrome = (string) => {
  let convertedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const palindromeMap = new Map()
  let odd = 0
  for (let i = 0; i < convertedString.length; i++) {
    if (palindromeMap.get(convertedString[i]) === undefined) {
      palindromeMap.set(convertedString[i], 1)
    }
    else {
      let char = palindromeMap.get(convertedString[i])
      palindromeMap.set(convertedString[i], char += 1)
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if (palindromeMap.get(convertedString[i]) % 2 !== 0) {
      odd++
    }
    if (odd > 1) {
      return false
    }
  }
  return true
}

// console.log(palindrome('A man, a plan, a canal: Panama'))



function anagramGrouping(str) {
    let normalized = str.split('').sort().join('')
    console.log(normalized)
}

anagramGrouping('teas')