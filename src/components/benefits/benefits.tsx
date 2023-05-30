import { component$ } from "@builder.io/qwik";
import { benefitsInfo } from "./benefitsInfo";
import { BenefitItem } from "./benefitItem";

export const Benefits = component$(() => {
    return (
        <section id="beneficios" class="bg-gray-50">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24 py-20 mx-auto max-w-7xl">
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
                            <BenefitItem key={index} benefit={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
