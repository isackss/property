type Props = {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
};

const FormInput = ({ type, name, label, placeholder }: Props) => {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    className="mb-4 w-full rounded border border-gray-300 p-2"
                />
            ) : (
                <input
                    className="mb-4 w-full rounded border border-gray-300 p-2"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default FormInput;
