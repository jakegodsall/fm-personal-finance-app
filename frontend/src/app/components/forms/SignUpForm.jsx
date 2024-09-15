import Link from "next/link";

import FormInput from "./FormInput";
import FormButton from "../ui/FormButton";

export default function SignUpForm() {
  return (
    <form class="bg-white px-5 py-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
      <div className="mb-8">
        <div className="flex flex-col gap-4 mb-8">
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
          className="font-bold underline text-primary-grey-darkest"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
