interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
}

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
}: Props) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
          <input id={name} className="placeholder:text-gray-700/60 bg-white rounded-md p-2 shadow-xl"
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default InputField;
