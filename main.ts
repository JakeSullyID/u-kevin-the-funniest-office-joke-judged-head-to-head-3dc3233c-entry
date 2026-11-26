// Establishing passive-aggressive corporate correspondence as the setup leads naturally into the absurd realization of self-deception as the punchline.
import * as fs from 'fs';
import * as path from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

// The punchline delivers a sharp twist by having the sender gaslight themselves into believing the imaginary prior message.
const joke = "I wrote 'per my last email' so politely that even I believed I had sent the first one.";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, joke, 'utf8');
console.log('Successfully wrote office joke entry.');
