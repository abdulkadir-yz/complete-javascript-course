const vowels = ["a", "e", "i", "o", "u"];

function pigLatin(word) {
    const firstLetter = word[0].toLowerCase();
    if (vowels.includes(firstLetter)) {
        return firstLetter.slice(1) + "way";
    }
    else if (!vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {   // I couldnt understand the condition
        return word.slice(2) + firstLetter + "ay";
    }
    else {
        return word + "ay";
    }
}

console.log(pigLatin("Kadir"));
console.log(pigLatin("Efe"));
console.log(pigLatin("Andrew"));
console.log(pigLatin("Bashar"));
