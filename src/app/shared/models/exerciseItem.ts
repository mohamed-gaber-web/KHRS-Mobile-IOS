import { AudioElement } from "./audioObject";

export interface ExerciseItem {
  id: number;
  courseId: number;
  question: string;
  singleChoiceTranslations:[{
    id?:number;
    voicePath:string;
  }];
  multiChoiceTranslations:[{
    id?:number;
    voicePath:string;
  }];
  audioElement:AudioElement;
}
