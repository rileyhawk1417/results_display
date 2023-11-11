import DataTable from "@/components/students/data-table";
import { columns, Student } from "@/components/students/columns";
import type { Metadata } from "next";
import supabase from "@/lib/supabase_connector";
import { Toaster } from "@/components/ui/toaster";
import { nanoid } from "nanoid";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Students List",
  description: "Students Results Page",
};

async function getData(): Promise<Student[]> {
  //TODO: Add realtime subscription
  let { data: students, error } = await supabase.from("students").select();
  //TODO: Fix the types for supabase
  //@ts-ignore
  return students?.map((item: any, idx: number) => ({
    id: item.student_no,
    name: item.name,
    surname: item.surname,
    email: item.email,
    results: item.results,
    phone_no: item.phone,
  }));
  //NOTE: Used for local testing
  /*
  return new Array(100).fill(null).map(() => ({
    id: `ID${nanoid()}`,
    name: "John",
    surname: "Doe",
    email: "ruckus@boondocks.com",
    results: "pending",
    phone_no: `+263 ${Math.random() * 1000}`,
  }));
    */
}

const Page = async () => {
  const data = await getData();
  return (
    <div className="min-h-screen  container mx-auto py-10">
      <Toaster />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
