import { FunctionComponent, ReactNode } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form"
import { PatientFormValues } from "../../../../model/patient.model";

const formValidation = (errors: FieldErrors<FieldValues>, errorKey: string) => {
    return errors[errorKey] ? (errors[errorKey] as FieldErrors)?.message : ''
}

type Props = {
    name: string,
    label: string,
    defaultValue: string,
    required: boolean,
    patients: PatientFormValues[],
    isEditing: boolean,
    isCancelled?: boolean
}

const CustomSelect:FunctionComponent<Props> = (props) => {
    const { register, formState: {errors} } = useFormContext();
  return (
    <>
        <div className="flex flex-col gap-2 w-full">
            <label className="font-medium text-pink-400">{props.label}</label>
            <select
                className="border-solid border-2 p-2 rounded-full"
                required={props.required}
                id={props.name}
                {...register(props.name)}
                disabled={props.isCancelled}
            >
                {props.patients.length === 0 ? (
                    <option disabled selected value={props.defaultValue}>No hay pacientes registrados</option>
                    ) : (
                    <>
                        <option disabled={!props.isEditing} selected value={props.defaultValue}>
                            {`${props.isEditing ? props.defaultValue : "Selecciona un paciente"} `}
                        </option>
                        {props.patients.map((patient) => (
                            <option key={patient.id} value={patient.id}>
                                {`${patient.firstName} ${patient.lastName}`}
                            </option>
                        ))}
                    </>
                )}
            </select>
            {errors && (
                <p className="text-red-500 text-center">
                    {(formValidation(errors, props.name) as ReactNode)}
                </p>
            )}
        </div>
    </>
  )
}

export default CustomSelect