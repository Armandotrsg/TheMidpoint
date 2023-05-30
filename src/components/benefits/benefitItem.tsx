import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const BenefitItem = component$(({ benefit, index }: { benefit: string; index: number; }) => {
    const animate = useSignal(false);
    useVisibleTask$(() => {
        setTimeout(() => {
            animate.value = true;
            console.log(animate.value);
        }, 400 + 75 * (index + 1));
    });
    return (
        <div class={`flex opacity-0 items-start  ${animate.value ? "ease-in-out animate-scale-up-center" : ""}`}>
            <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="flex-none w-5 h-5 mt-1 mr-2 text-primary-500"
            >
                <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            <p class="text-lg text-gray-700">{benefit}</p>
        </div>
    );
});
