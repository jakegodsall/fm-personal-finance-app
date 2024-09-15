import Link from "next/link";

import FormInput from "./FormInput";
import FormButton from "../ui/FormButton";

export default function SignUpForm() {
  return (
    <form className="w-full max-w-[540px] rounded-xl bg-white px-5 py-6 sm:p-8">
      <h1 className="mb-8 text-2xl font-bold">Sign Up</h1>
      <div className="mb-8">
        <div className="mb-8 flex flex-col gap-4">
          <FormInput type="text" label="Name" name="name" />
          <FormInput type="email" label="Email" name="email" />
          <FormInput type="password" label="Password" name="password" />
        </div>
        <FormButton type="submit">Create Account</FormButton>
      </div>
      <p className="text-center text-primary-grey-dark">
        Already have an account?{" "}
        <Link
          href="login"
          className="font-bold text-primary-grey-darkest underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
