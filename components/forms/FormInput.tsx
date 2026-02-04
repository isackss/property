type Props = {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
    options?: string[];
};

const FormInput = ({
    type,
    name,
    label,
    placeholder,
    options,
    defaultValue,
}: Props) => {
    const inputType = ({ type }: { type: string }) => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        name={name}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        className="mb-4 w-full rounded border border-gray-300 p-2"
                    />
                );
            case 'text':
                return (
                    <input
                        className="mb-4 w-full rounded border border-gray-300 p-2"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                    />
                );
            case 'select':
                return (
                    <select
                        name={name}
                        className="mb-4 w-full rounded border border-gray-300 p-2"
                    >
                        {options?.map((option) => (
                            <option
                                key={option}
                                value={option}
                                defaultValue={
                                    defaultValue === option ? true : false
                                }
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                );
            case 'email':
                return (
                    <input
                        className="mb-4 w-full rounded border border-gray-300 p-2"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                    />
                );
        }
    };
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            {
                /* Conditional rendering based on the type prop */
                inputType({ type })
            }
        </div>
    );
};

export default FormInput;
