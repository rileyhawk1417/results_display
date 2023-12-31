import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface StudentCardProps {
  studentID: string;
  fname: string;
  lname: string;
  results: string;
  email: string;
  phone_no: string;
}

const StudentCard = (
  { studentID, fname, lname, results, email, phone_no }: StudentCardProps,
) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Student Card</DialogTitle>
        <DialogDescription>
          <div className="grid grid-rows-4 gap-2">
            <div>Student No.: {studentID}</div>
            <div>First name: {fname}</div>
            <div>Last name: {lname}</div>
            <div>Has Result: {results}</div>
            <div>Email: {email}</div>
            <div>Phone no.: {phone_no}</div>
          </div>
        </DialogDescription>
      </DialogHeader>

      <Link href={`/student/${studentID}`} target="_blank">
        <DialogFooter>
          <Button>View More</Button>
        </DialogFooter>
      </Link>
    </DialogContent>
  );
};

export default StudentCard;
