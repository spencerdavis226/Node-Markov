/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  // Example: new MarkovMachine("the cat in the hat") outputs this.words = ["the", "cat", "in", "the", "hat"]
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};

    // this.words = ["the", "cat", "in", "the", "hat"]
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      // if chains object doesnt have word as key, add word as key and set value to empty array
      if (!chains[word]) {
        chains[word] = [];
      }
      // if chains has word as key, push nextWord into value array
      chains[word].push(nextWord);
    }

    this.chains = chains; // {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]}
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let output = [];

    let keys = Object.keys(this.chains); // Array of all words from chains
    let key = keys[Math.floor(Math.random() * keys.length)]; // Randomly chosen key

    for (let i = 0; i < numWords; i++) {
      output.push(key);
      let nextWords = this.chains[key]; // ex: cat as key would make nextWords = ["in"]

      if (!nextWords) break;
      key = nextWords[Math.floor(Math.random() * nextWords.length)]; // Random value from nextWords array

      if (key === null) break;
    }
    return output.join(' ');
  }
}

module.exports = { MarkovMachine };
