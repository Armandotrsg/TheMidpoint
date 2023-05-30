export type membersProps = {
    name: string;
    position: string;
    description: string;
    socialMedia: {
        email: string;
        linkedin: string;
        phone: string;
    };
    image?: string;
}

export const teamMembers: membersProps[] = [
    {
        name: "Mtro. Armando Jesús Terrazas López",
        position: "Director General",
        description: "Más de 20 años en la industria trabajando en Recursos Humanos",
        socialMedia: {
            email: "aterrazas@themidpoint.com.mx",
            linkedin: "https://www.linkedin.com/in/armando-jesus-terrazas-lopez-3a82487/",
            phone: "33"
        },
    }
]