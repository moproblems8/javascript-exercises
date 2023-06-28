const reverseString = function(word) {
    word = word.split(''); // split word into array of letters
    word = word.reverse(); // reverse array of letters
    word = word.join(''); // join array of letters into word

    return word;
};

// Do not edit below this line
module.exports = reverseString;
