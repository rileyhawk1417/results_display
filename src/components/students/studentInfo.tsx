"use client";

import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

interface StudentInfoProps {
  studentId: string;
  name: string;
  surname: string;
  email: string;
  results: [];
  phone: string;
  updated_at: string;
  gender: string;
  comment: string;
}

export default function StudentInfo(
  {
    studentId,
    name,
    surname,
    email,
    results,
    phone,
    updated_at,
    gender,
    comment,
  }: StudentInfoProps,
) {
  return (
    <div className="bg-slate-700 w-full min-h-screen rounded-md">
      <Card className=" h-max flex items-center justify-center rounded-none">
        <CardHeader className="flex gap-3 justify-center items-center">
          {
            /*
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        */
          }
          <Avatar isDisabled name={name} size="lg" />
          <div className="flex flex-row gap-24 items-center justify-evenly">
            <p>Student Number: {studentId}</p>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
          </div>
        </CardHeader>
      </Card>
      <Divider />
      <div className="flex flex-row items-start justify-evenly pt-8">
        <div className="grid grid-cols-1 text-4xl">
          <div>
            <p className="text-md">Name: {name}</p>
            <p className="text-small text-default-500">Surname: {surname}</p>
            <p className="text-small text-default-500">Gender: {gender}</p>
          </div>

          <div>
            <p className="text-md">Email: {email}</p>
            <p className="text-small text-default-500">Phone no: {phone}</p>
            <p className="text-small text-default-500">
              Updated at: {updated_at}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Comment: {comment.length != null ? comment : "No Comment"}</p>
          <span>
            Results:
            {results.length != 0 ? <div>Results!</div> : <div>No Results</div>}
          </span>
        </div>
      </div>
      <Divider />
    </div>
  );
}
