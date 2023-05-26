import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from '~/components/hero/hero';
import { Aboutus } from '~/components/aboutus/aboutus';
import { Services } from '~/components/services/services';
import { Benefits } from '~/components/benefits/benefits';
import { Team } from '~/components/team/team';

export default component$(() => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Services />
      <Benefits />
      <Team />
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
