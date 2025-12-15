export type NameOfAllah = {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  explanation: string;
  audioUrl: string;
  verse?: {
    citation: string;
    arabic: string;
    english: string;
  };
  hadith?: {
    topic?: string;
    arabic: string;
    english: string;
    reference: string;
  };
};

export interface QuizQuestion {
  name: NameOfAllah;
  options: string[];
  questionProperty: 'meaning' | 'transliteration';
  answerProperty: 'transliteration' | 'meaning';
}
