"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { DeleteStudent as deleteFunc } from "@/app/hooks/StudentFunc";

interface DeleteStudentProps {
  studentID: string;
  fname: string;
  lname: string;
  results: string;
  email: string;
  phone_no: string;
}

const DeleteStudent = ({
  studentID,
  fname,
  lname,
  results,
  email,
  phone_no,
}: DeleteStudentProps) => {
  const { toast } = useToast();
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Student</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete the student?
          <div>Student No.: {studentID}</div>
          <div>First name: {fname}</div>
          <div>Last name: {lname}</div>
          <div>Has Result: {results}</div>
          <div>Email: {email}</div>
          <div>Phone no.: {phone_no}</div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          type="submit"
          onClick={() => {
            deleteFunc(studentID);
            setTimeout(() => {
              toast({
                variant: "destructive",
                title: "Notification",
                description: `Student ${fname} ${lname} has been deleted, please close this pop-up`,
              });
            }, 2500);
          }}
        >
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteStudent;
