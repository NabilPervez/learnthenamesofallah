
import fs from 'fs';

async function main() {
    try {
        const quran = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json').then(r => r.json());
        console.log('Quran Structure:', JSON.stringify(quran, null, 2).slice(0, 500));

        // Check first surah
        if (Array.isArray(quran)) {
            console.log('First Item:', JSON.stringify(quran[0], null, 2).slice(0, 200));
        }
    } catch (e) {
        console.error(e);
    }
}
main();
