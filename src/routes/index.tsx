import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Building from '~/components/building/building';

export default component$(() => {
  return (
    <>
      <Building />
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
