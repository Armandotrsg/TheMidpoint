import { component$ } from "@builder.io/qwik";

export const CTA = component$(() => {
    return (
        <div>
            <div class="text-center w-full mx-auto px-4 sm:px-6 pt-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                    <span class="block">¿Quieres empezar a crecer?</span>
                    <span class="block text-primary-500">Contáctanos hoy</span>
                </h2>
            </div>
        </div>
    );
});
