import { component$ } from "@builder.io/qwik";
import { servicesInfo } from "./servicesInfo";
import { ServiceItems } from "./serviceItems";
import { ButtonArrow } from "../utilities/buttonArrow";

export const Services = component$(() => {
    return (
        <section id="servicios">
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 class="text-3xl font-bold sm:text-4xl">
                            Nos adaptamos a tus necesidades
                        </h2>

                        <p class="mt-4 text-gray-600">
                            Contamos con un amplio repertorio de servicios que
                            se adaptan a las necesidades de tu empresa.
                        </p>
                        <ButtonArrow href="#contacto" text="Empieza ya" bgColor="blue" textColor="white" />
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {servicesInfo.map((item, index) => {
                            return (
                                <ServiceItems
                                    key={index}
                                    {...item}
                                    index={index}
                                >
                                    {item.icon}
                                </ServiceItems>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});
