import { component$, Slot, type QRL } from '@builder.io/qwik';

export type ModalProps = {
    isOpen: boolean;
    onClose: QRL<() => boolean>;
    className?: string;
};

export const Modal = component$(({isOpen, onClose, className} : ModalProps) => {
    return (
        // Backdrop
        <div
            onClick$={onClose}
            class={`
            fixed inset-0 flex items-center justify-center transition-colors z-50 ${
                isOpen ? "visible bg-black/20" : "invisible"
            }
        `}
        >
            {/* Modal Background */}
            <section
                class={`bg-white rounded-xl shadow p-6 transition-all ${
                    isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
                } overflow-x-hidden modal ${className}`}
                onClick$={(e) => e.stopPropagation()}
            >
                {/* Closing button */}
                <button
                    onClick$={onClose}
                    class="absolute top-1 right-1 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 duration-200 hover:text-gray-600 flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                {/* Modal Content */}
                <div>
                    <Slot />
                </div>
            </section>
        </div>
    );
});

export const ModalTitle = component$(() => {
    return (
        <div class="flex justify-center m-2">
            <h1 class="text-2xl font-bold text-center">
                <Slot />
            </h1>
        </div>
    );
});