import Link from "next/link";

import FormButton from "../ui/FormButton";
import FormInput from "./FormInput";

export default function LoginForm() {
  return (
    <form class="bg-white px-5 py-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-8">Login</h1>
      <div className="mb-8">
        <div className="flex flex-col gap-4 mb-8">
          <FormInput type="text" label="Email" name="email" />
          <FormInput type="password" label="Password" name="password" />
        </div>
        <FormButton type="submit">Login</FormButton>
      </div>
      <p className="text-center text-primary-beige-dark">
        Need to create an account?{" "}
        <Link
          href="sign-up"
          className="font-bold underline text-primary-grey-darkest"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
