export default function FormInput({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 text-[12px] font-bold text-primary-grey-dark"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="rounded-md border-[1px] border-primary-grey-dark px-2 py-1 text-primary-beige-dark outline-none"
      />
    </div>
  );
}
