import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { Aboutus } from '~/components/aboutus/aboutus';
import { Services } from '~/components/services/services';
import { Benefits } from '~/components/benefits/benefits';
import { Contact } from '~/components/contact/contact';

export default component$(() => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <Benefits />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: 'The Midpoint',
  meta: [
    {
      name: 'description',
      content: 'ConsultoraThe Midpoint es una empresa que ofrece servicios de consultoría y servicios especializados en recursos humanos, con más de 20 años de experiencia en el sector.',
    },
  ],
};
