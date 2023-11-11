"use client";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewStudent } from "@/lib/hooks/StudentFunc";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const formSchema = z.object({
  fname: z
    .string()
    .nonempty()
    .min(2, { message: "Name can not be 2 characters" }),
  lname: z
    .string()
    .nonempty()
    .min(2, { message: "Surname can not be 2 characters" }),
  email: z
    .string()
    .nonempty()
    .min(2, { message: "Not a valid email address" })
    .email(),
  results: z.string(),
  phone_no: z.string(),
});

const FormBox = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone_no: "",
      results: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      NewStudent(values);
      setStatus(true);
    } catch (e) {
      setStatus(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>Students First Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormDescription>Students Surname</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@doe.com" {...field} />
              </FormControl>
              <FormDescription>Students Email Address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="results"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Results</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Yes" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Does Student Have Results?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone no.</FormLabel>
              <FormControl>
                <Input placeholder="077 421 3478" type="number" {...field} />
              </FormControl>
              <FormDescription>Students Phone No.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          //TODO: Implement a better state system useState is buggy
          type="submit"
          onClick={() => {
            let success = "Successfully added student you cn close this pop-up";
            let failure = "Failed to add student student!";
            setTimeout(() => {
              console.log(status);
              if (status) {
                toast({
                  variant: "default",
                  title: "Notification",
                  description: success,
                });
              } else {
                toast({
                  variant: "destructive",
                  title: "Notification",
                  description: failure,
                });
              }
            }, 2500);
          }}
        >
          Add New User
        </Button>
      </form>
    </Form>
  );
};

const AddStudent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Student</DialogTitle>
        <DialogDescription>
          <FormBox />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default AddStudent;
