export default function FormButton({ children, type }) {
  return (
    <button
      className="bg-primary-grey-darkest text-white font-bold text-[14px] py-4 w-full rounded-lg"
      type={type}
    >
      {children}
    </button>
  );
}
