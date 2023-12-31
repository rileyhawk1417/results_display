import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginBox = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-2xl pb-6">Login</div>
      <span className="flex flex-col items-center justify-center pb-6">
        email
        <Input />
      </span>

      <span className="flex flex-col items-center justify-center pb-6">
        password
        <Input />
      </span>
      <Link href="/records">
        <Button> Login </Button>
      </Link>
    </div>
  );
};

export default LoginBox;
