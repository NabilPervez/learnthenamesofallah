
import fs from 'fs';

const namesPath = 'src/data/names.ts';
const mapPath = 'verse_map.json';

const namesContent = fs.readFileSync(namesPath, 'utf8');
const verseMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

let count = 0;
// Note the regex now handles quoted "audioUrl" and match backticks correctly
let newContent = namesContent.replace(/\{\s*"id":\s*(\d+),[\s\S]*?"audioUrl":\s*`.*?`\s*\}/g, (match, idStr) => {
    count++;
    const id = parseInt(idStr);
    const verse = verseMap[id];

    if (verse) {
        const closingBraceIndex = match.lastIndexOf('}');
        const content = match.substring(0, closingBraceIndex);

        const verseString = JSON.stringify(verse, null, 2).replace(/\n/g, '\n    ');

        return `${content},\n    "verse": ${verseString}\n  }`;
    }
    return match;
});

fs.writeFileSync(namesPath, newContent);
console.log(`Updated names.ts with ${count} replacements.`);
