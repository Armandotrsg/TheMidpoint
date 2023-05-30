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
                        {/* <a
                            href={""}
                            class={`relative inline-flex items-center justify-center mt-7 md:mt-4 px-12 py-3 overflow-hidden font-medium bg-blue-500 text-white transition duration-300 ease-out rounded shadow-lg group`}
                        >
                            <span
                                class={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease-in-out`}
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </span>
                            <span
                                class={`absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease-in-out`}
                            >
                                Empieza ya
                            </span>
                            <span class="relative invisible">Empieza ya</span>
                        </a> */}
                        <ButtonArrow href={"#contacto"} text={"Empieza ya"} bgColor={"blue"} textColor={"white"} />
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
