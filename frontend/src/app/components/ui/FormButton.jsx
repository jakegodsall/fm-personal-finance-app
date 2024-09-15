export default function FormButton({ children, type }) {
  return (
    <button
      className="bg-primary-grey-darkest w-full text-white font-bold text-[14px] py-3 rounded-lg"
      type={type}
    >
      {children}
    </button>
  );
}
