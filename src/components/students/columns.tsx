"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUp, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentCard from "@/components/studentCard";
import DeleteStudent from "@/components/students/deleteStudent";

interface StudentProps {
  id: string;
  name: string;
  surname: string;
  results: string;
  email: string;
  phone_no: string;
}
const ViewStudent = (
  { id, name, surname, results, email, phone_no }: StudentProps,
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <span>View Student</span>
        </DropdownMenuItem>
      </DialogTrigger>

      <StudentCard
        studentID={id}
        fname={name}
        lname={surname}
        results={results.toString()}
        email={email}
        phone_no={phone_no}
      />
    </Dialog>
  );
};

const DeleteStudentDialog = (
  { id, name, surname, results, email, phone_no }: StudentProps,
) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem
          className="bg-red-500"
          onSelect={(e) => e.preventDefault()}
        >
          <span>Delete Student</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DeleteStudent
        studentID={id}
        fname={name}
        lname={surname}
        results={results.toString()}
        email={email}
        phone_no={phone_no}
      />
    </Dialog>
  );
};

export type Student = {
  id: string;
  name: string;
  surname: string;
  results: "pending" | "yes" | "no";
  email: string;
  phone_no: string;
};

export const columns: ColumnDef<Student>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select all"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "surname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Surname
          <ArrowUp className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "results",
    header: "Has Results",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_no",
    header: "Phone No.",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const student = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="ml-auto">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(student.id)}
            >
              Copy Student Number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <ViewStudent
                id={student.id}
                name={student.name}
                surname={student.surname}
                results={student.results}
                email={student.email}
                phone_no={student.phone_no}
              />
              <DeleteStudentDialog
                id={student.id}
                name={student.name}
                surname={student.surname}
                results={student.results}
                email={student.email}
                phone_no={student.phone_no}
              />
            </DropdownMenuGroup>
          </DropdownMenuContent>
          {
            /* NOTE: Two modals can't trigger separately
              Take a look at radix-ui
          */
          }
        </DropdownMenu>
      );
    },
  },
];
