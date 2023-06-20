import { component$ } from "@builder.io/qwik";
import peopleSearch from "../../assets/peopleSearch.svg";

export const Aboutus = component$(() => {
  return (
    <section
      id="conocenos"
      class="overflow-hidden bg-gray-50 grid md:grid-cols-2 md:items-center pt-5 md:pt-0"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24 md:order-last">
        <div class="mx-auto max-w-xl text-center md:text-left">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            The Midpoint
          </h2>

          <p class="text-gray-500 md:mt-4 block py-5 px-2">
            No es outsourcing, son servicios de consultoría y servicios
            especializados Nosotros proponemos todo un equipo de "backoffice"
            para darte los servicios de RH y tu solo pones a un administrador de
            recursos humanos. Ya no tendrás que contratar a alguien para que te
            administre tu capacitación, comunicación interna, desarrollo
            organizacional, evaluaciones y desempeños, etc.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#beneficios"
              class="inline-block rounded bg-primary-500 px-12 py-3 text-sm font-medium transition hover:bg-primary-600 focus:outline-none focus:ring focus:ring-yellow-400 duration-300"
            >
              Conoce más
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
