import { component$ } from "@builder.io/qwik";
import { benefitsInfo } from "./benefitsInfo";

export const Benefits = component$(() => {
    const BenefitItem = ({ benefit }: { benefit: string }) => {
        return (
            <div class="flex items-start">
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
    };
    return (
        <section class="p-8 md:p-12 lg:px-16 lg:py-24 py-20 mx-auto max-w-7xl">
            <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
                <div class="order-first lg:order-last">
                    <h2 class="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center text-black sm:text-left md:text-4xl">
                        ¿Por qué elegirnos?
                    </h2>
                    <p class="mb-6 text-lg text-center text-gray-600 sm:text-left md:text-xl">
                        Más de 20 años de experiencia en el sector nos avalan.
                    </p>
                </div>
                <div class="flex flex-col flex-grow space-y-5">
                    {benefitsInfo.map((item, index) => (
                        <BenefitItem key={index} benefit={item} />
                    ))}
                </div>
            </div>
        </section>
    );
});
