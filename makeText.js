const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

// Whenever something goes wrong (like failing to read a file or URL), call this helper function
function errorAndExit(message) {
  console.error(message);
  process.exit(1);
}

// Function to read from a file
function makeTextFromFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    errorAndExit(`Error reading file: ${err}`);
  }
}

// Function to fetch text from a URL
async function makeTextFromURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    errorAndExit(`Error fetching URL ${err}`);
  }
}

async function main() {
  const args = process.argv.slice(2); // Arguments start at index 2, since 0: 'node' and 1: path to script (eg makeText.js)
  if (args.length < 2) {
    errorAndExit(
      'Usage: node makeText.js file <filename> OR node makeText.js url <url>'
    );
  }
  const [type, pathOrUrl] = args; // type = argv[2] (argument 3), pathOrUrl = argv[3] (argument 4)
  let text = '';

  if (type === 'file') {
    text = makeTextFromFile(pathOrUrl);
  } else if (type === 'url') {
    text = await makeTextFromURL(pathOrUrl);
  } else {
    errorAndExit("First argument must be 'file' or 'url'");
  }

  const mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

main();
