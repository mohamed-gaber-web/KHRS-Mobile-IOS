export interface PuzzleText {

  id?: number;
  voicePath: string;
  puzzleId: number;
  text: string;
  puzzleTextTranslations: [{
    id?: number;
    text: string;
    languageName: string;
    languageId: number;
    puzzleTextId: number;
    voicePath: string;
  }];

}


