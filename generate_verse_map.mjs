
import fs from 'fs';

async function main() {
    try {
        const [namesData, quranAr, quranEn] = await Promise.all([
            fetch('https://raw.githubusercontent.com/KabDeveloper/99-Names-Of-Allah/main/99_Names_Of_Allah.json').then(r => r.json()),
            fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json').then(r => r.json()),
            fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_en.json').then(r => r.json())
        ]);

        const result = {};

        for (const item of namesData.data) {
            if (!item.found) continue;

            const match = item.found.match(/\((\d+):(\d+)\)/);
            if (match) {
                const surahId = parseInt(match[1]);
                const ayahId = parseInt(match[2]);

                if (quranAr[surahId - 1] && quranAr[surahId - 1].verses[ayahId - 1]) {
                    const arText = quranAr[surahId - 1].verses[ayahId - 1].text;

                    let enText = "Translation not found";
                    if (quranEn[surahId - 1] && quranEn[surahId - 1].verses[ayahId - 1]) {
                        const v = quranEn[surahId - 1].verses[ayahId - 1];
                        if (v.translation) enText = v.translation;
                        else if (v.text && !/[\u0600-\u06FF]/.test(v.text)) enText = v.text;
                    }

                    result[item.number] = {
                        citation: `${surahId}:${ayahId}`,
                        arabic: arText,
                        english: enText
                    };
                }
            }
        }

        fs.writeFileSync('verse_map.json', JSON.stringify(result, null, 2));
        console.log("Written to verse_map.json");

    } catch (e) {
        console.error("Error:", e);
    }
}

main();
