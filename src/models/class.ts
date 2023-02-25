import { BaseType } from "./geral";

export interface classType extends BaseType {
  code: number;
  initials: string;
  instructor_code: number;
  instructor_name: string;
  description: string;
  open_web: boolean;
  class_taken: boolean;
  open_at: string;
  payed: boolean;
  status: "EM ABERTO" | "AULA ENCERRADA";
}

export interface innerClass extends classType {
  hasLessonOpen: boolean;
  students: {
    class_code: number;
    associate_code: number;
    student_code: number;
    name: string;
    checkin_today: boolean;
    open_web: boolean;
    payed: boolean;
  }[];
}
