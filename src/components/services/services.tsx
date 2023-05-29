import { component$ } from "@builder.io/qwik";
import { servicesInfo } from "./servicesInfo";

export const Services = component$(() => {
    const ServiceItems = ({ title, icon }: any) => {
        return (
            <div
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    {icon}
                </span>
                <h2 class="mt-2 font-bold">{title}</h2>
            </div>
        );
    };
    return (
        <section>
            <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 class="text-3xl font-bold sm:text-4xl">
                        Nos adaptamos a tus necesidades
                        </h2>

                        <p class="mt-4 text-gray-600">
                        Contamos con un amplio repertorio de servicios que se
                        adaptan a las necesidades de tu empresa.
                        </p>

                        <a
                            href="#"
                            class="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Empieza hoy
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {servicesInfo.map((item, index) => {
                            return <ServiceItems key={index} {...item} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
});
