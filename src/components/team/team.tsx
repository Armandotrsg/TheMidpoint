import { component$ } from "@builder.io/qwik";
import { teamMembers, type membersProps } from "./teamMembers";

export const Team = component$(() => {
    const TeamCard = ({
        name,
        position,
        description,
        socialMedia,
        image,
    }: membersProps) => {
        return (
            <div>
                <div class="relative overflow-hidden transition duration-300 transform rounded-lg shadow-lg lg:hover:-translate-y-2 hover:shadow-3xl">
                    <img
                        class="object-cover w-full h-96 md:h-[25rem] lg:h-80 origin-top"
                        src={image}
                        alt={`Retrato de ${name}`}
                        height={500}
                        width={500}
                    />
                    <div class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <h4 class="mb-1 text-lg font-bold text-gray-100">
                            {name}
                        </h4>
                        <p class="mb-4 text-xs text-gray-100">{position}</p>
                        <p class="mb-4 text-xs tracking-wide text-gray-400">
                            {description}
                        </p>
                        <div class="flex items-center justify-center space-x-3">
                            <a
                                href={`mailto:${socialMedia.email}`}
                                class="text-white transition-colors duration-300 hover:text-primary-500"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    aria-label="Email"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href={`tel:${socialMedia.phone}`}
                                class="text-white transition-colors duration-300 hover:text-primary-500"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    aria-label="Telephone"
                                    class="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href={socialMedia.linkedin}
                                target="_blank"
                                class="text-white transition-colors duration-300 hover:text-primary-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    class="w-5 h-5"
                                    viewBox="0 0 16 16"
                                    aria-label="LinkedIn"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div class="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                {/* Badge */}
                <div>
                    <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary-700">
                        Nuestro Equipo
                    </p>
                </div>
                {/* Heading */}
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span class="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                width="52"
                                height="24"
                            ></rect>
                        </svg>
                        <span class="relative">Conoce &nbsp;</span>
                    </span>
                    a nuestros talentosos colaboradores
                </h2>
                {/* Text */}
                <p class="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque rem aperiam, eaque ipsa
                    quae.
                </p>
            </div>
            {/* Team */}
            <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {
                    teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))
                }
                {
                    teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))
                }
                {
                    teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))
                }
            </div>
        </div>
    );
});
