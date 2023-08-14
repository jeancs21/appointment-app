import { Dialog, Transition } from "@headlessui/react"
import { Fragment, FunctionComponent } from "react"

type Props = {
    isOpen: boolean,
    closeModal: (value: boolean) => void,
}

const ConfirmCancelModal:FunctionComponent<Props> = (props) => {
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
                            ¿Está seguro de cancelar esta cita?
                        </Dialog.Title>
                        <div className="flex justify-around">
                            <button
                                className="flex items-center justify-center w-24 p-1 border text-center rounded-lg bg-red-500 hover:bg-red-600 text-white duration-300 cursor-pointer"
                                type="submit"
                                form="appointment-edit-form"
                                >
                                    Sí, cancelar
                            </button>
                            <button
                                className="flex items-center justify-center w-24 p-1 border text-center rounded-lg bg-slate-300 hover:bg-slate-400 duration-300 cursor-pointer"
                                type="button"
                                onClick={() => props.closeModal(false)}
                                >
                                    No
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

export default ConfirmCancelModal