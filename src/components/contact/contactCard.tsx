import { Slot, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { ContactCardProps } from './contactInfo';

type ContactCardProps2 = ContactCardProps & {
    index: number;
}

export const ContactCard = component$(({
    title,
    description,
    contact,
    index
}: ContactCardProps2) => {
    const animate = useSignal(false);
    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
        }, 400 + 150 * (index + 1));
    });
    return (
        <div class={`flex flex-col items-center justify-center text-center ease-in-out opacity-0 ${animate.value ? "animate-scale-up-center" : ""}`}>
            <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                <Slot />
            </span>
            <strong class="mt-4 text-lg font-medium text-gray-800">{title}</strong>
            <p class="mt-2 text-gray-500">{description}</p>
            <div class="relative pt-3">
                <a
                    href={`${
                        contact.includes("@") ? "mailto:" : "tel:"
                    }${contact}`}
                    class="mt-2 text-blue-500 hover:px-4 hover:py-2 hover:bg-gray-50 hover:shadow-xl duration-300 z-30"
                >
                    {contact}
                </a>
            </div>
        </div>
    )
});