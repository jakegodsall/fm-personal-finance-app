import Link from "next/link";

import FormButton from "../ui/FormButton";
import FormInput from "./FormInput";

export default function LoginForm() {
  return (
    <form className="w-full max-w-[540px] rounded-xl bg-white px-5 py-6 sm:p-8">
      <h1 className="mb-8 text-2xl font-bold">Login</h1>
      <div className="mb-8">
        <div className="mb-8 flex flex-col gap-4">
          <FormInput type="email" label="Email" name="email" />
          <FormInput type="password" label="Password" name="password" />
        </div>
        <FormButton type="submit">Login</FormButton>
      </div>
      <p className="text-center text-primary-grey-dark">
        Need to create an account?{" "}
        <Link
          href="sign-up"
          className="font-bold text-primary-grey-darkest underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
