import DataTable from "@/components/students/data-table";
import { Student, columns } from "@/components/students/columns";
import { nanoid } from 'nanoid'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Students List',
    description: 'Students Results Page'
}

async function getData(): Promise<Student[]> {
    return new Array(100).fill(null).map(() => ({
        id: `ID${nanoid()}`,
        name: "John",
        surname: "Doe",
        email: "ruckus@boondocks.com",
        results: 'pending',
        phone_no: `+263 ${Math.random() * 1000}`
    }))
}

const Home = async () => {
    const data = await getData()
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Home