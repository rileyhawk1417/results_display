export interface definitions {
  student_data: {
    fname: string;
    lname: string;
    phone_no: string;
    results: boolean;
    email: string;
  };
}

export type StudentData = definitions["student_data"];


