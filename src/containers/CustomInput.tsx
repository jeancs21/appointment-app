import { ReactNode } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form"

const formValidation = (errors: FieldErrors<FieldValues>, errorKey: string) => {
  return errors[errorKey] ? (errors[errorKey] as FieldErrors)?.message : ''
}

const CustomInput = ({ name = '', label = '', type = '', disabled = false, required = false }) => {
    const {register, formState: {errors} } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
        <label>{label}</label>
        <input
            required={required}
            disabled={disabled}
            type={type}
            id={name}
            {...register(name)}
        />
        {errors && (
          <p color="red">
            {(formValidation(errors, name) as ReactNode)}
          </p>
        )}
    </div>
  )
}

export default CustomInput