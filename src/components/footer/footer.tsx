import { component$ } from "@builder.io/qwik";
import { navigationTabs } from "../navbar/navbar";

export const Footer = component$(() => {
    return (
        <footer class="bg-white">
    <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">
            <a href="/" class="self-center text-2xl font-semibold whitespace-nowrap">
                The Midpoint
            </a>

            <div class="flex flex-wrap justify-center mt-6 -mx-4">
                {
                    navigationTabs.map((tab, index) => (
                        <a key={index} href={tab.href} class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-500 "> {tab.name} </a>
                    ))
                }
                
            </div>

        </div>

        <hr class="my-6 border-gray-200 md:my-10" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-center">
            <p class="text-sm text-gray-500">© Copyright 2023. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
    );
});
