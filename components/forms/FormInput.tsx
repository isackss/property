type Props = {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
}

const FormInput = ({ type, name, label, placeholder }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
        {type === "textarea" ? (
            <textarea
                name={name}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
        ) : (
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type={type}
                name={name}
                placeholder={placeholder}
            />
        )}
    </div>
  )
}

export default FormInput