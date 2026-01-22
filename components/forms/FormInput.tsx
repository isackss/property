type Props = {
    type: string;
    name: string;
    placeholder: string;
    description?: string;
}

const FormInput = ({ type, name, description, placeholder }: Props) => {
  return (
    <div className="w-full">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">{description}</label>
        <input className="w-full p-2 border border-gray-300 rounded mb-4" type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default FormInput