# Node Markov

A Node.js project that uses a Markov chain algorithm to generate random text based on a source input. This project demonstrates how to process text data and create realistic, machine-generated output by analyzing word transitions.

## Overview

This project is divided into two main components:

- **MarkovMachine (markov.js)**
  Builds a Markov chain from input text by splitting the text into words and mapping each word to possible subsequent words. It then generates random text by walking through the chain.

- **Command-Line Script (makeText.js)**
  Provides a command-line interface that accepts either a file or a URL as input. It reads the text, instantiates the MarkovMachine, and outputs generated text to the console.

## How It Works

1. **Input Processing**
   The script reads text either from a file (using fs.readFileSync) or from a URL (using axios).

2. **Building the Markov Chain**
   The MarkovMachine parses the text, creating a dictionary where each word maps to an array of possible next words. The last word maps to null to indicate the end of a sentence.

3. **Generating Text**
   A random starting word is selected, and the machine randomly chooses subsequent words based on the Markov chain until it reaches a word limit or a chain termination.

## Usage

### Running from a File

node makeText.js file <filename>

Example:

node makeText.js file eggs.txt

### Running from a URL

node makeText.js url <url>

Example:

node makeText.js url http://www.gutenberg.org/files/11/11-0.txt

## Setup

1. **Clone the Repository**

   git clone <repository-url>
   cd node-markov

2. **Install Dependencies**

   npm install axios

3. **Run the Script**

   Use the commands shown above to generate text from either a file or a URL.

## Short Description

A Node.js project that uses a Markov chain algorithm to generate realistic random text from a provided source, supporting both local files and remote URLs.
EOF
