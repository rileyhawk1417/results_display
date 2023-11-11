import StudentInfo from "@/components/students/studentInfo";
import supabase from "@/lib/supabase_connector";
import React from "react";
export const dynamic = "force-dynamic";
const getData = async ({ id }: any) => {
  let { data: student, error } = await supabase.from("students").select("*")
    .eq("student_no", id).single();
  return student;
};

const Page = async ({ params }: { params: { id: string } }) => {
  let { data: student, error } = await supabase.from("students").select("*")
    .eq("student_no", params.id).single();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <StudentInfo
        studentId={student.student_no}
        name={student.name}
        surname={student.surname}
        email={student.email}
        results={student.results}
        phone={student.phone}
        updated_at={student.updated_at}
        gender={student.gender}
        comment={student.comment}
      />
    </div>
  );
};

export default Page;
