"use server";

import supabase from "@/lib/supabase_connector";
import { nanoid } from "nanoid";
export const NewStudent = async (values: any) => {
  console.log(values);
  try {
    const { data, error } = await supabase
      .from("students")
      .insert(
        {
          name: values.fname,
          surname: values.lname,
          phone: values.phone_no,
          results: [],
          email: values.email,
          student_no: `${nanoid()}`,
        },
      )
      .select();
    if (error) {
      console.log(error);
    }
  } catch (e) {
    console.log(e);
  }
};

export const DeleteStudent = async (id: string) => {
  const { data, error } = await supabase.from("students").delete().eq(
    "student_no",
    id,
  );
  if (error) {
    console.log(error);
  }
};
