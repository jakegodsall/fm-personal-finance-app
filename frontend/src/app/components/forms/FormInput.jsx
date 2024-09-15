export default function FormInput({ type, label, name, placeholder }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-primary-grey-dark text-[12px] font-bold mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="border-[1px] border-primary-grey-dark rounded-md outline-none px-2 py-1 text-primary-beige-dark"
      />
    </div>
  );
}
