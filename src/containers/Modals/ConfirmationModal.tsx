import { Dialog, Transition } from "@headlessui/react"
import { Fragment, FunctionComponent } from "react"

type Props = {
    isOpen: boolean,
    closeModal: (value: boolean) => void,
    handleSubmitButton: () => void,
    label: string,
    confirmButtonText: string,
    confirmButtonStyle: string,
    cancelButtonText: string,
    cancelButtonStyle: string,
    form?: string,
    showDetails?: boolean,
    item?: string,
}

const ConfirmationModal:FunctionComponent<Props> = (props) => {
  return (
    <>
    <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => props.closeModal(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-xl sm:text-2xl font-semibold leading-6 text-gray-900 mb-8"
                        >
                            {props.label}
                        </Dialog.Title>
                        {props.showDetails && (
                            <div className="flex justify-center mb-8">
                                <p>{props.item}</p>
                            </div>
                        )}
                        <div className="flex justify-around">
                            <button
                                className={`flex items-center justify-center w-24 p-1 border text-center rounded-lg duration-300 cursor-pointer ${props.confirmButtonStyle}`}
                                type="submit"
                                form={props.form}
                                onClick={() => props.handleSubmitButton()}
                                >
                                    {props.confirmButtonText}
                            </button>
                            <button
                                className={`flex items-center justify-center w-24 p-1 border text-center rounded-lg duration-300 cursor-pointer ${props.cancelButtonStyle}`}
                                type="button"
                                onClick={() => props.closeModal(false)}
                                >
                                    {props.cancelButtonText}
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default ConfirmationModal