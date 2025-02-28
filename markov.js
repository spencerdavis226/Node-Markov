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
    this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

module.exports = { MarkovMachine };
