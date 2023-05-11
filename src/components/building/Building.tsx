import { component$ } from "@builder.io/qwik";
import maintenance from "../../assets/maintenance.svg";

export default component$(() => {
    return (
        <section class="w-full h-full flex flex-col items-center justify-center text-center p-10">
            <h1 class="text-4xl font-bold p-3 dark:text-white">Midpoint</h1>
            <h2 class="text-2xl font-bold p-3 dark:text-white">Sitio en Construcción</h2>
            <div class="flex items-center justify-center mt-10">
                <picture class="w-[60%] h-full flex-grow items-center justify-center self-center my-auto">
                    <img src={maintenance} alt="Under Construction" class="w-full h-full object-contain" width={500} height={500} />
                </picture>
            </div>
        </section>
    )
})