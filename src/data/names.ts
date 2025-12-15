import type { NameOfAllah } from "@/lib/types";

function formatId(id: number): string {
  return id.toString().padStart(3, '0');
}

export const namesOfAllah: NameOfAllah[] = [
  {
    "id": 1,
    "arabic": "ٱلْرَّحْمَـٰنُ",
    "transliteration": "Ar-Rahman",
    "meaning": "The Most Merciful",
    "explanation": "He who wills mercy and good for all creation, at all times. This name signifies His all-encompassing, unconditional mercy that extends to believers and non-believers alike in this world.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(1)}.mp3`
  ,
    "verse": {
      "citation": "1:3",
      "arabic": "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
      "english": "The Entirely Merciful, the Especially Merciful"
    }
  },
  {
    "id": 2,
    "arabic": "ٱلْرَّحِيْمُ",
    "transliteration": "Ar-Rahim",
    "meaning": "The Most Compassionate",
    "explanation": "He who acts with mercy and continuously bestows it. This form of mercy is particularly for the believers on the Day of Judgment, a special and continuous compassion for those who followed His path.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(2)}.mp3`
  ,
    "verse": {
      "citation": "2:163",
      "arabic": "وَإِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
      "english": "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful"
    }
  },
  {
    "id": 3,
    "arabic": "ٱلْمَلِكُ",
    "transliteration": "Al-Malik",
    "meaning": "The King",
    "explanation": "The absolute sovereign and ruler of the entire universe. His dominion is absolute, and He has complete authority over everything, without needing anything from anyone.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(3)}.mp3`
  ,
    "verse": {
      "citation": "20:114",
      "arabic": "فَتَعَٰلَى ٱللَّهُ ٱلۡمَلِكُ ٱلۡحَقُّۗ وَلَا تَعۡجَلۡ بِٱلۡقُرۡءَانِ مِن قَبۡلِ أَن يُقۡضَىٰٓ إِلَيۡكَ وَحۡيُهُۥۖ وَقُل رَّبِّ زِدۡنِي عِلۡمٗا",
      "english": "So high [above all] is Allah, the Sovereign, the Truth. And, [O Muhammad], do not hasten with [recitation of] the Qur'an before its revelation is completed to you, and say, \"My Lord, increase me in knowledge"
    }
  },
  {
    "id": 4,
    "arabic": "ٱلْقُدُّوْسُ",
    "transliteration": "Al-Quddus",
    "meaning": "The Most Holy",
    "explanation": "The one who is pure from any imperfection, flaw, or shortcoming. He is exalted and free from what they associate with Him, representing ultimate purity and sanctity.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(4)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 5,
    "arabic": "ٱلْسَّلَامُ",
    "transliteration": "As-Salam",
    "meaning": "The Source of Peace",
    "explanation": "The one who is free from all defects and from whom all peace and safety emanates. He is the source of tranquility for the creation and the embodiment of perfection.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(5)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 6,
    "arabic": "ٱلْمُؤْمِنُ",
    "transliteration": "Al-Mu'min",
    "meaning": "The Inspirer of Faith",
    "explanation": "The one who provides security and affirms the truthfulness of His messengers. He is the source of safety and the one who grants faith to His servants.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(6)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 7,
    "arabic": "ٱلْمُهَيْمِنُ",
    "transliteration": "Al-Muhaymin",
    "meaning": "The Guardian",
    "explanation": "The one who watches over and protects all things. He is the controller and witness over His creation, ensuring everything proceeds according to His divine plan.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(7)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 8,
    "arabic": "ٱلْعَزِيْزُ",
    "transliteration": "Al-Aziz",
    "meaning": "The Mighty",
    "explanation": "The one of ultimate strength, honor, and power. He is the victorious one who is never overcome, the one who is honorable and dominant.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(8)}.mp3`
  ,
    "verse": {
      "citation": "3:6",
      "arabic": "هُوَ ٱلَّذِي يُصَوِّرُكُمۡ فِي ٱلۡأَرۡحَامِ كَيۡفَ يَشَآءُۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
      "english": "It is He who forms you in the wombs however He wills. There is no deity except Him, the Exalted in Might, the Wise"
    }
  },
  {
    "id": 9,
    "arabic": "ٱلْجَبَّارُ",
    "transliteration": "Al-Jabbar",
    "meaning": "The Compeller",
    "explanation": "The one who is overwhelmingly powerful and irresistibly mends the broken. He restores all things and His will is always carried out.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(9)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 10,
    "arabic": "ٱلْمُتَكَبِّرُ",
    "transliteration": "Al-Mutakabbir",
    "meaning": "The Supreme",
    "explanation": "The one who possesses supreme greatness and is above the attributes of His creation. He is the majestic one who rightfully asserts His superiority.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(10)}.mp3`
  ,
    "verse": {
      "citation": "59:23",
      "arabic": "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
      "english": "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allah above whatever they associate with Him"
    }
  },
  {
    "id": 11,
    "arabic": "ٱلْخَالِقُ",
    "transliteration": "Al-Khaliq",
    "meaning": "The Creator",
    "explanation": "The one who brings everything from non-existence into existence. He is the one who created everything in its perfect measure and form.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(11)}.mp3`
  ,
    "verse": {
      "citation": "6:102",
      "arabic": "ذَٰلِكُمُ ٱللَّهُ رَبُّكُمۡۖ لَآ إِلَٰهَ إِلَّا هُوَۖ خَٰلِقُ كُلِّ شَيۡءٖ فَٱعۡبُدُوهُۚ وَهُوَ عَلَىٰ كُلِّ شَيۡءٖ وَكِيلٞ",
      "english": "That is Allah, your Lord; there is no deity except Him, the Creator of all things, so worship Him. And He is Disposer of all things"
    }
  },
  {
    "id": 12,
    "arabic": "ٱلْبَارِئُ",
    "transliteration": "Al-Bari'",
    "meaning": "The Maker of Order",
    "explanation": "The one who creates from nothing and fashions with skill. He evolves and brings forth things in an orderly and beautiful manner.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(12)}.mp3`
  ,
    "verse": {
      "citation": "59:24",
      "arabic": "هُوَ ٱللَّهُ ٱلۡخَٰلِقُ ٱلۡبَارِئُ ٱلۡمُصَوِّرُۖ لَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ يُسَبِّحُ لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
      "english": "He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise"
    }
  },
  {
    "id": 13,
    "arabic": "ٱلْمُصَوِّرُ",
    "transliteration": "Al-Musawwir",
    "meaning": "The Shaper of Beauty",
    "explanation": "The one who shapes and fashions His creation in the most beautiful forms and appearances. He gives each created thing its unique form.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(13)}.mp3`
  ,
    "verse": {
      "citation": "59:24",
      "arabic": "هُوَ ٱللَّهُ ٱلۡخَٰلِقُ ٱلۡبَارِئُ ٱلۡمُصَوِّرُۖ لَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ يُسَبِّحُ لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
      "english": "He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise"
    }
  },
  {
    "id": 14,
    "arabic": "ٱلْغَفَّارُ",
    "transliteration": "Al-Ghaffar",
    "meaning": "The Forgiving",
    "explanation": "The one who is all-forgiving and conceals the sins of His servants. He forgives again and again, no matter the magnitude of the sin, when one repents.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(14)}.mp3`
  ,
    "verse": {
      "citation": "20:82",
      "arabic": "وَإِنِّي لَغَفَّارٞ لِّمَن تَابَ وَءَامَنَ وَعَمِلَ صَٰلِحٗا ثُمَّ ٱهۡتَدَىٰ",
      "english": "But indeed, I am the Perpetual Forgiver of whoever repents and believes and does righteousness and then continues in guidance"
    }
  },
  {
    "id": 15,
    "arabic": "ٱلْقَهَّارُ",
    "transliteration": "Al-Qahhar",
    "meaning": "The Subduer",
    "explanation": "The one who has absolute control over all of creation. He is the ever-dominant one before whom everything is powerless.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(15)}.mp3`
  ,
    "verse": {
      "citation": "13:16",
      "arabic": "قُلۡ مَن رَّبُّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ قُلِ ٱللَّهُۚ قُلۡ أَفَٱتَّخَذۡتُم مِّن دُونِهِۦٓ أَوۡلِيَآءَ لَا يَمۡلِكُونَ لِأَنفُسِهِمۡ نَفۡعٗا وَلَا ضَرّٗاۚ قُلۡ هَلۡ يَسۡتَوِي ٱلۡأَعۡمَىٰ وَٱلۡبَصِيرُ أَمۡ هَلۡ تَسۡتَوِي ٱلظُّلُمَٰتُ وَٱلنُّورُۗ أَمۡ جَعَلُواْ لِلَّهِ شُرَكَآءَ خَلَقُواْ كَخَلۡقِهِۦ فَتَشَٰبَهَ ٱلۡخَلۡقُ عَلَيۡهِمۡۚ قُلِ ٱللَّهُ خَٰلِقُ كُلِّ شَيۡءٖ وَهُوَ ٱلۡوَٰحِدُ ٱلۡقَهَّـٰرُ",
      "english": "Say, \"Who is Lord of the heavens and earth?\" Say, \"Allah.\" Say, \"Have you then taken besides Him allies not possessing [even] for themselves any benefit or any harm?\" Say, \"Is the blind equivalent to the seeing? Or is darkness equivalent to light? Or have they attributed to Allah partners who created like His creation so that the creation [of each] seemed similar to them?\" Say, \"Allah is the Creator of all things, and He is the One, the Prevailing"
    }
  },
  {
    "id": 16,
    "arabic": "ٱلْوَهَّابُ",
    "transliteration": "Al-Wahhab",
    "meaning": "The Giver of All",
    "explanation": "The one who gives freely and endlessly without expecting anything in return. His gifts and blessings are bestowed upon all of creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(16)}.mp3`
  ,
    "verse": {
      "citation": "3:8",
      "arabic": "رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ",
      "english": "[Who say], \"Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower"
    }
  },
  {
    "id": 17,
    "arabic": "ٱلْرَّزَّاقُ",
    "transliteration": "Ar-Razzaq",
    "meaning": "The Sustainer",
    "explanation": "The one who provides sustenance and livelihood for all of creation. He is the ultimate provider of all needs, both physical and spiritual.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(17)}.mp3`
  ,
    "verse": {
      "citation": "51:58",
      "arabic": "إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ ذُو ٱلۡقُوَّةِ ٱلۡمَتِينُ",
      "english": "Indeed, it is Allah who is the [continual] Provider, the firm possessor of strength"
    }
  },
  {
    "id": 18,
    "arabic": "ٱلْفَتَّاحُ",
    "transliteration": "Al-Fattah",
    "meaning": "The Opener",
    "explanation": "The one who opens the doors of mercy, success, and guidance for His servants. He is the judge who distinguishes between truth and falsehood.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(18)}.mp3`
  ,
    "verse": {
      "citation": "34:26",
      "arabic": "قُلۡ يَجۡمَعُ بَيۡنَنَا رَبُّنَا ثُمَّ يَفۡتَحُ بَيۡنَنَا بِٱلۡحَقِّ وَهُوَ ٱلۡفَتَّاحُ ٱلۡعَلِيمُ",
      "english": "Say, \"Our Lord will bring us together; then He will judge between us in truth. And He is the Knowing Judge"
    }
  },
  {
    "id": 19,
    "arabic": "ٱلْعَلِيْمُ",
    "transliteration": "Al-Alim",
    "meaning": "The Knower of All",
    "explanation": "The one whose knowledge is all-encompassing, knowing the past, present, and future, the manifest and the hidden, without any exception.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(19)}.mp3`
  ,
    "verse": {
      "citation": "2:158",
      "arabic": "۞إِنَّ ٱلصَّفَا وَٱلۡمَرۡوَةَ مِن شَعَآئِرِ ٱللَّهِۖ فَمَنۡ حَجَّ ٱلۡبَيۡتَ أَوِ ٱعۡتَمَرَ فَلَا جُنَاحَ عَلَيۡهِ أَن يَطَّوَّفَ بِهِمَاۚ وَمَن تَطَوَّعَ خَيۡرٗا فَإِنَّ ٱللَّهَ شَاكِرٌ عَلِيمٌ",
      "english": "Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing"
    }
  },
  {
    "id": 20,
    "arabic": "ٱلْقَابِضُ",
    "transliteration": "Al-Qabid",
    "meaning": "The Constrictor",
    "explanation": "The one who withholds sustenance and other provisions from whom He wills. This is done with perfect wisdom and justice, often as a test or to prevent harm.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(20)}.mp3`
  ,
    "verse": {
      "citation": "2:245",
      "arabic": "مَّن ذَا ٱلَّذِي يُقۡرِضُ ٱللَّهَ قَرۡضًا حَسَنٗا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضۡعَافٗا كَثِيرَةٗۚ وَٱللَّهُ يَقۡبِضُ وَيَبۡصُۜطُ وَإِلَيۡهِ تُرۡجَعُونَ",
      "english": "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who withholds and grants abundance, and to Him you will be returned"
    }
  },
  {
    "id": 21,
    "arabic": "ٱلْبَاسِطُ",
    "transliteration": "Al-Basit",
    "meaning": "The Reliever",
    "explanation": "The one who expands and grants abundant provision to whom He wills. He makes things spacious and provides relief and ease.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(21)}.mp3`
  ,
    "verse": {
      "citation": "2:245",
      "arabic": "مَّن ذَا ٱلَّذِي يُقۡرِضُ ٱللَّهَ قَرۡضًا حَسَنٗا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضۡعَافٗا كَثِيرَةٗۚ وَٱللَّهُ يَقۡبِضُ وَيَبۡصُۜطُ وَإِلَيۡهِ تُرۡجَعُونَ",
      "english": "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who withholds and grants abundance, and to Him you will be returned"
    }
  },
  {
    "id": 22,
    "arabic": "ٱلْخَافِضُ",
    "transliteration": "Al-Khafid",
    "meaning": "The Abaser",
    "explanation": "The one who lowers the arrogant and the tyrants. He humbles those who are proud and rebel against His commands.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(22)}.mp3`
  ,
    "verse": {
      "citation": "95:5",
      "arabic": "ثُمَّ رَدَدۡنَٰهُ أَسۡفَلَ سَٰفِلِينَ",
      "english": "Then We return him to the lowest of the low"
    }
  },
  {
    "id": 23,
    "arabic": "ٱلْرَّافِعُ",
    "transliteration": "Ar-Rafi'",
    "meaning": "The Exalter",
    "explanation": "The one who raises the believers in rank and honor. He elevates the righteous and gives them status in this life and the hereafter.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(23)}.mp3`
  ,
    "verse": {
      "citation": "58:11",
      "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِذَا قِيلَ لَكُمۡ تَفَسَّحُواْ فِي ٱلۡمَجَٰلِسِ فَٱفۡسَحُواْ يَفۡسَحِ ٱللَّهُ لَكُمۡۖ وَإِذَا قِيلَ ٱنشُزُواْ فَٱنشُزُواْ يَرۡفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُواْ مِنكُمۡ وَٱلَّذِينَ أُوتُواْ ٱلۡعِلۡمَ دَرَجَٰتٖۚ وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ",
      "english": "O you who have believed, when you are told, \"Space yourselves\" in assemblies, then make space; Allah will make space for you. And when you are told, \"Arise,\" then arise; Allah will raise those who have believed among you and those who were given knowledge, by degrees. And Allah is Acquainted with what you do"
    }
  },
  {
    "id": 24,
    "arabic": "ٱلْمُعِزُّ",
    "transliteration": "Al-Mu'izz",
    "meaning": "The Bestower of Honors",
    "explanation": "The one who gives honor and dignity to whom He wills. True honor comes only from Him and is granted to those who are obedient to Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(24)}.mp3`
  ,
    "verse": {
      "citation": "3:26",
      "arabic": "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ",
      "english": "Say, \"O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent"
    }
  },
  {
    "id": 25,
    "arabic": "ٱلْمُذِلُّ",
    "transliteration": "Al-Mudhill",
    "meaning": "The Humiliator",
    "explanation": "The one who dishonors or brings disgrace upon whom He wills. This is a consequence for those who choose arrogance and disobedience.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(25)}.mp3`
  ,
    "verse": {
      "citation": "3:26",
      "arabic": "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ",
      "english": "Say, \"O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent"
    }
  },
  {
    "id": 26,
    "arabic": "ٱلْسَّمِيْعُ",
    "transliteration": "As-Sami'",
    "meaning": "The Hearer of All",
    "explanation": "The one who hears all sounds, thoughts, and secrets, no matter how faint or hidden. His hearing is absolute and encompasses everything.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(26)}.mp3`
  ,
    "verse": {
      "citation": "2:127",
      "arabic": "وَإِذۡ يَرۡفَعُ إِبۡرَٰهِـۧمُ ٱلۡقَوَاعِدَ مِنَ ٱلۡبَيۡتِ وَإِسۡمَٰعِيلُ رَبَّنَا تَقَبَّلۡ مِنَّآۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
      "english": "And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], \"Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing"
    }
  },
  {
    "id": 27,
    "arabic": "ٱلْبَصِيْرُ",
    "transliteration": "Al-Basir",
    "meaning": "The Seer of All",
    "explanation": "The one who sees all things, whether they are apparent or concealed. His sight is perfect and nothing escapes His perception.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(27)}.mp3`
  ,
    "verse": {
      "citation": "4:58",
      "arabic": "۞إِنَّ ٱللَّهَ يَأۡمُرُكُمۡ أَن تُؤَدُّواْ ٱلۡأَمَٰنَٰتِ إِلَىٰٓ أَهۡلِهَا وَإِذَا حَكَمۡتُم بَيۡنَ ٱلنَّاسِ أَن تَحۡكُمُواْ بِٱلۡعَدۡلِۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓۗ إِنَّ ٱللَّهَ كَانَ سَمِيعَۢا بَصِيرٗا",
      "english": "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice. Excellent is that which Allah instructs you. Indeed, Allah is ever Hearing and Seeing"
    }
  },
  {
    "id": 28,
    "arabic": "ٱلْحَكَمُ",
    "transliteration": "Al-Hakam",
    "meaning": "The Judge",
    "explanation": "The one who is the ultimate and most just judge. His decrees are perfect, wise, and cannot be overturned. He provides the final ruling on all matters.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(28)}.mp3`
  ,
    "verse": {
      "citation": "22:69",
      "arabic": "ٱللَّهُ يَحۡكُمُ بَيۡنَكُمۡ يَوۡمَ ٱلۡقِيَٰمَةِ فِيمَا كُنتُمۡ فِيهِ تَخۡتَلِفُونَ",
      "english": "Allah will judge between you on the Day of Resurrection concerning that over which you used to differ"
    }
  },
  {
    "id": 29,
    "arabic": "ٱلْعَدْلُ",
    "transliteration": "Al-Adl",
    "meaning": "The Just",
    "explanation": "The one who is the embodiment of absolute justice. His actions are free from any bias or inequity. He is perfectly fair in all His dealings.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(29)}.mp3`
  ,
    "verse": {
      "citation": "6:115",
      "arabic": "وَتَمَّتۡ كَلِمَتُ رَبِّكَ صِدۡقٗا وَعَدۡلٗاۚ لَّا مُبَدِّلَ لِكَلِمَٰتِهِۦۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
      "english": "And the word of your Lord has been fulfilled in truth and in justice. None can alter His words, and He is the Hearing, the Knowing"
    }
  },
  {
    "id": 30,
    "arabic": "ٱلْلَّطِيْفُ",
    "transliteration": "Al-Latif",
    "meaning": "The Subtle One",
    "explanation": "The one who is gentle, kind, and knows the most subtle and hidden matters. His grace and favor reach His servants in ways they may not even perceive.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(30)}.mp3`
  ,
    "verse": {
      "citation": "6:103",
      "arabic": "لَّا تُدۡرِكُهُ ٱلۡأَبۡصَٰرُ وَهُوَ يُدۡرِكُ ٱلۡأَبۡصَٰرَۖ وَهُوَ ٱللَّطِيفُ ٱلۡخَبِيرُ",
      "english": "Vision perceives Him not, but He perceives [all] vision; and He is the Subtle, the Acquainted"
    }
  },
  {
    "id": 31,
    "arabic": "ٱلْخَبِيْرُ",
    "transliteration": "Al-Khabir",
    "meaning": "The All-Aware",
    "explanation": "The one who has complete knowledge of the innermost reality of all things. He is aware of the true nature and secrets of all of creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(31)}.mp3`
  ,
    "verse": {
      "citation": "6:18",
      "arabic": "وَهُوَ ٱلۡقَاهِرُ فَوۡقَ عِبَادِهِۦۚ وَهُوَ ٱلۡحَكِيمُ ٱلۡخَبِيرُ",
      "english": "And He is the subjugator over His servants. And He is the Wise, the Acquainted [with all]"
    }
  },
  {
    "id": 32,
    "arabic": "ٱلْحَلِيْمُ",
    "transliteration": "Al-Halim",
    "meaning": "The Forbearing",
    "explanation": "The one who is forbearing and clement. He is not quick to punish the disobedient, giving them time to repent. He is gentle and patient with His creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(32)}.mp3`
  ,
    "verse": {
      "citation": "2:235",
      "arabic": "وَلَا جُنَاحَ عَلَيۡكُمۡ فِيمَا عَرَّضۡتُم بِهِۦ مِنۡ خِطۡبَةِ ٱلنِّسَآءِ أَوۡ أَكۡنَنتُمۡ فِيٓ أَنفُسِكُمۡۚ عَلِمَ ٱللَّهُ أَنَّكُمۡ سَتَذۡكُرُونَهُنَّ وَلَٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّا إِلَّآ أَن تَقُولُواْ قَوۡلٗا مَّعۡرُوفٗاۚ وَلَا تَعۡزِمُواْ عُقۡدَةَ ٱلنِّكَاحِ حَتَّىٰ يَبۡلُغَ ٱلۡكِتَٰبُ أَجَلَهُۥۚ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ يَعۡلَمُ مَا فِيٓ أَنفُسِكُمۡ فَٱحۡذَرُوهُۚ وَٱعۡلَمُوٓاْ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٞ",
      "english": "There is no blame upon you for that to which you [indirectly] allude concerning a proposal to women or for what you conceal within yourselves. Allah knows that you will have them in mind. But do not promise them secretly except for saying a proper saying. And do not determine to undertake a marriage contract until the decreed period reaches its end. And know that Allah knows what is within yourselves, so beware of Him. And know that Allah is Forgiving and Forbearing"
    }
  },
  {
    "id": 33,
    "arabic": "ٱلْعَظِيْمُ",
    "transliteration": "Al-Azim",
    "meaning": "The Magnificent",
    "explanation": "The one of ultimate greatness in His essence, attributes, and actions. His magnificence is beyond human comprehension.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(33)}.mp3`
  ,
    "verse": {
      "citation": "2:255",
      "arabic": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
      "english": "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great"
    }
  },
  {
    "id": 34,
    "arabic": "ٱلْغَفُوْرُ",
    "transliteration": "Al-Ghafur",
    "meaning": "The Great Forgiver",
    "explanation": "The one who forgives abundantly. He is the one who completely covers and pardons sins, no matter how many, for those who seek His forgiveness.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(34)}.mp3`
  ,
    "verse": {
      "citation": "2:173",
      "arabic": "إِنَّمَا حَرَّمَ عَلَيۡكُمُ ٱلۡمَيۡتَةَ وَٱلدَّمَ وَلَحۡمَ ٱلۡخِنزِيرِ وَمَآ أُهِلَّ بِهِۦ لِغَيۡرِ ٱللَّهِۖ فَمَنِ ٱضۡطُرَّ غَيۡرَ بَاغٖ وَلَا عَادٖ فَلَآ إِثۡمَ عَلَيۡهِۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٌ",
      "english": "He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah. But whoever is forced [by necessity], neither desiring [it] nor transgressing [its limit], there is no sin upon him. Indeed, Allah is Forgiving and Merciful"
    }
  },
  {
    "id": 35,
    "arabic": "ٱلْشَّكُوْرُ",
    "transliteration": "Ash-Shakur",
    "meaning": "The Rewarder of Thankfulness",
    "explanation": "The one who is most appreciative of good deeds and obedience. He rewards even the smallest act of goodness with immense and multiple rewards.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(35)}.mp3`
  ,
    "verse": {
      "citation": "35:30",
      "arabic": "لِيُوَفِّيَهُمۡ أُجُورَهُمۡ وَيَزِيدَهُم مِّن فَضۡلِهِۦٓۚ إِنَّهُۥ غَفُورٞ شَكُورٞ",
      "english": "That He may give them in full their rewards and increase for them of His bounty. Indeed, He is Forgiving and Appreciative"
    }
  },
  {
    "id": 36,
    "arabic": "ٱلْعَلِيُّ",
    "transliteration": "Al-Ali",
    "meaning": "The Highest",
    "explanation": "The one who is exalted above all of creation. His highness is absolute in status, power, and essence. Nothing is above Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(36)}.mp3`
  ,
    "verse": {
      "citation": "4:34",
      "arabic": "ٱلرِّجَالُ قَوَّـٰمُونَ عَلَى ٱلنِّسَآءِ بِمَا فَضَّلَ ٱللَّهُ بَعۡضَهُمۡ عَلَىٰ بَعۡضٖ وَبِمَآ أَنفَقُواْ مِنۡ أَمۡوَٰلِهِمۡۚ فَٱلصَّـٰلِحَٰتُ قَٰنِتَٰتٌ حَٰفِظَٰتٞ لِّلۡغَيۡبِ بِمَا حَفِظَ ٱللَّهُۚ وَٱلَّـٰتِي تَخَافُونَ نُشُوزَهُنَّ فَعِظُوهُنَّ وَٱهۡجُرُوهُنَّ فِي ٱلۡمَضَاجِعِ وَٱضۡرِبُوهُنَّۖ فَإِنۡ أَطَعۡنَكُمۡ فَلَا تَبۡغُواْ عَلَيۡهِنَّ سَبِيلًاۗ إِنَّ ٱللَّهَ كَانَ عَلِيّٗا كَبِيرٗا",
      "english": "Men are in charge of women by [right of] what Allah has given one over the other and what they spend [for maintenance] from their wealth. So righteous women are devoutly obedient, guarding in [the husband's] absence what Allah would have them guard. But those [wives] from whom you fear arrogance - [first] advise them; [then if they persist], forsake them in bed; and [finally], strike them. But if they obey you [once more], seek no means against them. Indeed, Allah is ever Exalted and Grand"
    }
  },
  {
    "id": 37,
    "arabic": "ٱلْكَبِيْرُ",
    "transliteration": "Al-Kabir",
    "meaning": "The Greatest",
    "explanation": "The one who is greater than everything else. His greatness is absolute and He is exalted in His essence and attributes.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(37)}.mp3`
  ,
    "verse": {
      "citation": "13:9",
      "arabic": "عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡكَبِيرُ ٱلۡمُتَعَالِ",
      "english": "[He is] Knower of the unseen and the witnessed, the Grand, the Exalted"
    }
  },
  {
    "id": 38,
    "arabic": "ٱلْحَفِيْظُ",
    "transliteration": "Al-Hafiz",
    "meaning": "The Preserver",
    "explanation": "The one who protects and preserves all that exists. He guards His servants from harm and preserves their deeds.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(38)}.mp3`
  ,
    "verse": {
      "citation": "11:57",
      "arabic": "فَإِن تَوَلَّوۡاْ فَقَدۡ أَبۡلَغۡتُكُم مَّآ أُرۡسِلۡتُ بِهِۦٓ إِلَيۡكُمۡۚ وَيَسۡتَخۡلِفُ رَبِّي قَوۡمًا غَيۡرَكُمۡ وَلَا تَضُرُّونَهُۥ شَيۡـًٔاۚ إِنَّ رَبِّي عَلَىٰ كُلِّ شَيۡءٍ حَفِيظٞ",
      "english": "But if they turn away, [say], \"I have already conveyed that with which I was sent to you. My Lord will give succession to a people other than you, and you will not harm Him at all. Indeed my Lord is, over all things, Guardian"
    }
  },
  {
    "id": 39,
    "arabic": "ٱلْمُقِيْتُ",
    "transliteration": "Al-Muqit",
    "meaning": "The Nourisher",
    "explanation": "The one who provides nourishment and sustenance to all of creation, maintaining their lives and abilities.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(39)}.mp3`
  ,
    "verse": {
      "citation": "4:85",
      "arabic": "مَّن يَشۡفَعۡ شَفَٰعَةً حَسَنَةٗ يَكُن لَّهُۥ نَصِيبٞ مِّنۡهَاۖ وَمَن يَشۡفَعۡ شَفَٰعَةٗ سَيِّئَةٗ يَكُن لَّهُۥ كِفۡلٞ مِّنۡهَاۗ وَكَانَ ٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ مُّقِيتٗا",
      "english": "Whoever intercedes for a good cause will have a reward therefrom; and whoever intercedes for an evil cause will have a burden therefrom. And ever is Allah, over all things, a Keeper"
    }
  },
  {
    "id": 40,
    "arabic": "ٱلْحَسِيْبُ",
    "transliteration": "Al-Hasib",
    "meaning": "The Accounter",
    "explanation": "The one who is sufficient for all and takes account of every deed. He is the reckoner who will hold everyone accountable on the Day of Judgment.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(40)}.mp3`
  ,
    "verse": {
      "citation": "4:6",
      "arabic": "وَٱبۡتَلُواْ ٱلۡيَتَٰمَىٰ حَتَّىٰٓ إِذَا بَلَغُواْ ٱلنِّكَاحَ فَإِنۡ ءَانَسۡتُم مِّنۡهُمۡ رُشۡدٗا فَٱدۡفَعُوٓاْ إِلَيۡهِمۡ أَمۡوَٰلَهُمۡۖ وَلَا تَأۡكُلُوهَآ إِسۡرَافٗا وَبِدَارًا أَن يَكۡبَرُواْۚ وَمَن كَانَ غَنِيّٗا فَلۡيَسۡتَعۡفِفۡۖ وَمَن كَانَ فَقِيرٗا فَلۡيَأۡكُلۡ بِٱلۡمَعۡرُوفِۚ فَإِذَا دَفَعۡتُمۡ إِلَيۡهِمۡ أَمۡوَٰلَهُمۡ فَأَشۡهِدُواْ عَلَيۡهِمۡۚ وَكَفَىٰ بِٱللَّهِ حَسِيبٗا",
      "english": "And test the orphans [in their abilities] until they reach marriageable age. Then if you perceive in them sound judgement, release their property to them. And do not consume it excessively and quickly, [anticipating] that they will grow up. And whoever, [when acting as guardian], is self-sufficient should refrain [from taking a fee]; and whoever is poor - let him take according to what is acceptable. Then when you release their property to them, bring witnesses upon them. And sufficient is Allah as Accountant"
    }
  },
  {
    "id": 41,
    "arabic": "ٱلْجَلِيْلُ",
    "transliteration": "Al-Jalil",
    "meaning": "The Majestic",
    "explanation": "The one who possesses the attributes of majesty, greatness, and glory. He is revered and honored due to His magnificent qualities.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(41)}.mp3`
  ,
    "verse": {
      "citation": "55:27",
      "arabic": "وَيَبۡقَىٰ وَجۡهُ رَبِّكَ ذُو ٱلۡجَلَٰلِ وَٱلۡإِكۡرَامِ",
      "english": "And there will remain the Face of your Lord, Owner of Majesty and Honor"
    }
  },
  {
    "id": 42,
    "arabic": "ٱلْكَرِيْمُ",
    "transliteration": "Al-Karim",
    "meaning": "The Generous",
    "explanation": "The one who is the most generous and benevolent. His generosity is limitless, and He gives without being asked and forgives without admonishing.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(42)}.mp3`
  ,
    "verse": {
      "citation": "27:40",
      "arabic": "قَالَ ٱلَّذِي عِندَهُۥ عِلۡمٞ مِّنَ ٱلۡكِتَٰبِ أَنَا۠ ءَاتِيكَ بِهِۦ قَبۡلَ أَن يَرۡتَدَّ إِلَيۡكَ طَرۡفُكَۚ فَلَمَّا رَءَاهُ مُسۡتَقِرًّا عِندَهُۥ قَالَ هَٰذَا مِن فَضۡلِ رَبِّي لِيَبۡلُوَنِيٓ ءَأَشۡكُرُ أَمۡ أَكۡفُرُۖ وَمَن شَكَرَ فَإِنَّمَا يَشۡكُرُ لِنَفۡسِهِۦۖ وَمَن كَفَرَ فَإِنَّ رَبِّي غَنِيّٞ كَرِيمٞ",
      "english": "Said one who had knowledge from the Scripture, \"I will bring it to you before your glance returns to you.\" And when [Solomon] saw it placed before him, he said, \"This is from the favor of my Lord to test me whether I will be grateful or ungrateful. And whoever is grateful - his gratitude is only for [the benefit of] himself. And whoever is ungrateful - then indeed, my Lord is Free of need and Generous"
    }
  },
  {
    "id": 43,
    "arabic": "ٱلْرَّقِيْبُ",
    "transliteration": "Ar-Raqib",
    "meaning": "The Watchful One",
    "explanation": "The one who observes all beings and from whom nothing is hidden. He is ever-watchful over the actions and inner thoughts of His creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(43)}.mp3`
  ,
    "verse": {
      "citation": "4:1",
      "arabic": "يَـٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُواْ رَبَّكُمُ ٱلَّذِي خَلَقَكُم مِّن نَّفۡسٖ وَٰحِدَةٖ وَخَلَقَ مِنۡهَا زَوۡجَهَا وَبَثَّ مِنۡهُمَا رِجَالٗا كَثِيرٗا وَنِسَآءٗۚ وَٱتَّقُواْ ٱللَّهَ ٱلَّذِي تَسَآءَلُونَ بِهِۦ وَٱلۡأَرۡحَامَۚ إِنَّ ٱللَّهَ كَانَ عَلَيۡكُمۡ رَقِيبٗا",
      "english": "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer"
    }
  },
  {
    "id": 44,
    "arabic": "ٱلْمُجِيْبُ",
    "transliteration": "Al-Mujib",
    "meaning": "The Responder to Prayer",
    "explanation": "The one who answers the supplications of those who call upon Him. He responds to the needs and prayers of His servants.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(44)}.mp3`
  ,
    "verse": {
      "citation": "11:61",
      "arabic": "۞وَإِلَىٰ ثَمُودَ أَخَاهُمۡ صَٰلِحٗاۚ قَالَ يَٰقَوۡمِ ٱعۡبُدُواْ ٱللَّهَ مَا لَكُم مِّنۡ إِلَٰهٍ غَيۡرُهُۥۖ هُوَ أَنشَأَكُم مِّنَ ٱلۡأَرۡضِ وَٱسۡتَعۡمَرَكُمۡ فِيهَا فَٱسۡتَغۡفِرُوهُ ثُمَّ تُوبُوٓاْ إِلَيۡهِۚ إِنَّ رَبِّي قَرِيبٞ مُّجِيبٞ",
      "english": "And to Thamud [We sent] their brother Salih. He said, \"O my people, worship Allah; you have no deity other than Him. He has produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him. Indeed, my Lord is near and responsive"
    }
  },
  {
    "id": 45,
    "arabic": "ٱلْوَاسِعُ",
    "transliteration": "Al-Wasi'",
    "meaning": "The All-Comprehending",
    "explanation": "The one whose capacity, knowledge, and mercy are boundless and all-encompassing. His attributes are vast and without limits.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(45)}.mp3`
  ,
    "verse": {
      "citation": "2:268",
      "arabic": "ٱلشَّيۡطَٰنُ يَعِدُكُمُ ٱلۡفَقۡرَ وَيَأۡمُرُكُم بِٱلۡفَحۡشَآءِۖ وَٱللَّهُ يَعِدُكُم مَّغۡفِرَةٗ مِّنۡهُ وَفَضۡلٗاۗ وَٱللَّهُ وَٰسِعٌ عَلِيمٞ",
      "english": "Satan threatens you with poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty. And Allah is all-Encompassing and Knowing"
    }
  },
  {
    "id": 46,
    "arabic": "ٱلْحَكِيْمُ",
    "transliteration": "Al-Hakim",
    "meaning": "The Perfectly Wise",
    "explanation": "The one who is perfect in His wisdom. All His commands, actions, and decrees are based on ultimate wisdom and purpose.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(46)}.mp3`
  ,
    "verse": {
      "citation": "31:27",
      "arabic": "وَلَوۡ أَنَّمَا فِي ٱلۡأَرۡضِ مِن شَجَرَةٍ أَقۡلَٰمٞ وَٱلۡبَحۡرُ يَمُدُّهُۥ مِنۢ بَعۡدِهِۦ سَبۡعَةُ أَبۡحُرٖ مَّا نَفِدَتۡ كَلِمَٰتُ ٱللَّهِۚ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٞ",
      "english": "And if whatever trees upon the earth were pens and the sea [was ink], replenished thereafter by seven [more] seas, the words of Allah would not be exhausted. Indeed, Allah is Exalted in Might and Wise"
    }
  },
  {
    "id": 47,
    "arabic": "ٱلْوَدُوْدُ",
    "transliteration": "Al-Wadud",
    "meaning": "The Loving One",
    "explanation": "The one who is the source of all love and affection. He loves His righteous servants and is loved by them.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(47)}.mp3`
  ,
    "verse": {
      "citation": "11:90",
      "arabic": "وَٱسۡتَغۡفِرُواْ رَبَّكُمۡ ثُمَّ تُوبُوٓاْ إِلَيۡهِۚ إِنَّ رَبِّي رَحِيمٞ وَدُودٞ",
      "english": "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate"
    }
  },
  {
    "id": 48,
    "arabic": "ٱلْمَجِيْدُ",
    "transliteration": "Al-Majid",
    "meaning": "The Glorious",
    "explanation": "The one who is most glorious, dignified, and noble. His glory is manifest in His perfect actions and magnificent attributes.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(48)}.mp3`
  ,
    "verse": {
      "citation": "11:73",
      "arabic": "قَالُوٓاْ أَتَعۡجَبِينَ مِنۡ أَمۡرِ ٱللَّهِۖ رَحۡمَتُ ٱللَّهِ وَبَرَكَٰتُهُۥ عَلَيۡكُمۡ أَهۡلَ ٱلۡبَيۡتِۚ إِنَّهُۥ حَمِيدٞ مَّجِيدٞ",
      "english": "They said, \"Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable"
    }
  },
  {
    "id": 49,
    "arabic": "ٱلْبَاعِثُ",
    "transliteration": "Al-Ba'ith",
    "meaning": "The Resurrector",
    "explanation": "The one who will resurrect all of mankind on the Day of Judgment. He gives life to the dead and brings them forth for accountability.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(49)}.mp3`
  ,
    "verse": {
      "citation": "22:7",
      "arabic": "وَأَنَّ ٱلسَّاعَةَ ءَاتِيَةٞ لَّا رَيۡبَ فِيهَا وَأَنَّ ٱللَّهَ يَبۡعَثُ مَن فِي ٱلۡقُبُورِ",
      "english": "And [that they may know] that the Hour is coming - no doubt about it - and that Allah will resurrect those in the graves"
    }
  },
  {
    "id": 50,
    "arabic": "ٱلْشَّهِيْدُ",
    "transliteration": "Ash-Shahid",
    "meaning": "The Witness",
    "explanation": "The one who is the ultimate witness to all things. Nothing is hidden from Him, and He has knowledge of all actions and events.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(50)}.mp3`
  ,
    "verse": {
      "citation": "4:166",
      "arabic": "لَّـٰكِنِ ٱللَّهُ يَشۡهَدُ بِمَآ أَنزَلَ إِلَيۡكَۖ أَنزَلَهُۥ بِعِلۡمِهِۦۖ وَٱلۡمَلَـٰٓئِكَةُ يَشۡهَدُونَۚ وَكَفَىٰ بِٱللَّهِ شَهِيدًا",
      "english": "But Allah bears witness to that which He has revealed to you. He has sent it down with His knowledge, and the angels bear witness [as well]. And sufficient is Allah as Witness"
    }
  },
  {
    "id": 51,
    "arabic": "ٱلْحَقُّ",
    "transliteration": "Al-Haqq",
    "meaning": "The Truth",
    "explanation": "The one who is the ultimate reality and truth. His existence is necessary and undeniable, and He is the source of all truth.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(51)}.mp3`
  ,
    "verse": {
      "citation": "6:62",
      "arabic": "ثُمَّ رُدُّوٓاْ إِلَى ٱللَّهِ مَوۡلَىٰهُمُ ٱلۡحَقِّۚ أَلَا لَهُ ٱلۡحُكۡمُ وَهُوَ أَسۡرَعُ ٱلۡحَٰسِبِينَ",
      "english": "Then they His servants are returned to Allah, their true Lord. Unquestionably, His is the judgement, and He is the swiftest of accountants"
    }
  },
  {
    "id": 52,
    "arabic": "ٱلْوَكِيْلُ",
    "transliteration": "Al-Wakil",
    "meaning": "The Trustee",
    "explanation": "The one who is the most reliable and trustworthy disposer of affairs. He is the ultimate guardian upon whom we can place our complete trust.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(52)}.mp3`
  ,
    "verse": {
      "citation": "3:173",
      "arabic": "ٱلَّذِينَ قَالَ لَهُمُ ٱلنَّاسُ إِنَّ ٱلنَّاسَ قَدۡ جَمَعُواْ لَكُمۡ فَٱخۡشَوۡهُمۡ فَزَادَهُمۡ إِيمَٰنٗا وَقَالُواْ حَسۡبُنَا ٱللَّهُ وَنِعۡمَ ٱلۡوَكِيلُ",
      "english": "Those to whom hypocrites said, \"Indeed, the people have gathered against you, so fear them.\" But it [merely] increased them in faith, and they said, \"Sufficient for us is Allah, and [He is] the best Disposer of affairs"
    }
  },
  {
    "id": 53,
    "arabic": "ٱلْقَوِيُّ",
    "transliteration": "Al-Qawiyy",
    "meaning": "The Possessor of All Strength",
    "explanation": "The one who possesses perfect and absolute strength. His power is limitless and He is never afflicted by weakness.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(53)}.mp3`
  ,
    "verse": {
      "citation": "22:40",
      "arabic": "ٱلَّذِينَ أُخۡرِجُواْ مِن دِيَٰرِهِم بِغَيۡرِ حَقٍّ إِلَّآ أَن يَقُولُواْ رَبُّنَا ٱللَّهُۗ وَلَوۡلَا دَفۡعُ ٱللَّهِ ٱلنَّاسَ بَعۡضَهُم بِبَعۡضٖ لَّهُدِّمَتۡ صَوَٰمِعُ وَبِيَعٞ وَصَلَوَٰتٞ وَمَسَٰجِدُ يُذۡكَرُ فِيهَا ٱسۡمُ ٱللَّهِ كَثِيرٗاۗ وَلَيَنصُرَنَّ ٱللَّهُ مَن يَنصُرُهُۥٓۚ إِنَّ ٱللَّهَ لَقَوِيٌّ عَزِيزٌ",
      "english": "[They are] those who have been evicted from their homes without right - only because they say, \"Our Lord is Allah.\" And were it not that Allah checks the people, some by means of others, there would have been demolished monasteries, churches, synagogues, and mosques in which the name of Allah is much mentioned. And Allah will surely support those who support Him. Indeed, Allah is Powerful and Exalted in Might"
    }
  },
  {
    "id": 54,
    "arabic": "ٱلْمَتِيْنُ",
    "transliteration": "Al-Matin",
    "meaning": "The Firm",
    "explanation": "The one who is firm, resolute, and of unshakable strength. His power is steadfast and cannot be challenged.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(54)}.mp3`
  ,
    "verse": {
      "citation": "51:58",
      "arabic": "إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ ذُو ٱلۡقُوَّةِ ٱلۡمَتِينُ",
      "english": "Indeed, it is Allah who is the [continual] Provider, the firm possessor of strength"
    }
  },
  {
    "id": 55,
    "arabic": "ٱلْوَلِيُّ",
    "transliteration": "Al-Waliyy",
    "meaning": "The Protecting Friend",
    "explanation": "The one who is the friend, protector, and supporter of the believers. He lovingly guards and helps those who are devoted to Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(55)}.mp3`
  ,
    "verse": {
      "citation": "4:45",
      "arabic": "وَٱللَّهُ أَعۡلَمُ بِأَعۡدَآئِكُمۡۚ وَكَفَىٰ بِٱللَّهِ وَلِيّٗا وَكَفَىٰ بِٱللَّهِ نَصِيرٗا",
      "english": "And Allah is most knowing of your enemies; and sufficient is Allah as an ally, and sufficient is Allah as a helper"
    }
  },
  {
    "id": 56,
    "arabic": "ٱلْحَمِيْدُ",
    "transliteration": "Al-Hamid",
    "meaning": "The Praiseworthy",
    "explanation": "The one who is worthy of all praise and commendation. He is praised in all circumstances, for His perfection and His blessings.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(56)}.mp3`
  ,
    "verse": {
      "citation": "14:8",
      "arabic": "وَقَالَ مُوسَىٰٓ إِن تَكۡفُرُوٓاْ أَنتُمۡ وَمَن فِي ٱلۡأَرۡضِ جَمِيعٗا فَإِنَّ ٱللَّهَ لَغَنِيٌّ حَمِيدٌ",
      "english": "And Moses said, \"If you should disbelieve, you and whoever is on the earth entirely - indeed, Allah is Free of need and Praiseworthy"
    }
  },
  {
    "id": 57,
    "arabic": "ٱلْمُحْصِيُ",
    "transliteration": "Al-Muhsi",
    "meaning": "The Appraiser",
    "explanation": "The one who knows and keeps count of all things. Nothing, not even the smallest atom, escapes His knowledge and enumeration.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(57)}.mp3`
  ,
    "verse": {
      "citation": "72:28",
      "arabic": "لِّيَعۡلَمَ أَن قَدۡ أَبۡلَغُواْ رِسَٰلَٰتِ رَبِّهِمۡ وَأَحَاطَ بِمَا لَدَيۡهِمۡ وَأَحۡصَىٰ كُلَّ شَيۡءٍ عَدَدَۢا",
      "english": "That he may know that they have conveyed the messages of their Lord; and He has encompassed whatever is with them and has enumerated all things in number"
    }
  },
  {
    "id": 58,
    "arabic": "ٱلْمُبْدِئُ",
    "transliteration": "Al-Mubdi'",
    "meaning": "The Originator",
    "explanation": "The one who initiates all creation without any preceding example. He is the originator of the entire universe.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(58)}.mp3`
  ,
    "verse": {
      "citation": "10:34",
      "arabic": "قُلۡ هَلۡ مِن شُرَكَآئِكُم مَّن يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۚ قُلِ ٱللَّهُ يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۖ فَأَنَّىٰ تُؤۡفَكُونَ",
      "english": "Say, \"Are there of your 'partners' any who begins creation and then repeats it?\" Say, \"Allah begins creation and then repeats it, so how are you deluded"
    }
  },
  {
    "id": 59,
    "arabic": "ٱلْمُعِيْدُ",
    "transliteration": "Al-Mu'id",
    "meaning": "The Restorer",
    "explanation": "The one who will restore and bring back all of creation after they have perished. He repeats the process of creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(59)}.mp3`
  ,
    "verse": {
      "citation": "10:34",
      "arabic": "قُلۡ هَلۡ مِن شُرَكَآئِكُم مَّن يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۚ قُلِ ٱللَّهُ يَبۡدَؤُاْ ٱلۡخَلۡقَ ثُمَّ يُعِيدُهُۥۖ فَأَنَّىٰ تُؤۡفَكُونَ",
      "english": "Say, \"Are there of your 'partners' any who begins creation and then repeats it?\" Say, \"Allah begins creation and then repeats it, so how are you deluded"
    }
  },
  {
    "id": 60,
    "arabic": "ٱلْمُحْيِى",
    "transliteration": "Al-Muhyi",
    "meaning": "The Giver of Life",
    "explanation": "The one who gives life to whom He wills. He is the source of all life, both physical and spiritual.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(60)}.mp3`
  ,
    "verse": {
      "citation": "7:158",
      "arabic": "قُلۡ يَـٰٓأَيُّهَا ٱلنَّاسُ إِنِّي رَسُولُ ٱللَّهِ إِلَيۡكُمۡ جَمِيعًا ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ لَآ إِلَٰهَ إِلَّا هُوَ يُحۡيِۦ وَيُمِيتُۖ فَـَٔامِنُواْ بِٱللَّهِ وَرَسُولِهِ ٱلنَّبِيِّ ٱلۡأُمِّيِّ ٱلَّذِي يُؤۡمِنُ بِٱللَّهِ وَكَلِمَٰتِهِۦ وَٱتَّبِعُوهُ لَعَلَّكُمۡ تَهۡتَدُونَ",
      "english": "Say, [O Muhammad], \"O mankind, indeed I am the Messenger of Allah to you all, [from Him] to whom belongs the dominion of the heavens and the earth. There is no deity except Him; He gives life and causes death.\" So believe in Allah and His Messenger, the unlettered prophet, who believes in Allah and His words, and follow him that you may be guided"
    }
  },
  {
    "id": 61,
    "arabic": "ٱلْمُمِيْتُ",
    "transliteration": "Al-Mumit",
    "meaning": "The Taker of Life",
    "explanation": "The one who ordains death for every living creature at its appointed time. He is the bringer of death.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(61)}.mp3`
  ,
    "verse": {
      "citation": "3:156",
      "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا تَكُونُواْ كَٱلَّذِينَ كَفَرُواْ وَقَالُواْ لِإِخۡوَٰنِهِمۡ إِذَا ضَرَبُواْ فِي ٱلۡأَرۡضِ أَوۡ كَانُواْ غُزّٗى لَّوۡ كَانُواْ عِندَنَا مَا مَاتُواْ وَمَا قُتِلُواْ لِيَجۡعَلَ ٱللَّهُ ذَٰلِكَ حَسۡرَةٗ فِي قُلُوبِهِمۡۗ وَٱللَّهُ يُحۡيِۦ وَيُمِيتُۗ وَٱللَّهُ بِمَا تَعۡمَلُونَ بَصِيرٞ",
      "english": "O you who have believed, do not be like those who disbelieved and said about their brothers when they traveled through the land or went out to fight, \"If they had been with us, they would not have died or have been killed,\" so Allah makes that [misconception] a regret within their hearts. And it is Allah who gives life and causes death, and Allah is Seeing of what you do"
    }
  },
  {
    "id": 62,
    "arabic": "ٱلْحَيُّ",
    "transliteration": "Al-Hayy",
    "meaning": "The Ever-Living",
    "explanation": "The one who is eternally alive and whose life is perfect and unchanging. He is not subject to death or decay.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(62)}.mp3`
  ,
    "verse": {
      "citation": "2:255",
      "arabic": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
      "english": "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great"
    }
  },
  {
    "id": 63,
    "arabic": "ٱلْقَيُّوْمُ",
    "transliteration": "Al-Qayyum",
    "meaning": "The Self-Existing One",
    "explanation": "The one who is self-existing and by whom all things subsist. He is independent of all, while all are dependent on Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(63)}.mp3`
  ,
    "verse": {
      "citation": "2:255",
      "arabic": "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
      "english": "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great"
    }
  },
  {
    "id": 64,
    "arabic": "ٱلْوَاجِدُ",
    "transliteration": "Al-Wajid",
    "meaning": "The Perceiver",
    "explanation": "The one who finds and possesses all that He wills. He is rich and lacks nothing, and He perceives all that exists.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(64)}.mp3`
  ,
    "verse": {
      "citation": "38:44",
      "arabic": "وَخُذۡ بِيَدِكَ ضِغۡثٗا فَٱضۡرِب بِّهِۦ وَلَا تَحۡنَثۡۗ إِنَّا وَجَدۡنَٰهُ صَابِرٗاۚ نِّعۡمَ ٱلۡعَبۡدُ إِنَّهُۥٓ أَوَّابٞ",
      "english": "[We said], \"And take in your hand a bunch [of grass] and strike with it and do not break your oath.\" Indeed, We found him patient, an excellent servant. Indeed, he was one repeatedly turning back [to Allah]"
    }
  },
  {
    "id": 65,
    "arabic": "ٱلْمَاجِدُ",
    "transliteration": "Al-Majid",
    "meaning": "The Illustrious",
    "explanation": "The one who is most noble and illustrious. His glory and honor are of the highest degree.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(65)}.mp3`
  ,
    "verse": {
      "citation": "11:73",
      "arabic": "قَالُوٓاْ أَتَعۡجَبِينَ مِنۡ أَمۡرِ ٱللَّهِۖ رَحۡمَتُ ٱللَّهِ وَبَرَكَٰتُهُۥ عَلَيۡكُمۡ أَهۡلَ ٱلۡبَيۡتِۚ إِنَّهُۥ حَمِيدٞ مَّجِيدٞ",
      "english": "They said, \"Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable"
    }
  },
  {
    "id": 66,
    "arabic": "ٱلْوَاحِدُ",
    "transliteration": "Al-Wahid",
    "meaning": "The One",
    "explanation": "The one who is unique and singular in His essence, attributes, and actions. He has no partners or equals.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(66)}.mp3`
  ,
    "verse": {
      "citation": "2:163",
      "arabic": "وَإِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
      "english": "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful"
    }
  },
  {
    "id": 67,
    "arabic": "ٱلْأَحَدُ",
    "transliteration": "Al-Ahad",
    "meaning": "The Unity",
    "explanation": "The one who is absolutely one and indivisible. This emphasizes His uniqueness and the concept of pure monotheism.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(67)}.mp3`
  ,
    "verse": {
      "citation": "112:1",
      "arabic": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
      "english": "Say, \"He is Allah, [who is] One"
    }
  },
  {
    "id": 68,
    "arabic": "ٱلْصَّمَدُ",
    "transliteration": "As-Samad",
    "meaning": "The Eternal",
    "explanation": "The one who is eternal and upon whom all of creation depends, while He is in need of nothing. He is the ultimate refuge.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(68)}.mp3`
  ,
    "verse": {
      "citation": "112:2",
      "arabic": "ٱللَّهُ ٱلصَّمَدُ",
      "english": "Allah, the Eternal Refuge"
    }
  },
  {
    "id": 69,
    "arabic": "ٱلْقَادِرُ",
    "transliteration": "Al-Qadir",
    "meaning": "The All-Powerful",
    "explanation": "The one who has the perfect and complete ability to do whatever He wills. His power is all-encompassing.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(69)}.mp3`
  ,
    "verse": {
      "citation": "6:65",
      "arabic": "قُلۡ هُوَ ٱلۡقَادِرُ عَلَىٰٓ أَن يَبۡعَثَ عَلَيۡكُمۡ عَذَابٗا مِّن فَوۡقِكُمۡ أَوۡ مِن تَحۡتِ أَرۡجُلِكُمۡ أَوۡ يَلۡبِسَكُمۡ شِيَعٗا وَيُذِيقَ بَعۡضَكُم بَأۡسَ بَعۡضٍۗ ٱنظُرۡ كَيۡفَ نُصَرِّفُ ٱلۡأٓيَٰتِ لَعَلَّهُمۡ يَفۡقَهُونَ",
      "english": "Say, \"He is the [one] Able to send upon you affliction from above you or from beneath your feet or to confuse you [so you become] sects and make you taste the violence of one another.\" Look how We diversify the signs that they might understand"
    }
  },
  {
    "id": 70,
    "arabic": "ٱلْمُقْتَدِرُ",
    "transliteration": "Al-Muqtadir",
    "meaning": "The Creator of All Power",
    "explanation": "The one whose power is supreme and who has dominion over all things. His ability to decree and execute is absolute.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(70)}.mp3`
  ,
    "verse": {
      "citation": "18:45",
      "arabic": "وَٱضۡرِبۡ لَهُم مَّثَلَ ٱلۡحَيَوٰةِ ٱلدُّنۡيَا كَمَآءٍ أَنزَلۡنَٰهُ مِنَ ٱلسَّمَآءِ فَٱخۡتَلَطَ بِهِۦ نَبَاتُ ٱلۡأَرۡضِ فَأَصۡبَحَ هَشِيمٗا تَذۡرُوهُ ٱلرِّيَٰحُۗ وَكَانَ ٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ مُّقۡتَدِرًا",
      "english": "And present to them the example of the life of this world, [its being] like rain which We send down from the sky, and the vegetation of the earth mingles with it and [then] it becomes dry remnants, scattered by the winds. And Allah is ever, over all things, Perfect in Ability"
    }
  },
  {
    "id": 71,
    "arabic": "ٱلْمُقَدِّمُ",
    "transliteration": "Al-Muqaddim",
    "meaning": "The Expediter",
    "explanation": "The one who brings forward or gives precedence to whom He wills, according to His wisdom.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(71)}.mp3`
  ,
    "verse": {
      "citation": "16:61",
      "arabic": "وَلَوۡ يُؤَاخِذُ ٱللَّهُ ٱلنَّاسَ بِظُلۡمِهِم مَّا تَرَكَ عَلَيۡهَا مِن دَآبَّةٖ وَلَٰكِن يُؤَخِّرُهُمۡ إِلَىٰٓ أَجَلٖ مُّسَمّٗىۖ فَإِذَا جَآءَ أَجَلُهُمۡ لَا يَسۡتَـٔۡخِرُونَ سَاعَةٗ وَلَا يَسۡتَقۡدِمُونَ",
      "english": "And if Allah were to impose blame on the people for their wrongdoing, He would not have left upon the earth any creature, but He defers them for a specified term. And when their term has come, they will not remain behind an hour, nor will they precede [it]"
    }
  },
  {
    "id": 72,
    "arabic": "ٱلْمُؤَخِّرُ",
    "transliteration": "Al-Mu'akhkhir",
    "meaning": "The Delayer",
    "explanation": "The one who delays or puts back whom He wills, in accordance with His perfect plan and wisdom.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(72)}.mp3`
  ,
    "verse": {
      "citation": "71:4",
      "arabic": "يَغۡفِرۡ لَكُم مِّن ذُنُوبِكُمۡ وَيُؤَخِّرۡكُمۡ إِلَىٰٓ أَجَلٖ مُّسَمًّىۚ إِنَّ أَجَلَ ٱللَّهِ إِذَا جَآءَ لَا يُؤَخَّرُۚ لَوۡ كُنتُمۡ تَعۡلَمُونَ",
      "english": "Allah will forgive you of your sins and delay you for a specified term. Indeed, the time [set by] Allah, when it comes, will not be delayed, if you only knew"
    }
  },
  {
    "id": 73,
    "arabic": "ٱلْأَوَّلُ",
    "transliteration": "Al-Awwal",
    "meaning": "The First",
    "explanation": "The one who is the first, with no beginning. His existence precedes all of creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(73)}.mp3`
  ,
    "verse": {
      "citation": "57:3",
      "arabic": "هُوَ ٱلۡأَوَّلُ وَٱلۡأٓخِرُ وَٱلظَّـٰهِرُ وَٱلۡبَاطِنُۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٌ",
      "english": "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing"
    }
  },
  {
    "id": 74,
    "arabic": "ٱلْآخِرُ",
    "transliteration": "Al-Akhir",
    "meaning": "The Last",
    "explanation": "The one who is the last, with no end. He will remain after all of creation has perished.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(74)}.mp3`
  ,
    "verse": {
      "citation": "57:3",
      "arabic": "هُوَ ٱلۡأَوَّلُ وَٱلۡأٓخِرُ وَٱلظَّـٰهِرُ وَٱلۡبَاطِنُۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٌ",
      "english": "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing"
    }
  },
  {
    "id": 75,
    "arabic": "ٱلْظَّاهِرُ",
    "transliteration": "Az-Zahir",
    "meaning": "The Manifest One",
    "explanation": "The one who is manifest and apparent, whose existence is evident through the signs in His creation. Everything points to Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(75)}.mp3`
  ,
    "verse": {
      "citation": "57:3",
      "arabic": "هُوَ ٱلۡأَوَّلُ وَٱلۡأٓخِرُ وَٱلظَّـٰهِرُ وَٱلۡبَاطِنُۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٌ",
      "english": "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing"
    }
  },
  {
    "id": 76,
    "arabic": "ٱلْبَاطِنُ",
    "transliteration": "Al-Batin",
    "meaning": "The Hidden One",
    "explanation": "The one who is hidden and concealed from the senses. His essence cannot be fully comprehended by His creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(76)}.mp3`
  ,
    "verse": {
      "citation": "57:3",
      "arabic": "هُوَ ٱلۡأَوَّلُ وَٱلۡأٓخِرُ وَٱلظَّـٰهِرُ وَٱلۡبَاطِنُۖ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٌ",
      "english": "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing"
    }
  },
  {
    "id": 77,
    "arabic": "ٱلْوَالِي",
    "transliteration": "Al-Wali",
    "meaning": "The Patron",
    "explanation": "The one who is the sole governor and ruler of all things. He manages the affairs of the entire creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(77)}.mp3`
  ,
    "verse": {
      "citation": "13:11",
      "arabic": "لَهُۥ مُعَقِّبَٰتٞ مِّنۢ بَيۡنِ يَدَيۡهِ وَمِنۡ خَلۡفِهِۦ يَحۡفَظُونَهُۥ مِنۡ أَمۡرِ ٱللَّهِۗ إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوۡمٍ حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمۡۗ وَإِذَآ أَرَادَ ٱللَّهُ بِقَوۡمٖ سُوٓءٗا فَلَا مَرَدَّ لَهُۥۚ وَمَا لَهُم مِّن دُونِهِۦ مِن وَالٍ",
      "english": "For each one are successive [angels] before and behind him who protect him by the decree of Allah. Indeed, Allah will not change the condition of a people until they change what is in themselves. And when Allah intends for a people ill, there is no repelling it. And there is not for them besides Him any patron"
    }
  },
  {
    "id": 78,
    "arabic": "ٱلْمُتَعَالِي",
    "transliteration": "Al-Muta'ali",
    "meaning": "The Supreme in Highness",
    "explanation": "The one who is exalted above all creation in every way. He is far above any imperfection or attribute of His creatures.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(78)}.mp3`
  ,
    "verse": {
      "citation": "13:9",
      "arabic": "عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡكَبِيرُ ٱلۡمُتَعَالِ",
      "english": "[He is] Knower of the unseen and the witnessed, the Grand, the Exalted"
    }
  },
  {
    "id": 79,
    "arabic": "ٱلْبَرُّ",
    "transliteration": "Al-Barr",
    "meaning": "The Doer of Good",
    "explanation": "The one who is the source of all righteousness and goodness. His kindness and beneficence towards His creation are immense.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(79)}.mp3`
  ,
    "verse": {
      "citation": "52:28",
      "arabic": "إِنَّا كُنَّا مِن قَبۡلُ نَدۡعُوهُۖ إِنَّهُۥ هُوَ ٱلۡبَرُّ ٱلرَّحِيمُ",
      "english": "Indeed, we used to supplicate Him before. Indeed, it is He who is the Beneficent, the Merciful"
    }
  },
  {
    "id": 80,
    "arabic": "ٱلْتَّوَّابُ",
    "transliteration": "At-Tawwab",
    "meaning": "The Guide to Repentance",
    "explanation": "The one who accepts repentance and forgives sins. He makes it easy for His servants to turn back to Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(80)}.mp3`
  ,
    "verse": {
      "citation": "2:128",
      "arabic": "رَبَّنَا وَٱجۡعَلۡنَا مُسۡلِمَيۡنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةٗ مُّسۡلِمَةٗ لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبۡ عَلَيۡنَآۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ",
      "english": "Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful"
    }
  },
  {
    "id": 81,
    "arabic": "ٱلْمُنْتَقِمُ",
    "transliteration": "Al-Muntaqim",
    "meaning": "The Avenger",
    "explanation": "The one who justly delivers retribution to the wrongdoers. His vengeance is based on perfect justice and wisdom.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(81)}.mp3`
  ,
    "verse": {
      "citation": "32:22",
      "arabic": "وَمَنۡ أَظۡلَمُ مِمَّن ذُكِّرَ بِـَٔايَٰتِ رَبِّهِۦ ثُمَّ أَعۡرَضَ عَنۡهَآۚ إِنَّا مِنَ ٱلۡمُجۡرِمِينَ مُنتَقِمُونَ",
      "english": "And who is more unjust than one who is reminded of the verses of his Lord; then he turns away from them? Indeed We, from the criminals, will take retribution"
    }
  },
  {
    "id": 82,
    "arabic": "ٱلْعَفُوُّ",
    "transliteration": "Al-Afuww",
    "meaning": "The Pardoner",
    "explanation": "The one who pardons and effaces sins completely, as if they were never committed. His pardon removes all traces of wrongdoing.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(82)}.mp3`
  ,
    "verse": {
      "citation": "4:99",
      "arabic": "فَأُوْلَـٰٓئِكَ عَسَى ٱللَّهُ أَن يَعۡفُوَ عَنۡهُمۡۚ وَكَانَ ٱللَّهُ عَفُوًّا غَفُورٗا",
      "english": "For those it is expected that Allah will pardon them, and Allah is ever Pardoning and Forgiving"
    }
  },
  {
    "id": 83,
    "arabic": "ٱلْرَّؤُوْفُ",
    "transliteration": "Ar-Ra'uf",
    "meaning": "The Clement",
    "explanation": "The one who is extremely kind and compassionate. His clemency and tenderness are a special form of mercy for His servants.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(83)}.mp3`
  ,
    "verse": {
      "citation": "3:30",
      "arabic": "يَوۡمَ تَجِدُ كُلُّ نَفۡسٖ مَّا عَمِلَتۡ مِنۡ خَيۡرٖ مُّحۡضَرٗا وَمَا عَمِلَتۡ مِن سُوٓءٖ تَوَدُّ لَوۡ أَنَّ بَيۡنَهَا وَبَيۡنَهُۥٓ أَمَدَۢا بَعِيدٗاۗ وَيُحَذِّرُكُمُ ٱللَّهُ نَفۡسَهُۥۗ وَٱللَّهُ رَءُوفُۢ بِٱلۡعِبَادِ",
      "english": "The Day every soul will find what it has done of good present [before it] and what it has done of evil, it will wish that between itself and that [evil] was a great distance. And Allah warns you of Himself, and Allah is Kind to [His] servants"
    }
  },
  {
    "id": 84,
    "arabic": "مَالِكُ ٱلْمُلْكُ",
    "transliteration": "Malik-ul-Mulk",
    "meaning": "The Owner of All",
    "explanation": "The one who is the absolute owner of all sovereignty. He gives and takes dominion from whom He wills, and His authority is supreme.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(84)}.mp3`
  ,
    "verse": {
      "citation": "3:26",
      "arabic": "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ",
      "english": "Say, \"O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent"
    }
  },
  {
    "id": 85,
    "arabic": "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
    "transliteration": "Dhul-Jalali wal-Ikram",
    "meaning": "The Lord of Majesty and Bounty",
    "explanation": "The one who possesses both majesty and glory, as well as honor and generosity. He is the source of all dignity and bestows bounty upon His creation.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(85)}.mp3`
  ,
    "verse": {
      "citation": "55:27",
      "arabic": "وَيَبۡقَىٰ وَجۡهُ رَبِّكَ ذُو ٱلۡجَلَٰلِ وَٱلۡإِكۡرَامِ",
      "english": "And there will remain the Face of your Lord, Owner of Majesty and Honor"
    }
  },
  {
    "id": 86,
    "arabic": "ٱلْمُقْسِطُ",
    "transliteration": "Al-Muqsit",
    "meaning": "The Equitable One",
    "explanation": "The one who acts with utmost equity and fairness. His justice ensures that everyone receives their due rights without any partiality.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(86)}.mp3`
  ,
    "verse": {
      "citation": "7:29",
      "arabic": "قُلۡ أَمَرَ رَبِّي بِٱلۡقِسۡطِۖ وَأَقِيمُواْ وُجُوهَكُمۡ عِندَ كُلِّ مَسۡجِدٖ وَٱدۡعُوهُ مُخۡلِصِينَ لَهُ ٱلدِّينَۚ كَمَا بَدَأَكُمۡ تَعُودُونَ",
      "english": "Say, [O Muhammad], \"My Lord has ordered justice and that you maintain yourselves [in worship of Him] at every place [or time] of prostration, and invoke Him, sincere to Him in religion.\" Just as He originated you, you will return [to life]"
    }
  },
  {
    "id": 87,
    "arabic": "ٱلْجَامِعُ",
    "transliteration": "Al-Jami'",
    "meaning": "The Gatherer",
    "explanation": "The one who will gather all of creation on the Day of Judgment. He also gathers and reconciles things that are scattered.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(87)}.mp3`
  ,
    "verse": {
      "citation": "3:9",
      "arabic": "رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوۡمٖ لَّا رَيۡبَ فِيهِۚ إِنَّ ٱللَّهَ لَا يُخۡلِفُ ٱلۡمِيعَادَ",
      "english": "Our Lord, surely You will gather the people for a Day about which there is no doubt. Indeed, Allah does not fail in His promise"
    }
  },
  {
    "id": 88,
    "arabic": "ٱلْغَنِيُّ",
    "transliteration": "Al-Ghani",
    "meaning": "The Rich Beyond Need",
    "explanation": "The one who is self-sufficient and free from all wants and needs. All of creation is dependent on Him, while He is dependent on none.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(88)}.mp3`
  ,
    "verse": {
      "citation": "3:97",
      "arabic": "فِيهِ ءَايَٰتُۢ بَيِّنَٰتٞ مَّقَامُ إِبۡرَٰهِيمَۖ وَمَن دَخَلَهُۥ كَانَ ءَامِنٗاۗ وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلۡبَيۡتِ مَنِ ٱسۡتَطَاعَ إِلَيۡهِ سَبِيلٗاۚ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِيٌّ عَنِ ٱلۡعَٰلَمِينَ",
      "english": "In it are clear signs [such as] the standing place of Abraham. And whoever enters it shall be safe. And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way. But whoever disbelieves - then indeed, Allah is free from need of the worlds"
    }
  },
  {
    "id": 89,
    "arabic": "ٱلْمُغْنِيُّ",
    "transliteration": "Al-Mughni",
    "meaning": "The Enricher",
    "explanation": "The one who enriches His servants and suffices them. He is the source of all wealth and contentment.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(89)}.mp3`
  ,
    "verse": {
      "citation": "9:28",
      "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓاْ إِنَّمَا ٱلۡمُشۡرِكُونَ نَجَسٞ فَلَا يَقۡرَبُواْ ٱلۡمَسۡجِدَ ٱلۡحَرَامَ بَعۡدَ عَامِهِمۡ هَٰذَاۚ وَإِنۡ خِفۡتُمۡ عَيۡلَةٗ فَسَوۡفَ يُغۡنِيكُمُ ٱللَّهُ مِن فَضۡلِهِۦٓ إِن شَآءَۚ إِنَّ ٱللَّهَ عَلِيمٌ حَكِيمٞ",
      "english": "O you who have believed, indeed the polytheists are unclean, so let them not approach al-Masjid al-Haram after this, their [final] year. And if you fear privation, Allah will enrich you from His bounty if He wills. Indeed, Allah is Knowing and Wise"
    }
  },
  {
    "id": 90,
    "arabic": "ٱلْمَانِعُ",
    "transliteration": "Al-Mani'",
    "meaning": "The Preventer of Harm",
    "explanation": "The one who withholds and prevents things from happening in order to protect and guard. His prevention is an act of wisdom and care.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(90)}.mp3`
  ,
    "verse": {
      "citation": "67:21",
      "arabic": "أَمَّنۡ هَٰذَا ٱلَّذِي يَرۡزُقُكُمۡ إِنۡ أَمۡسَكَ رِزۡقَهُۥۚ بَل لَّجُّواْ فِي عُتُوّٖ وَنُفُورٍ",
      "english": "Or who is it that could provide for you if He withheld His provision? But they have persisted in insolence and aversion"
    }
  },
  {
    "id": 91,
    "arabic": "ٱلْضَّارُ",
    "transliteration": "Ad-Darr",
    "meaning": "The Creator of The Harmful",
    "explanation": "The one who creates affliction and harm as a means of testing or as a just consequence for wrongdoing. This is always done with perfect wisdom.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(91)}.mp3`
  ,
    "verse": {
      "citation": "6:17",
      "arabic": "وَإِن يَمۡسَسۡكَ ٱللَّهُ بِضُرّٖ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَۖ وَإِن يَمۡسَسۡكَ بِخَيۡرٖ فَهُوَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ",
      "english": "And if Allah should touch you with adversity, there is no remover of it except Him. And if He touches you with good - then He is over all things competent"
    }
  },
  {
    "id": 92,
    "arabic": "ٱلْنَّافِعُ",
    "transliteration": "An-Nafi'",
    "meaning": "The Creator of Good",
    "explanation": "The one who creates all that is beneficial and good. All benefit and advantage ultimately come from Him.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(92)}.mp3`
  ,
    "verse": {
      "citation": "30:37",
      "arabic": "أَوَلَمۡ يَرَوۡاْ أَنَّ ٱللَّهَ يَبۡسُطُ ٱلرِّزۡقَ لِمَن يَشَآءُ وَيَقۡدِرُۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يُؤۡمِنُونَ",
      "english": "Do they not see that Allah extends provision for whom He wills and restricts [it]? Indeed, in that are signs for a people who believe"
    }
  },
  {
    "id": 93,
    "arabic": "ٱلْنُّوْرُ",
    "transliteration": "An-Nur",
    "meaning": "The Light",
    "explanation": "The one who is the light of the heavens and the earth. He illuminates the hearts of the believers with the light of faith and guidance.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(93)}.mp3`
  ,
    "verse": {
      "citation": "24:35",
      "arabic": "۞ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۚ مَثَلُ نُورِهِۦ كَمِشۡكَوٰةٖ فِيهَا مِصۡبَاحٌۖ ٱلۡمِصۡبَاحُ فِي زُجَاجَةٍۖ ٱلزُّجَاجَةُ كَأَنَّهَا كَوۡكَبٞ دُرِّيّٞ يُوقَدُ مِن شَجَرَةٖ مُّبَٰرَكَةٖ زَيۡتُونَةٖ لَّا شَرۡقِيَّةٖ وَلَا غَرۡبِيَّةٖ يَكَادُ زَيۡتُهَا يُضِيٓءُ وَلَوۡ لَمۡ تَمۡسَسۡهُ نَارٞۚ نُّورٌ عَلَىٰ نُورٖۚ يَهۡدِي ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُۚ وَيَضۡرِبُ ٱللَّهُ ٱلۡأَمۡثَٰلَ لِلنَّاسِۗ وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمٞ",
      "english": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills. And Allah presents examples for the people, and Allah is Knowing of all things"
    }
  },
  {
    "id": 94,
    "arabic": "ٱلْهَادِي",
    "transliteration": "Al-Hadi",
    "meaning": "The Guide",
    "explanation": "The one who provides guidance and leads His servants to the right path. He is the ultimate source of all direction.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(94)}.mp3`
  ,
    "verse": {
      "citation": "25:31",
      "arabic": "وَكَذَٰلِكَ جَعَلۡنَا لِكُلِّ نَبِيٍّ عَدُوّٗا مِّنَ ٱلۡمُجۡرِمِينَۗ وَكَفَىٰ بِرَبِّكَ هَادِيٗا وَنَصِيرٗا",
      "english": "And thus have We made for every prophet an enemy from among the criminals. But sufficient is your Lord as a guide and a helper"
    }
  },
  {
    "id": 95,
    "arabic": "ٱلْبَدِيْعُ",
    "transliteration": "Al-Badi'",
    "meaning": "The Incomparable",
    "explanation": "The one who originates the creation in a unique and incomparable way, without any previous model or example.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(95)}.mp3`
  ,
    "verse": {
      "citation": "2:117",
      "arabic": "بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَإِذَا قَضَىٰٓ أَمۡرٗا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ",
      "english": "Originator of the heavens and the earth. When He decrees a matter, He only says to it, \"Be,\" and it is"
    }
  },
  {
    "id": 96,
    "arabic": "ٱلْبَاقِي",
    "transliteration": "Al-Baqi",
    "meaning": "The Everlasting One",
    "explanation": "The one who is eternal and whose existence will never end. Everything else will perish, but He remains forever.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(96)}.mp3`
  ,
    "verse": {
      "citation": "55:27",
      "arabic": "وَيَبۡقَىٰ وَجۡهُ رَبِّكَ ذُو ٱلۡجَلَٰلِ وَٱلۡإِكۡرَامِ",
      "english": "And there will remain the Face of your Lord, Owner of Majesty and Honor"
    }
  },
  {
    "id": 97,
    "arabic": "ٱلْوَارِثُ",
    "transliteration": "Al-Warith",
    "meaning": "The Inheritor of All",
    "explanation": "The one who remains after all of creation has ceased to exist. Everything returns to Him, as He is the sole and ultimate inheritor.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(97)}.mp3`
  ,
    "verse": {
      "citation": "15:23",
      "arabic": "وَإِنَّا لَنَحۡنُ نُحۡيِۦ وَنُمِيتُ وَنَحۡنُ ٱلۡوَٰرِثُونَ",
      "english": "And indeed, it is We who give life and cause death, and We are the Inheritor"
    }
  },
  {
    "id": 98,
    "arabic": "ٱلْرَّشِيْدُ",
    "transliteration": "Ar-Rashid",
    "meaning": "The Righteous Teacher",
    "explanation": "The one who directs all things to their proper course with perfect wisdom. He is the infallible guide and teacher.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(98)}.mp3`
  ,
    "verse": {
      "citation": "2:256",
      "arabic": "لَآ إِكۡرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ فَمَن يَكۡفُرۡ بِٱلطَّـٰغُوتِ وَيُؤۡمِنۢ بِٱللَّهِ فَقَدِ ٱسۡتَمۡسَكَ بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
      "english": "There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing"
    }
  },
  {
    "id": 99,
    "arabic": "ٱلْصَّبُوْرُ",
    "transliteration": "As-Sabur",
    "meaning": "The Patient One",
    "explanation": "The one who is most patient and does not hasten to punish the disobedient. He acts at the proper time and in the proper manner, with perfect forbearance.",
    "audioUrl": `https://raw.githubusercontent.com/abdur-roheem/Asmaul-Husna-JSON-And-Audio/master/Audio/${formatId(99)}.mp3`
  ,
    "verse": {
      "citation": "2:153",
      "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
      "english": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient"
    }
  }
];
