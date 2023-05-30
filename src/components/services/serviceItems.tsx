import {
    component$,
    useSignal,
    $,
    Slot,
    useVisibleTask$,
} from "@builder.io/qwik";
import type { ServiceInfoProps } from "./servicesInfo";
import { Modal, ModalTitle } from "../utilities/modal";

// Remove the icon prop from the ServiceInfoProps
// and add it to the ServiceItems component

type ServiceItemsProps = ServiceInfoProps & {
    index: number;
};

export const ServiceItems = component$(
    ({ title, description, index }: ServiceItemsProps) => {
        const isOpen = useSignal(false);
        const animate = useSignal(false);
        const setIsOpen = $(() => (isOpen.value = !isOpen.value));

        useVisibleTask$(() => {
            setTimeout(() => {
                animate.value = true;
            }, 400 + 120 * (index + 1));
        });

        return (
            <>
                <div
                    class={`block opacity-0 rounded-xl border border-gray-100 p-4 shadow-sm duration-300 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring cursor-pointer ${
                        animate.value ? "animate-flip-vertical-right" : ""
                    } `}
                    onClick$={setIsOpen}
                >
                    <span class="inline-block rounded-lg bg-gray-50 p-3 text-primary-500">
                        <Slot />
                    </span>
                    <h2 class="mt-2 text-sm sm:text-lg font-bold">{title}</h2>
                </div>
                {isOpen.value && (
                    <Modal isOpen={isOpen.value} onClose={setIsOpen}>
                        <ModalTitle>{title}</ModalTitle>
                        <div class="p-4">
                            <ul class="list-disc list-inside flex flex-col space-y-2 flex-wrap items-start md:items-center justify-center">
                                {description?.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            class="text-gray-600"
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Modal>
                )}
            </>
        );
    }
);
