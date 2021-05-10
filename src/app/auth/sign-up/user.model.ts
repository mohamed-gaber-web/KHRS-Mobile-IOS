export interface User {

  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  gender:number;
  password?: string;
  confirmPassword?: string;
  Recommended: number,
  languageId: number;
}
