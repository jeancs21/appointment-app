import { ReactNode } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form"

const formValidation = (errors: FieldErrors<FieldValues>, errorKey: string) => {
  return errors[errorKey] ? (errors[errorKey] as FieldErrors)?.message : ''
}

const CustomInput = ({ name = '', label = '', type = '', defaultValues = '' ,disabled = false, required = false }) => {
    const {register, formState: {errors} } = useFormContext();
  return (
    <div className="flex flex-col gap-2 w-full">
        <label className="font-medium text-pink-400">{label}</label>
        <input className="border-solid border-2 p-2 rounded-full"
            required={required}
            disabled={disabled}
            type={type}
            id={name}
            {...register(name)}
            defaultValue={defaultValues}
        />
        {errors && (
          <p className="text-red-500 text-center">
            {(formValidation(errors, name) as ReactNode)}
          </p>
        )}
    </div>
  )
}

export default CustomInput