const CustomButton = ({ isDirty = false, isValid = false, children = '' }) => {
    return (
        <button type={"submit"} disabled={!isDirty || !isValid}>
            {children}
        </button>
    )
}

export default CustomButton