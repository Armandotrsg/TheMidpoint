import { component$ } from "@builder.io/qwik";

interface ButtonArrowProps {
    href: string;
    text: string;
    textColor: "white" | "black";
    bgColor: string;
}

export const ButtonArrow = component$(({href, text, bgColor, textColor} : ButtonArrowProps) => {
    return (
        <a
            href={href}
            class={`relative inline-flex items-center justify-center mt-7 md:mt-4 px-12 py-3 overflow-hidden font-medium bg-${bgColor}-500 text-${textColor} transition duration-300 ease-out rounded shadow-lg group`}
        >
            <span class={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-${bgColor}-500 group-hover:translate-x-0 ease-in-out`}>
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
            <span class={`absolute flex items-center justify-center w-full h-full text-${textColor} transition-all duration-300 transform group-hover:translate-x-full ease-in-out`}>
                {text}
            </span>
            <span class="relative invisible">{text}</span>
        </a>
    );
});
