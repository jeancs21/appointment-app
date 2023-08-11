const CustomButton = ({ isDirty = false, isValid = false, children = '' }) => {
    return (
        <button className="bg-pink-400 text-white w-44 border-2 cursor-pointer p-2 self-center rounded-full hover:bg-pink-500 duration-300"
            type={"submit"}
            disabled={!isDirty || !isValid}>
                {children}
        </button>
    )
}

export default CustomButton