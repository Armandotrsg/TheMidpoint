import { component$ } from "@builder.io/qwik";
import { CTA } from "./cta";
import { contactInfo } from "./contactInfo";
import { ContactCard } from "./contactCard";

export const Contact = component$(() => {
    return (
        <section id="contacto">
            <CTA />
            <div class="container px-6 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
                    {contactInfo.map((contact, index) => (
                        <ContactCard {...contact} index={index} key={index}>
                            {contact.icon}
                        </ContactCard>
                    ))}
                </div>
            </div>
        </section>
    );
});
