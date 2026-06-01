const vowels = ["a", "e", "i", "o", "u"];

function pigLatin(word) {
    const firstLetter = word[0].toLowerCase();
    if (vowels.includes(firstLetter)) {
        return word + "yay";
    } else {
        return word.slice(1) + firstLetter + "ay";
    }
}

console.log(pigLatin("Kadir"));