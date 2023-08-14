const CustomButton = ({ isDirty = false, isValid = false, children = '', isCancelled = false }) => {
    return (
        <button className={`bg-pink-400 text-white w-44 border-2 cursor-pointer p-2 self-center rounded-full ${!isCancelled ? 'hover:bg-pink-500' : 'opacity-30' } duration-300`}
            type={"submit"}
            disabled={!isDirty || !isValid || isCancelled}>
                {children}
        </button>
    )
}

export default CustomButton