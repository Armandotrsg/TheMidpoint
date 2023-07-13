import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer/footer";
import { routeAction$ } from "@builder.io/qwik-city";

export const useSendEmail = routeAction$(async (user) => {
  const res = await fetch("https://seifen-contact-api.vercel.app/api/themidpoint/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
});
export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
