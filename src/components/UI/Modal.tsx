import { Dialog, DialogPanel, FocusTrap } from "@headlessui/react";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}
const Modal = ({ title, isOpen, close, children }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div
          className="fixed inset-0 z-10 w-screen overflow-y-auto bg-white/5 backdrop-blur-sm"
          aria-hidden="true"
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl border bg-white p-6 shadow-md backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              {title && (
                <Dialog.Title className="text-2xl">{title}</Dialog.Title>
              )}
              <div className="mt-4">
                <FocusTrap>{children}</FocusTrap>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
