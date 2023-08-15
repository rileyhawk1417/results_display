"use server";
import supabase from "@/lib/supabase_connector";
export const NewStudent = async (values: any) => {
  await supabase
    .from("student_data")
    .insert([
      {
        fname: values.fname,
        lname: values.lname,
        phone_no: values.phone_no,
        results: values.results,
        email: values.email,
      },
    ])
    .single();
};

export const DeleteStudent = async (id: string) => {
  await supabase.from("student_data").delete().eq("id", id);
};
