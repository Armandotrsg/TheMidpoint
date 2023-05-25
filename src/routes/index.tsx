import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { Aboutus } from '~/components/aboutus/aboutus';
import { Features } from '~/components/features/features';

export default component$(() => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Features />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Midpoint',
  meta: [
    {
      name: 'description',
      content: 'Consultora',
    },
  ],
};
