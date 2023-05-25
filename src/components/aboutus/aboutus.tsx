import { component$ } from "@builder.io/qwik";
import peopleSearch from "../../assets/peopleSearch.svg";


export const Aboutus = component$(() => {
    return (
        <section class="overflow-hidden bg-gray-50 grid md:grid-cols-2 md:items-center">
            
            <div class="p-8 md:p-12 lg:px-16 lg:py-24 md:order-last">
                <div class="mx-auto max-w-xl text-center md:text-left">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        The Midpoint
                    </h2>

                    <p class="hidden text-gray-500 md:mt-4 md:block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et, egestas tempus tellus etiam sed. Quam a scelerisque
                        amet ullamcorper eu enim et fermentum, augue. Aliquet
                        amet volutpat quisque ut interdum tincidunt duis.
                    </p>

                    <div class="mt-4 md:mt-8">
                        <a
                            href="#"
                            class="inline-block rounded bg-primary-500 px-12 py-3 text-sm font-medium transition hover:bg-primary-600 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Contáctanos hoy
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-16 md:order-first">
                <img
                    alt="Violin"
                    src={peopleSearch}
                    class="h-full w-full object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
                    height={500}
                    width={500}
                />
            </div>
        </section>
    );
});