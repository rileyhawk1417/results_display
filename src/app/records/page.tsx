import DataTable from "@/components/students/data-table";
import { Student, columns } from "@/components/students/columns";
import type { Metadata } from "next";
import supabase from "@/lib/supabase_connector";
import { Toaster } from "@/components/ui/toaster";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Students List",
  description: "Students Results Page",
};

async function getData(): Promise<Student[]> {
  //TODO: Add realtime subscription
  let { data: students, error } = await supabase.from("student_data").select();
  console.log(students);
  //@ts-ignore
  //TODO: Fix the types
  return students?.map((item: any, idx: number) => ({
    id: item.id,
    name: item.fname,
    surname: item.lname,
    email: item.email,
    results: item.results,
    phone_no: item.phone_no,
  }));
  /*
    return new Array(100).fill(null).map(() => ({
        id: `ID${nanoid()}`,
        name: "John",
        surname: "Doe",
        email: "ruckus@boondocks.com",
        results: 'pending',
        phone_no: `+263 ${Math.random() * 1000}`
    }))
    */
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <Toaster />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Home;
