import { component$, useSignal } from "@builder.io/qwik";

export const navigationTabs = [
    {
        name: "Conócenos",
        href: "#conocenos",
    },
    {
        name: "Productos",
        href: "#productos",
    },
    {
        name: "Contacto",
        href: "#contacto",
    },
    {
        name: "FAQ's",
        href: "#faqs",
    },
];

export const Navbar = component$(() => {
    const open = useSignal(true);

    return (
        <nav class="bg-white border-gray-200 px-5">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-8 mr-3"
                        alt="Flowbite Logo"
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
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        {navigationTabs.map((tab, index) => (
                            <li key={index}>
                                <a
                                    href={tab.href}
                                    class="block py-2 pl-3 pr-4 rounded md:bg-transparent text-secondary-950 md:hover:text-secondary-800 md:hover:bg-transparent hover:bg-gray-200 md:p-0"
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
