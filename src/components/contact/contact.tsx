import { component$ } from "@builder.io/qwik";
import { CTA } from "./cta";
import { contactInfo, type ContactCardProps } from "./contactInfo";

export const Contact = component$(() => {
    const ContactCard = ({
        title,
        description,
        icon,
        contact,
    }: ContactCardProps) => {
        return (
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                    {icon}
                </span>
                <h5 class="mt-4 text-lg font-medium text-gray-800">{title}</h5>
                <p class="mt-2 text-gray-500">{description}</p>
                <div class="relative pt-3">
                    <a
                        href={`${
                            contact.includes("@") ? "mailto:" : "tel:"
                        }${contact}`}
                        class="mt-2 text-blue-500 hover:px-4 hover:py-2 hover:bg-gray-50 hover:shadow-xl duration-300 z-30"
                    >
                        {contact}
                    </a>
                </div>
            </div>
        );
    };
    return (
        <section id="contacto">
            <CTA />
            <div class="container px-6 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
                    {contactInfo.map((contact, index) => (
                        <ContactCard {...contact} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});
