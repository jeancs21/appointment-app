import { ReactNode } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form"
import { PatientFormValues } from "../../../../model/patient.model";

const formValidation = (errors: FieldErrors<FieldValues>, errorKey: string) => {
    return errors[errorKey] ? (errors[errorKey] as FieldErrors)?.message : ''
}

const CustomSelect = ({
        name = '',
        label = '',
        defaultValue = '',
        required = false,
        items = [] as PatientFormValues[]
    }) => {
    const { register, formState: {errors} } = useFormContext();
  return (
    <>
        <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-pink-400">{label}</label>
            <select
                className="border-solid border-2 p-2 rounded-full"
                required={required}
                id={name}
                {...register(name)}
            >
                {items.length === 0 ? (
                    <option disabled selected value={defaultValue}>No hay pacientes registrados</option>
                    ) : (
                    <>
                        <option disabled selected value={defaultValue}>
                            Selecciona un paciente
                        </option>
                        {items.map((item) => (
                            <option key={item.id} value={item.id}>
                                {`${item.firstName} ${item.lastName}`}
                            </option>
                        ))}
                    </>
                )}
            </select>
            {errors && (
                <p className="text-red-500 text-center">
                    {(formValidation(errors, name) as ReactNode)}
                </p>
            )}
        </div>
    </>
  )
}

export default CustomSelect