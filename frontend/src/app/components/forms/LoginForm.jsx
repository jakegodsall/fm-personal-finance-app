import FormButton from "../ui/FormButton";
import FormInput from "./FormInput";

export default function LoginForm() {
  return (
    <form>
      <h1>Login</h1>
      <div className="flex flex-col gap-4 mb-8">
        <FormInput type="text" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <FormButton type="submit">Login</FormButton>
      </div>
    </form>
  );
}
