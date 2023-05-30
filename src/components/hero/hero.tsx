import { component$ } from "@builder.io/qwik";
import heroInterview from "../../assets/heroInterview.svg";

export const Hero = component$(() => {
    return (
        <header>
            <div class="xl:container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between px-10">
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-4xl font-bold leading-none sm:text-5xl">
                        Enfócate en tu negocio, nosotros <br class="hidden md:inline lg:hidden" />
                        <span class="text-primary-500">
                            cuidamos de tu talento humano
                        </span>
                    </h1>
                    <p class="mt-6 mb-8 text-lg sm:mb-12">
                        Dictum aliquam porta in condimentum ac integer
                        <br class="hidden md:inline lg:hidden" />
                        turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            rel="noopener noreferrer"
                            href="#contacto"
                            class="px-8 py-3 text-lg font-semibold rounded bg-primary-400 hover:bg-primary-500 text-gray-900 duration-300"
                        >
                            Contáctanos
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="#servicios"
                            class="px-8 py-3 text-lg font-semibold border rounded hover:bg-gray-50 duration-300"
                        >
                            Conoce más
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src={heroInterview}
                        alt="Interview illustration"
                        class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                        height={384}
                        width={384}
                    />
                </div>
            </div>
        </header>
    );
});
