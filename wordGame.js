function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
}

function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (const word of words) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

function wordLengths(sentence) {
    const words = sentence.split(' ');
    let lengths = '';
    for (const word of words) {
        if (lengths !== '') {
            lengths += ', ';
        }
        lengths += `${word} (${word.length})`;
    }
    return lengths;
}
