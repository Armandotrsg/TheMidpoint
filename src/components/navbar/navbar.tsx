import { component$, useSignal, $ } from "@builder.io/qwik";
import logo from "../../assets/logo.png";

export const navigationTabs = [
    {
        name: "Conócenos",
        href: "#conocenos",
    },
    {
        name: "Servicios",
        href: "#servicios",
    },
    {
        name: "Beneficios",
        href: "#beneficios",
    },
    {
        name: "Contacto",
        href: "#contacto",
    },
];

export const Navbar = component$(() => {
    const open = useSignal(true);
    const scrolled = useSignal(false);

    const handleScroll = $(() => {
        if (window.scrollY > 50) {
            scrolled.value = true;
        } else {
            scrolled.value = false;
        }
    });

    return (
        <nav window:onScroll$={handleScroll} class={`${scrolled.value ? "shadow-md" : ""} bg-white duration-300 ease-in-out px-5 fixed w-full z-40`}>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img
                        src={logo}
                        class="h-8 mr-3"
                        alt="The Midpoint Logo"
                        height={32}
                        width={32}
                    />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                        The Midpoint
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick$={() => open.value = !open.value}
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    class={`${open.value && "hidden relative z-30"} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        {navigationTabs.map((tab, index) => (
                            <li key={index}>
                                <a
                                    href={tab.href}
                                    class="block py-2 pl-3 pr-4 rounded md:bg-transparent text-secondary-950 md:hover:text-primary-500 md:hover:bg-transparent duration-300 hover:bg-gray-200 md:p-0"
                                    aria-current="page"
                                >
                                    {tab.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
});
